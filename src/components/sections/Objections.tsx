import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Objections() {
  const objections = [
    {
      question: "Is it difficult to get started with your platform?",
      answer:
        "Not at all! Our platform is designed to be intuitive and user-friendly. You can get started in minutes with our guided setup process and comprehensive documentation. Plus, our support team is always ready to help if you need assistance.",
    },
    {
      question: "What makes your solution different from others?",
      answer:
        "Unlike other platforms, we offer a complete end-to-end solution with advanced features, better performance, and superior customer support. Our platform is built with modern technologies and is constantly updated based on user feedback.",
    },
    {
      question: "Do I need technical knowledge to use the platform?",
      answer:
        "While technical knowledge can be helpful, our platform is designed to be accessible to users of all skill levels. We provide intuitive interfaces and automation tools that make complex tasks simple.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is highly trained and ready to assist you with any questions or issues you might encounter.",
    },
    {
      question: "Is my data secure with your platform?",
      answer:
        "Absolutely! Security is our top priority. We use industry-standard encryption, regular security audits, and comply with major security certifications. Your data is protected with enterprise-grade security measures.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Common questions, answered
          </h2>
          <p className="text-lg text-text-secondary">
            Get answers to the most frequently asked questions about our
            platform and services.
          </p>
        </div>

        {/* Objections Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {objections.map((objection, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background-secondary border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg hover:text-accent">
                  {objection.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary">
                  {objection.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
