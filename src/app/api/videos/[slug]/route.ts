import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function DELETE(req: Request) {
    const { slug } = await req.json();

    try {
        await prisma.video.delete({
            where: {
                id: slug,
            },
        });

        return new Response("Video deleted successfully", { status: 200 });
    } catch (error) {
        console.error("Error deleting video:", error);
        return new Response("Failed to delete video", { status: 500 });
    }
}

export async function POST(req: Request) {
    const { slug } = await req.json();

    try {
        const video = await prisma.video.findUnique({
            where: {
                id: slug,
            },
        });

        if (!video) {
            return NextResponse.json({ error: "Video not found" }, { status: 404 });
        }

        return NextResponse.json(video);
    } catch (error) {
        console.error("Error fetching video:", error);
        return new Response("Failed to fetch video", { status: 500 });
    }
}