import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      console.error("Invalid JSON body:", parseError);
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { name, image } = body;

    const gallery = await prisma.gallery.create({
      data: {
        name,
        image,
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


export async function GET() {
  try {
    const galleries = await prisma.gallery.findMany({
      select: {
        id: true,
        name: true,
        image: true,
      },
    });

    return NextResponse.json(galleries, { status: 200 });
  } catch (error) {
    console.error("Error fetching gallery entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery entries" },
      { status: 500 }
    );
  }
}