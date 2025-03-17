import { ConnectMongoDB } from "@/lib/mongodb";
import Auth from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { Name, Email, textarea, Phone } = await req.json();
    console.log(Name, Email, textarea, Phone);
    await ConnectMongoDB();
    await Auth.create({ Name, Email, textarea, Phone });
    return NextResponse.json(
      { message: "Data Send to database" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Not Connect to database from server" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ConnectMongoDB();
    const data = await Auth.find();
    console.log("Data on server-side", data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Not Connect to database from server" },
      { status: 500 }
    );
  }
}
