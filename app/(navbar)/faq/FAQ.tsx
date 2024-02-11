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
    question: "Accommodation",
    answer: "Yes, accommodation is available.",
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
