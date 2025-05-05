import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function DELETE(req: Request) {
  const { slug } = await req.json();

  try {
    const deletedImage = await prisma.gallery.delete({
      where: {
        id: slug,
      },
    });

    return NextResponse.json(deletedImage, { status: 200 });
  } catch (error) {
    console.error("Error deleting image:", error);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  }
}
