import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//GET ALL COMMENTS OF A POST
export const GET = async (req) => {
  const { searchparams } = new URL(req.url);
  const postSlug = searchparams.get("postSlug");
  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }, { status: 500 })
    );
  }
};
