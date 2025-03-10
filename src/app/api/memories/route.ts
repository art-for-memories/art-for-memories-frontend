import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();
    const memory = await prisma.memory.create({
      data: { title, content },
    });
    return NextResponse.json(memory, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create memory" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const memories = await prisma.memory.findMany();
    return NextResponse.json(memories);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch memories" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, title, content } = await req.json();
    const memory = await prisma.memory.update({
      where: { id },
      data: { title, content },
    });
    return NextResponse.json(memory);
  } catch {
    return NextResponse.json(
      { error: "Failed to update memory" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.memory.delete({ where: { id } });
    return NextResponse.json({ message: "Memory deleted successfully" });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete memory" },
      { status: 500 }
    );
  }
}
