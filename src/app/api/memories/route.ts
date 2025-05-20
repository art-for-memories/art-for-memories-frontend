import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { uploadFile } from "@/utils/uploadFile";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const firstname = formData.get("firstname")?.toString() || "";
    const lastname = formData.get("lastname")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const memories = formData.get("memories")?.toString() || "";
    const current_memory_id =
      formData.get("current_memory_id")?.toString() || "";

    if (current_memory_id) {
      const existingMemory = await prisma.memories.findUnique({
        where: { id: current_memory_id },
      });

      if (existingMemory) {
        const memory = await prisma.memories.update({
          where: { id: current_memory_id },
          data: {
            firstName: firstname,
            lastName: lastname,
            email: email,
            phone: phone,
            memory: memories,
          },
        });

        const imagesEntries = formData.getAll("images").filter(Boolean);
        if (imagesEntries && imagesEntries.length > 0) {
          await prisma.memoriesImage.deleteMany({
            where: { memoryId: current_memory_id },
          });

          for (const entry of imagesEntries) {
            if (entry instanceof File) {
              const url = await uploadFile(entry);
              await prisma.memoriesImage.create({
                data: {
                  image: url,
                  memoryId: memory.id,
                },
              });
            }
          }
        }

        return NextResponse.json({ success: true, message: "Memory updated" });
      }
    } else {
      const memory = await prisma.memories.create({
        data: {
          firstName: firstname,
          lastName: lastname,
          email: email,
          phone: phone,
          memory: memories,
        },
      });

      const imagesEntries = formData.getAll("images").filter(Boolean);
      if (imagesEntries && imagesEntries.length > 0) {
        for (const entry of imagesEntries) {
          if (entry instanceof File) {
            const url = await uploadFile(entry);
            await prisma.memoriesImage.create({
              data: {
                image: url,
                memoryId: memory.id,
              },
            });
          }
        }
      }

      return NextResponse.json({ success: true, memory });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to create memory", details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const memories = await prisma.memories.findMany({
      include: {
        MemoriesImage: true,
      },
    });
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
    const {
      id,
      first_name,
      last_name,
      email,
      phone_number,
      memories,
      status,
      images,
    } = body;

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
