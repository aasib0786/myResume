import { NextResponse } from "next/server";

export function POST(req) {
    const data = req.body
    console.log("data:==>", data);
    return NextResponse.json({ status: true, data: data })
    // return new Response("Hello, Next.js!");
}