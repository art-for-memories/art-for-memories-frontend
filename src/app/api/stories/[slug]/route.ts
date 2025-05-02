import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req: NextRequest) {
  const { slug } = await req.json();

  try {
    const story = await prisma.story.findUnique({
      where: {
        id: slug,
      },
      select: {
        id: true,
        title: true,
        author: true,
        date: true,
        image: true
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
