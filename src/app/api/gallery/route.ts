import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { mkdir, writeFile } from "fs/promises";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, image } = body;

    if (!name || !image) {
      return NextResponse.json(
        { error: "Name and image are required" },
        { status: 400 }
      );
    }

    const fileId = uuidv4();
    const filePath = path.join(
      process.cwd(),
      "public/uploads",
      `${fileId}-${image.name}`
    );

    await mkdir(path.dirname(filePath), { recursive: true });
    const arrayBuffer = await image.arrayBuffer();
    await writeFile(filePath, Buffer.from(arrayBuffer));

    const gallery = await prisma.gallery.create({
      data: {
        name,
        image: `/uploads/${fileId}-${image.name}`,
      },
    });

    return NextResponse.json(gallery, { status: 201 });
  } catch (error) {
    console.error("Error creating gallery entry:", error);
    return NextResponse.json(
      { error: "Failed to create gallery entry" },
      { status: 500 }
    );
  }
}
