import React from "react";

const AdvisorySection = () => {
  const advisors = [
    {
      name: "Prof. Shrikanth Ambekar",
      title: "Ex-Director Placements, VTU",
      bio: "Professor Ambekar brings over 35 years of experience in academia and placement guidance, helping students achieve their career aspirations.",
      company: "VTU",
      companyLogo: "/company-logo.svg",
      experience: "35+ years of experience",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
    {
      name: "Ankur Vashishtha",
      title: "Product Leader, Author",
      subtitle: "Ex – Microsoft, Uber, Salesforce, Oracle",
      bio: "A seasoned product leader with experience at tech giants including Microsoft, Uber, Salesforce, and Oracle. Also a published author on product management.",
      company: "Microsoft",
      companyLogo: "/company-logo.svg",
      experience: "18+ years of experience",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Dr. Nikhil Gala",
      title: "Ex-Chairperson, Corporate Relations, NMIMS",
      bio: "Dr. Gala has extensive experience in building corporate relations and enhancing placement opportunities for students at premier institutions.",
      company: "NMIMS",
      companyLogo: "/company-logo.svg",
      experience: "16+ years of experience",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Sumit Shukla",
      title: "IIT – Kanpur, Python & ML Expert",
      bio: "An alumnus of IIT Kanpur specializing in Python and Machine Learning, Sumit brings technical expertise to help students master in-demand skills.",
      company: "IIT Kanpur",
      companyLogo: "/company-logo.svg",
      experience: "12+ years of experience",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
    },
  ];

  return (
    <section className="py-16 bg-[#1b1b1b]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Meet Our Mentors
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-2">
            Industry pros bringing real-world wisdom to every program.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {advisors.map((a) => (
            <div
              key={a.name}
              className="w-72 bg-[#111111] rounded-lg overflow-hidden flex flex-col shadow-lg border border-neutral-800"
            >
              <div className="h-56 bg-neutral-200 relative">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col flex-1 px-5 pt-5 pb-6">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {a.name}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{a.title}</p>
                {a.subtitle && (
                  <p className="text-[11px] text-gray-400 mt-1">{a.subtitle}</p>
                )}

                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs font-medium text-gray-200">
                    {a.company}
                  </span>
                </div>
                <p className="text-[11px] mt-4 text-indigo-400 font-medium">
                  {a.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorySection;
