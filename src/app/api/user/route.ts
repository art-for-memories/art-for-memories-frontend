import { getServerSession, Session } from "next-auth";
import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "@/config/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions) as Session & { user: { role: string } };

  if (!session || session.user.role !== "SUPERADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { email } = await req.json();

    const user = await prisma.user.update({
      where: { email },
      data: { role: "ADMIN" },
    });

    return NextResponse.json(user);
  } catch {
    return NextResponse.json(
      { error: "Failed to update user role" },
      { status: 500 }
    );
  }
}
