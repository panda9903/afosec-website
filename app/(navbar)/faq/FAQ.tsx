"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    key: "item-1",
    question: "Accommodation",
    answer: "Yes, accommodation is available.",
  },
  {
    key: "item-2",
    question: "Do I need to pay for Accommodation",
    answer:
      "No, accommodation is free for all participants. However, you need to register for the event.",
  },
  {
    key: "item-3",
    question: "When are Technical Events?",
    answer:
      "Technical Events are scheduled on  28th Feb, 2024. The detailed schedule will be given on-spot.",
  },
  {
    key: "item-4",
    question: "When are Non-Technical Events?",
    answer:
      "Non-Technical Events are scheduled on  29th Feb, 2024. The detailed schedule will be given on-spot.",
  },
  {
    key: "item-5",
    question: "Whom should I contact for additional information or queries?",
    answer:
      "  For any further inquiries or clarifications, feel free to reach out to our organizing committee through the contact information provided on the website or via email at afosec@vrsiddhartha.ac.in .",
  },
  {
    key: "item-6",
    question:
      "  How can I stay updated on AFOSEC Fest announcements and schedule changes?",
    answer:
      "We will email you whatsapp community links few days before the fest once you register. ",
  },
  {
    key: "item-7",
    question: "    Is there an entry fee for AFOSEC Fest?",
    answer:
      "Yes,one who is intrested in participating in events has to pay a registeration fee and register for the fest. For more details do check the website. ",
  },
  {
    key: "item-8",
    question: " Is there any spot registration?",
    answer:
      "Yes, there will be a helpdesk under the flyover on 28th Feb where you can go pay and register. ",
  },
  {
    key: "item-9",
    question: "Is whatsapp the only way for updates in-campus?",
    answer:
      " N0! not at all. There will be College RJ where everything will be announced and required info will be passs including events which are currently getting started and many more. ",
  },
];

const FAQ = () => {
  return (
    <div className="flex flex-col items-center">
      <Accordion type="single" collapsible className="w-9/12">
        {faqs.map((faq) => (
          <AccordionItem key={faq.key} value={faq.key}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
