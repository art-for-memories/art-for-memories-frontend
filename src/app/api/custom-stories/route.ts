import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const file = formData.get("file") as string | null;
    const storyType = formData.get("storyType")?.toString() || "";
    const title = formData.get("title")?.toString() || "";
    const author = formData.get("author")?.toString() || "";
    const date = formData.get("date")?.toString() || new Date().toISOString();
    const image = formData.get("image") as string;
    const kinyarwandaContent =
      formData.get("kinyarwandaContent")?.toString() || "";
    const englishContent = formData.get("englishContent")?.toString() || "";
    const frenchContent = formData.get("frenchContent")?.toString() || "";
    const current_story_id =
      formData.get("current_story_id")?.toString() || null;

    const story = current_story_id
      ? await prisma.customStories.update({
          where: { id: current_story_id },
          data: {
            firstName,
            lastName,
            email,
            phone,
            file,
            storyType,
            title,
            author,
            date: new Date(date),
            kinyarwandaContent: kinyarwandaContent || "No content provided",
            englishContent: englishContent || "No content provided",
            frenchContent: frenchContent || "No content provided",
            image,
          },
        })
      : await prisma.customStories.create({
          data: {
            firstName,
            lastName,
            email,
            phone,
            file,
            storyType,
            title,
            author,
            date: new Date(date),
            kinyarwandaContent: kinyarwandaContent || "No content provided",
            englishContent: englishContent || "No content provided",
            frenchContent: frenchContent || "No content provided",
            image,
          },
        });

    return NextResponse.json(story, { status: 201 });
  } catch (error) {
    console.error("Error creating story:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const stories = await prisma.customStories.findMany({
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

    // Filter out stories with null type values
    const filteredStories = stories.map((story) => ({
      ...story,
      type: story.storyType || "Unknown",
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
