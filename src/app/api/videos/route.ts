import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { files } = body;

    if (files && Array.isArray(files)) {
      const createPromises = files.map((fileUrl) =>
        prisma.video.create({
          data: {
            url: fileUrl,
          },
        })
      );

      await Promise.all(createPromises);
    } else {
      return NextResponse.json({ error: "Invalid files format" }, { status: 400 });
    }

    return NextResponse.json({ message: "Videos created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating video:", error);
    return NextResponse.json(
      { error: "Failed to create video" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const videos = await prisma.video.findMany();
    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    console.error("Error fetching videos:", error);
    return NextResponse.json({ error: "Failed to fetch videos" }, { status: 500 });
  }
}
