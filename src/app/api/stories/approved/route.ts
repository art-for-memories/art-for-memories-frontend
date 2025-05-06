import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
  try {
    const approvedStories = await prisma.story.findMany({
      select: {
        id: true,
        title: true,
        caption: true,
        author: true,
        type: true,
        date: true,
        image: true,
        kinyarwandaContent: true,
        englishContent: true,
        frenchContent: true,
        file: true,
      },
    });

    return NextResponse.json({ success: true, data: approvedStories });
  } catch (error) {
    console.error("Error fetching approved stories:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch approved stories" },
      { status: 500 }
    );
  }
}
