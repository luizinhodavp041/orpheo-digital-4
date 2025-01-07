import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      content:
        "This platform has completely transformed how we handle our deployment pipeline. The efficiency gains are remarkable.",
      author: "Sarah Johnson",
      rating: 5,
    },
    {
      content:
        "The level of customer support is outstanding. Every interaction has been professional and extremely helpful.",
      author: "Michael Chen",
      rating: 5,
    },
    {
      content:
        "We've seen a 40% increase in deployment speed since switching to this platform. It's been a game-changer for our team.",
      author: "Emily Rodriguez",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by thousands of developers worldwide
          </h2>
          <p className="text-lg text-text-secondary">
            Join the community of successful teams who have transformed their
            development workflow with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background-secondary rounded-lg border border-border hover:border-accent transition-colors duration-300 flex flex-col h-full"
            >
              <div className="p-8 flex-1 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg flex-1">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="font-medium text-text-secondary mt-4">
                  {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
