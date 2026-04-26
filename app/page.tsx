import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Rahul Chauhan's portfolio showcasing full-stack development, AI automation workflows, and modern web applications.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rahul Chauhan | Full-Stack Developer Portfolio",
    description:
      "Explore Rahul Chauhan's work in full-stack development, AI-driven automation, and scalable web applications.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Chauhan | Full-Stack Developer Portfolio",
    description:
      "Explore Rahul Chauhan's work in full-stack development, AI-driven automation, and scalable web applications.",
  },
};

export default function Page() {
  return <HomePageClient />;
}
