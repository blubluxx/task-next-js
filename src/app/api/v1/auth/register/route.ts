import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";
import { createUser } from "@/services/user";
import { JWT_SECRET } from "@/services/server";
import { User } from "@/data/interfaces";

/**
 * Handles the POST request for user registration.
 *
 * @param {Request} request - The incoming request object.
 * @returns {Promise<Response>} - The response object containing the authentication token or an error message.
 *
 * @throws {Error} - Throws an error if there is an issue with the request processing.
 **
 * If any required fields are missing, it returns a 400 status with an appropriate message.
 * If an internal server error occurs, it returns a 500 status with an error message.
 */

export async function POST(request: Request): Promise<Response> {
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
