/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      storyType,
      title,
      author,
      date,
      files,
      images,
    } = body;

    const story = await prisma.story.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        storyType,
        title,
        author,
        date: new Date(date),
        image: images[0],
        StoryFile: {
          create: Array.isArray(files)
            ? files.map((fileUrl: string) => ({
                url: fileUrl,
              }))
            : [],
        },
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

    return NextResponse.json(stories);
  } catch (error) {
    console.error("Error fetching stories:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
