/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      title,
      caption,
      author,
      type,
      date,
      image,
      kinyarwandaContent,
      englishContent,
      frenchContent,
    } = body;

    const story = await prisma.story.create({
      data: {
        title,
        caption,
        author,
        type,
        date: new Date(date),
        image,
        kinyarwandaContent,
        englishContent,
        frenchContent,
      },
    });

    return NextResponse.json(story, { status: 201 });
  } catch (error) {
    console.error("Error creating story:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const stories = await prisma.story.findMany({
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
      },
    });

    // Filter out stories with null type values
    const filteredStories = stories.map((story) => ({
      ...story,
      type: story.type || "Unknown",
    }));

    return NextResponse.json(filteredStories);
  } catch (error) {
    console.error("Error fetching stories:", error);
    return NextResponse.json({ error: "Failed to fetch stories" }, { status: 500 });
  }
}
