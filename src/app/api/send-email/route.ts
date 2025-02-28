import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: `p3ramour@gmail.com`,
      subject: "Пришла новая заявка с сайта!",
      react: EmailTemplate({ email, message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
