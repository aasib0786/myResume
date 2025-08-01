import { NextResponse } from "next/server";
import connectDB from "@/helper/db";
// import Contact from "@/models/contact";
import Contact from "../../../models/contact.js";


export async function POST(req) {
    try {
        // 1. Connect to MongoDB
        await connectDB();

        // 2. Parse JSON data from request
        const data = await req.json();
        const data2 = data.form;
        console.log("Received data:==>", data2);
        const { name, email, message } = data2;

        // // 3. Basic validation (optional)
        if (!name || !email || !message) {
          return NextResponse.json({ status: false, error: "All fields are required" }, { status: 400 });
        }

        // // 4. Save to MongoDB
        const savedContact = await Contact.create({ name, email, message });

        // 5. Send success response
        return NextResponse.json({ status: true, message: "Contact saved successfully", data: savedContact });
    } catch (error) {
        console.error("❌ Error saving contact:", error);
        return NextResponse.json({ status: false, error: "Internal Server Error" }, { status: 500 });
    }
}
