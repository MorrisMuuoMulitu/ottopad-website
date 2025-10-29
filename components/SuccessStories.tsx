import React from 'react';
import Link from 'next/link';

export default function SuccessStories() {
  const stories = [
    {
      title: "E-commerce Platform Redesign",
      description: "Transformed a legacy e-commerce platform into a modern, high-performance solution that increased conversions by 45%.",
      metrics: [
        { value: "+45%", label: "Conversion Rate" },
        { value: "2.1s → 0.8s", label: "Load Time" },
        { value: "+32%", label: "Revenue" }
      ],
      link: "#"
    },
    {
      title: "Non-Profit Digital Transformation",
      description: "Created a comprehensive digital platform for a non-profit organization that streamlined operations and increased donations by 60%.",
      metrics: [
        { value: "+60%", label: "Donations" },
        { value: "+75%", label: "User Engagement" },
        { value: "+40%", label: "Volunteers" }
      ],
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Success Stories</h2>
          <p className="text-zinc-500 text-lg">
            Real results from real projects. See how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="bg-white border border-zinc-100 rounded-[2rem] p-8 hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 overflow-hidden group"
            >
              <div className="mb-6 pb-6 border-b border-zinc-100">
                <h3 className="text-2xl font-bold text-zinc-900 mb-3">{story.title}</h3>
                <p className="text-zinc-600">{story.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {story.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center p-4 rounded-2xl bg-zinc-50">
                    <div className="text-xl md:text-2xl font-bold text-emerald-600 mb-1">{metric.value}</div>
                    <div className="text-xs md:text-sm text-zinc-500">{metric.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href={story.link}
                className="inline-block w-full bg-emerald-600 text-white text-center py-3 px-6 rounded-full font-medium hover:bg-emerald-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                View Case Study
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}