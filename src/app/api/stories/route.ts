/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { mkdir } from "fs/promises";
import { writeFile } from "fs/promises";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title")?.toString() || "";
    const caption = formData.get("caption")?.toString() || "";
    const author = formData.get("author")?.toString() || "";
    const type = formData.get("type")?.toString() || "";
    const date = formData.get("date")?.toString() || new Date().toISOString();
    const image = formData.get("image")?.toString() || "";
    const kinyarwandaContent =
      formData.get("kinyarwandaContent")?.toString() || "";
    const englishContent = formData.get("englishContent")?.toString() || "";
    const frenchContent = formData.get("frenchContent")?.toString() || "";
    const file = formData.get("file") as File | null;
    const current_story_id =
      formData.get("current_story_id")?.toString() || null;

    const story = current_story_id
      ? await prisma.story.update({
          where: { id: current_story_id },
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
        })
      : await prisma.story.create({
          data: {
            title,
            caption,
            author,
            type,
            date: new Date(date),
            image,
            kinyarwandaContent: kinyarwandaContent || "No content provided",
            englishContent: englishContent || "No content provided",
            frenchContent: frenchContent || "No content provided",
          },
        });

    if (file && file instanceof File) {
      const fileId = uuidv4();
      const fileName = `${fileId}-${file.name}`;
      const filePath = path.join(
        process.cwd(),
        "public/uploads/files",
        fileName
      );
      const fileUrl = `https://artformemories.com/uploads/files/${fileName}`;

      const bufferPromise = mkdir(path.dirname(filePath), {
        recursive: true,
      }).then(() =>
        file
          .arrayBuffer()
          .then((arrayBuffer) => writeFile(filePath, Buffer.from(arrayBuffer)))
      );

      const dbPromise = bufferPromise.then(() =>
        prisma.story.update({
          where: { id: story.id },
          data: { file: fileUrl },
        })
      );

      dbPromise.then(() => {
        console.log("File saved to database with URL:", fileUrl);
      });
    }

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
        file: true,
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
    return NextResponse.json(
      { error: "Failed to fetch stories" },
      { status: 500 }
    );
  }
}
