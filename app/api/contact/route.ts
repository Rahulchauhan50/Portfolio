import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

// ---------------------------------------------------------------------------
// Nodemailer transporter  (reused across warm invocations)
// ---------------------------------------------------------------------------
function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;

  if (!user || !pass) {
    throw new Error(
      "Missing GMAIL_USER or GMAIL_PASS environment variables. " +
      "Create a .env.local file in the project root with these values."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

// ---------------------------------------------------------------------------
// HTML templates
// ---------------------------------------------------------------------------
function adminEmailHtml({ name, email, message }: ContactPayload) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background:#06111e;font-family:'Segoe UI',Arial,sans-serif;color:#eff6ff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:32px auto;">
    <tr>
      <td style="background:linear-gradient(135deg,#0f1b2d,#13243a);border:1px solid rgba(125,211,252,0.18);border-radius:16px;padding:40px 36px;">
        <!-- Header -->
        <p style="margin:0 0 4px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#7dd3fc;font-weight:700;">
          Portfolio Contact
        </p>
        <h1 style="margin:0 0 28px;font-size:26px;font-weight:800;color:#ffffff;line-height:1.2;">
          📬 New message from <span style="color:#7dd3fc;">${name}</span>
        </h1>

        <!-- Info rows -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
              <span style="font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#a8b6cb;font-weight:700;">Name</span><br/>
              <span style="font-size:15px;color:#fff;font-weight:600;">${name}</span>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
              <span style="font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#a8b6cb;font-weight:700;">Email</span><br/>
              <a href="mailto:${email}" style="font-size:15px;color:#7dd3fc;font-weight:600;text-decoration:none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;">
              <span style="font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#a8b6cb;font-weight:700;">Message</span><br/>
              <p style="margin:8px 0 0;font-size:15px;color:#eff6ff;line-height:1.65;white-space:pre-wrap;">${message}</p>
            </td>
          </tr>
        </table>

        <!-- CTA -->
        <a href="mailto:${email}?subject=Re: Your message" 
           style="display:inline-block;margin-top:8px;padding:12px 28px;background:linear-gradient(135deg,rgba(125,211,252,0.96),rgba(37,99,235,0.92));color:#04111d;font-weight:700;font-size:13px;letter-spacing:.12em;text-transform:uppercase;border-radius:8px;text-decoration:none;">
          Reply to ${name}
        </a>

        <!-- Footer -->
        <p style="margin:32px 0 0;font-size:11px;color:#a8b6cb;">
          Sent from your portfolio contact form · ${new Date().toUTCString()}
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function userEmailHtml({ name }: Pick<ContactPayload, "name">) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Got your message!</title>
</head>
<body style="margin:0;padding:0;background:#06111e;font-family:'Segoe UI',Arial,sans-serif;color:#eff6ff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:32px auto;">
    <tr>
      <td style="background:linear-gradient(135deg,#0f1b2d,#13243a);border:1px solid rgba(125,211,252,0.18);border-radius:16px;padding:40px 36px;">
        <!-- Header -->
        <p style="margin:0 0 4px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#7dd3fc;font-weight:700;">
          RAHUL.DEV
        </p>
        <h1 style="margin:0 0 16px;font-size:26px;font-weight:800;color:#ffffff;line-height:1.2;">
          Hey ${name}, message received! 🚀
        </h1>
        <p style="margin:0 0 28px;font-size:15px;color:#a8b6cb;line-height:1.7;">
          Thanks for reaching out through my portfolio. I've received your message and will get back to you typically within <strong style="color:#7dd3fc;">24–48 hours</strong>.
        </p>

        <!-- Divider -->
        <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:0 0 28px;" />

        <p style="margin:0 0 8px;font-size:13px;color:#a8b6cb;line-height:1.6;">
          In the meantime, feel free to explore my work or connect with me on LinkedIn.
        </p>

        <!-- Social links -->
        <table cellpadding="0" cellspacing="0" style="margin-top:20px;">
          <tr>
            <td style="padding-right:12px;">
              <a href="https://github.com/rahulc0dy" 
                 style="display:inline-block;padding:10px 18px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);color:#fff;font-size:12px;font-weight:600;border-radius:8px;text-decoration:none;">
                GitHub
              </a>
            </td>
            <td>
              <a href="https://linkedin.com/in/rahulchauhan" 
                 style="display:inline-block;padding:10px 18px;background:rgba(125,211,252,0.12);border:1px solid rgba(125,211,252,0.22);color:#7dd3fc;font-size:12px;font-weight:600;border-radius:8px;text-decoration:none;">
                LinkedIn
              </a>
            </td>
          </tr>
        </table>

        <!-- Footer -->
        <p style="margin:36px 0 0;font-size:11px;color:#a8b6cb;">
          You're receiving this because you filled out the contact form on rahul.dev.<br/>
          If this wasn't you, you can safely ignore this email.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as ContactPayload;
    const { name, email, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const adminEmail = process.env.GMAIL_USER!;
    const transporter = getTransporter();

    // Send both emails in parallel
    await Promise.all([
      // 1️⃣  Admin notification
      transporter.sendMail({
        from: `"Portfolio Contact" <${adminEmail}>`,
        to: adminEmail,
        replyTo: email,
        subject: `📬 New message from ${name}`,
        html: adminEmailHtml({ name, email, message }),
      }),

      // 2️⃣  User confirmation
      transporter.sendMail({
        from: `"Rahul Chauhan" <${adminEmail}>`,
        to: email,
        subject: `Got your message, ${name}! 🚀`,
        html: userEmailHtml({ name }),
      }),
    ]);

    return NextResponse.json(
      { success: true, message: "Emails sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[/api/contact] Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
