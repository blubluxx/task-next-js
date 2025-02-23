import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";
import { createUser, User } from "@/services/user";
import { JWT_SECRET } from "@/services/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newUser: User = await createUser(body);

    const secret = JWT_SECRET as string;
    const token = signToken(
      { userId: newUser.id, email: newUser.email },
      secret
    );

    return NextResponse.json({ auth_id: token });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
