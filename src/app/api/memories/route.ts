import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, phone_number, memories, images } = body;

    const memory = await prisma.memories.create({
      data: {
        firstName: first_name,
        lastName: last_name,
        phone: phone_number,
        memory: memories,
        email,
      },
    });

    if (images && images.length > 0) {
      await Promise.all(
        images.map(async (image: string) => {
          await prisma.memoriesImage.create({
            data: { image, memoryId: memory.id },
          });
        })
      );
    }

    return NextResponse.json(memory);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create memory", details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const memories = await prisma.memories.findMany();
    return NextResponse.json(memories);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch memories", details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, first_name, last_name, email, phone_number, memories, status, images } = body;

    const memory = await prisma.memories.update({
      where: { id },
      data: {
        firstName: first_name,
        lastName: last_name,
        phone: phone_number,
        memory: memories,
        email,
      },
    });

    if (status === "approved" || status === "rejected") {
      await prisma.memories.update({
        where: { id },
        data: {
          status: status as "approved" | "rejected",
        },
      });
    }

    if (images && images.length > 0) {
      await prisma.memoriesImage.deleteMany({ where: { memoryId: id } });

      await Promise.all(
        images.map(async (image: string) => {
          await prisma.memoriesImage.create({
            data: { image, memoryId: memory.id },
          });
        })
      );
    }

    return NextResponse.json(memory);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update memory", details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;

    await prisma.memories.delete({ where: { id } });

    return NextResponse.json({ message: "Memory deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete memory", details: (error as Error).message },
      { status: 500 }
    );
  }
}
