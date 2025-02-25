"use client";
import React from 'react';
import ContactUs from "@/sections/contact-us/contact-us";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function ContactUsPage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      <ContactUs />
    </GoogleReCaptchaProvider>
  );
}