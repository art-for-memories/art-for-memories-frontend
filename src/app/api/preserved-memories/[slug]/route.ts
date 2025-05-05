import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function DELETE(req: NextRequest) {
  const { slug } = await req.json();

  try {
    const deletedStory = await prisma.art.delete({
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

export async function POST(req: NextRequest) {
  const { slug } = await req.json();

  try {
    const story = await prisma.art.findUnique({
      where: {
        id: slug,
      },
      select: {
        id: true,
        name: true,
        age: true,
        oldPhoto: true,
        preservedPhoto: true,
      },
    });

    if (!story) {
      return NextResponse.json({ error: "Story not found" }, { status: 404 });
    }

    return NextResponse.json(story);
  } catch (error) {
    console.error("Error creating art:", error);
    return NextResponse.json(
      { error: "Failed to create art" },
      { status: 500 }
    );
  }
}
