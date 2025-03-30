import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, age, oldPhoto, preservedPhoto } = body;

    const art = await prisma.art.create({
      data: {
        name,
        age: parseInt(age),
        oldPhoto,
        preservedPhoto,
      },
    });

    return NextResponse.json(art, { status: 201 });
  } catch (error) {
    console.error("Error creating art:", error);
    return NextResponse.json(
      { error: "Failed to create art" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const arts = await prisma.art.findMany();
    return NextResponse.json(arts);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch arts" },
      { status: 500 }
    );
  }
}
