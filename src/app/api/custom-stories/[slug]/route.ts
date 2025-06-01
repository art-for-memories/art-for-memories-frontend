import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req: NextRequest) {
  const { slug } = await req.json();

  try {
    const story = await prisma.customStories.findUnique({
      where: {
        id: slug,
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
        file: true,
        image: true,
        kinyarwandaContent: true,
        englishContent: true,
        frenchContent: true,
      },
    });

    if (!story) {
      return NextResponse.json({ error: "Story not found" }, { status: 404 });
    }

    return NextResponse.json(story);
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { slug } = await req.json();

  try {
    const deletedStory = await prisma.story.delete({
      where: {
        id: slug,
      },
    });

    return NextResponse.json(deletedStory, { status: 200 });
  } catch (error) {
    console.error("Error deleting story:", error);
    return NextResponse.json(
      { error: "Failed to delete story" },
      { status: 500 }
    );
  }
}
