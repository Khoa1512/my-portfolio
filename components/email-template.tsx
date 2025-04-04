// components/email_template.tsx
import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  subject,
  message,
}) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <Container>
        <Heading style={{ color: "#333" }}>New Contact From Portfolio</Heading>
        <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
          You have received a new message from your portfolio website contact form:
        </Text>
        <Text style={{ fontSize: "16px", marginBottom: "5px" }}>
          <strong>Name:</strong> {name}
        </Text>
        <Text style={{ fontSize: "16px", marginBottom: "5px" }}>
          <strong>Email:</strong> {email}
        </Text>
        <Text style={{ fontSize: "16px", marginBottom: "5px" }}>
          <strong>Subject:</strong> {subject}
        </Text>
        <Text style={{ fontSize: "16px", marginBottom: "5px" }}>
          <strong>Message:</strong> {message}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
