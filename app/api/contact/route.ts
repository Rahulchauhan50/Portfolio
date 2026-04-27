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

  console.log("[getTransporter] Checking credentials...");
  console.log("[getTransporter] GMAIL_USER exists:", !!user);
  console.log("[getTransporter] GMAIL_PASS exists:", !!pass);

  if (!user || !pass) {
    const error = new Error(
      "Missing GMAIL_USER or GMAIL_PASS environment variables. " +
      "Create a .env.local file in the project root with these values. " +
      "For Gmail, use an App Password (not your regular password). " +
      "See: https://myaccount.google.com/apppasswords"
    );
    console.error("[getTransporter]", error.message);
    throw error;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { 
      user, 
      pass 
    },
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
<body style="margin:0;padding:0;background:#f8fafb;font-family:'Segoe UI',-apple-system,BlinkMacSystemFont,sans-serif;color:#1a202c;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:40px auto;padding:0 16px;">
    <tr>
      <td style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:48px 40px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <!-- Header -->
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#0f766e;font-weight:600;">
          New Message
        </p>
        <h1 style="margin:0 0 32px;font-size:28px;font-weight:700;color:#1a202c;line-height:1.2;">
          📬 Message from ${name}
        </h1>

        <!-- Info rows -->
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
          <tr>
            <td style="padding:0 0 16px;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#718096;font-weight:600;display:block;margin-bottom:4px;">Sender Name</span>
              <span style="font-size:16px;color:#1a202c;font-weight:600;">${name}</span>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#718096;font-weight:600;display:block;margin-bottom:4px;">Reply To</span>
              <a href="mailto:${email}" style="font-size:16px;color:#0ea5e9;font-weight:600;text-decoration:none;word-break:break-all;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 0;">
              <span style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#718096;font-weight:600;display:block;margin-bottom:8px;">Message</span>
              <div style="background:#f7fafc;border-left:3px solid #0ea5e9;padding:16px;border-radius:4px;font-size:15px;color:#2d3748;line-height:1.7;white-space:pre-wrap;word-wrap:break-word;">${message}</div>
            </td>
          </tr>
        </table>

        <!-- CTA -->
        <table cellpadding="0" cellspacing="0" style="margin-top:32px;">
          <tr>
            <td>
              <a href="mailto:${email}?subject=Re: Your message" 
                 style="display:inline-block;padding:12px 32px;background:#0ea5e9;color:#ffffff;font-weight:600;font-size:14px;letter-spacing:.02em;border-radius:8px;text-decoration:none;">
                Reply to ${name}
              </a>
            </td>
          </tr>
        </table>

        <!-- Divider -->
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0;" />

        <!-- Footer -->
        <p style="margin:0;font-size:12px;color:#718096;line-height:1.6;">
          <strong>Received:</strong> ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })} <br/>
          <strong>From:</strong> Portfolio Contact Form
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
<body style="margin:0;padding:0;background:#f8fafb;font-family:'Segoe UI',-apple-system,BlinkMacSystemFont,sans-serif;color:#1a202c;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:40px auto;padding:0 16px;">
    <tr>
      <td style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:48px 40px;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
        <!-- Logo/Branding -->
        <p style="margin:0 0 24px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#0f766e;font-weight:700;">
          Rahul Chauhan
        </p>

        <!-- Main heading -->
        <h1 style="margin:0 0 24px;font-size:32px;font-weight:700;color:#1a202c;line-height:1.2;">
          Thanks for reaching out! 🚀
        </h1>

        <!-- Body content -->
        <p style="margin:0 0 20px;font-size:15px;color:#4a5568;line-height:1.8;">
          Hi ${name},
        </p>
        
        <p style="margin:0 0 24px;font-size:15px;color:#4a5568;line-height:1.8;">
          I've received your message and appreciate you taking the time to connect. I typically respond within <strong style="color:#1a202c;">24–48 hours</strong>, so expect to hear back from me soon.
        </p>

        <p style="margin:0 0 32px;font-size:15px;color:#4a5568;line-height:1.8;">
          In the meantime, feel free to explore my recent work or connect with me on social media below.
        </p>

        <!-- CTA Buttons -->
        <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
          <tr>
            <td style="padding-right:12px;padding-bottom:12px;">
              <a href="https://github.com/Rahulchauhan50" 
                 style="display:inline-block;padding:12px 28px;background:#f0f4f8;border:1px solid #cbd5e0;color:#2d3748;font-size:14px;font-weight:600;border-radius:8px;text-decoration:none;transition:all 0.2s ease;">
                → GitHub
              </a>
            </td>
            <td style="padding-bottom:12px;">
              <a href="https://www.linkedin.com/in/rahulchauhan50" 
                 style="display:inline-block;padding:12px 28px;background:#0ea5e9;color:#ffffff;font-size:14px;font-weight:600;border-radius:8px;text-decoration:none;">
                → LinkedIn
              </a>
            </td>
          </tr>
        </table>

        <!-- Divider -->
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0;" />

        <!-- Signature -->
        <p style="margin:0 0 12px;font-size:16px;color:#1a202c;font-weight:600;">
          Rahul Chauhan
        </p>
        <p style="margin:0 0 24px;font-size:14px;color:#718096;">
          Product Designer & Developer<br/>
          <a href="https://rahulcodes.tech" style="color:#0ea5e9;text-decoration:none;">rahulcodes.tech</a>
        </p>

        <!-- Footer -->
        <p style="margin:0;font-size:12px;color:#a0aec0;line-height:1.6;">
          You received this email because you filled out the contact form on my portfolio. If this wasn't you, you can safely ignore this message.
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
    console.error("[/api/contact] Error type:", error instanceof Error ? error.constructor.name : typeof error);
    console.error("[/api/contact] Error message:", error instanceof Error ? error.message : String(error));
    console.error("[/api/contact] Full error:", error);

    // More specific error message
    let userMessage = "Failed to send email. Please try again later.";
    if (error instanceof Error && error.message.includes("GMAIL_USER")) {
      userMessage = "Email service not configured. Contact administrator.";
    } else if (error instanceof Error && error.message.includes("Invalid login")) {
      userMessage = "Email service authentication failed. Check your credentials.";
    }

    return NextResponse.json(
      { error: userMessage, debug: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
