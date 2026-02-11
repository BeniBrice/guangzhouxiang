import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, companyName, message } = body ?? {};

    if (!name?.trim())
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    if (!email?.trim())
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    if (!message?.trim())
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 },
      );

    const submission = await prisma.contactSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        companyName: companyName?.trim() ?? "",
        message: message.trim(),
      },
    });

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 },
    );
  }
}
