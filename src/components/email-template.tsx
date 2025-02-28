import * as React from "react";

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate = ({ email, message }: EmailTemplateProps) => (
  <div>
    <h1>{email}!</h1>
    <h1>{message}!</h1>
  </div>
);
