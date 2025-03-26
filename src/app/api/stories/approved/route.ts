import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
  try {
    const approvedStories = await prisma.story.findMany({
      where: {
        status: "approved",
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        storyType: true,
        title: true,
        author: true,
        date: true,
        image: true,
        StoryFile: true,
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
