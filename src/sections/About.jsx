import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Building maintainable applications with clear structure, reusable components, and well-designed APIs.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Creating fast, responsive applications with a focus on performance, scalability, and reliability.",
  },
  {
    icon: Users,
    title: "User Focused",
    description:
      "Turning ideas into intuitive digital experiences that are simple, accessible, and enjoyable to use.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring new technologies and continuously improving my skills through real-world projects.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a software engineer passionate about building modern web applications
                and solving real-world problems through technology. My journey began with
                frontend development and has grown into a broader interest in full-stack
                engineering and backend systems.
              </p>

              <p>
                I work primarily with React, Next.js, TypeScript, and NestJS, building
                applications ranging from interactive web experiences to full-stack
                platforms with REST APIs, authentication, databases, and third-party
                integrations.
              </p>

              <p>
                I enjoy understanding how systems work beyond the user interface — from
                designing APIs and database architectures to deployment, monitoring, and
                improving application performance. I'm constantly learning and building
                projects that help me become a better engineer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I believe good software is more than just code — it's about solving the
                right problems, creating meaningful experiences, and building systems that
                are reliable, maintainable, and built to last."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
