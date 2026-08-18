import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Job Seeker",
    description:
      "A Job Finder Web Application connects job seekers with employers, offering job search, application management, and job alerts.",
    image: "/projects/JobPortal_Image.webp",
    tags: ["React.js", "Express.js", "MongoDB", "Nest.js", "Observability", "Redis", "AWS", "Terraform", "Ansible"],
    link: "https://job-portal-frontend-gamma-mauve.vercel.app/",
    github: "https://github.com/azulgautam79/jobseeker-backend-nestjs",
  },
  {
    title: "Liberty Language & Paralegal Services",
    description:
      "Professional Multilingual Interpreting, Translation, Paralegal Services Globally",
    image: "/projects/LibertyLanguage.png",
    tags: ["Next.js", "TailwindCSS"],
    link: "https://www.thelibertylanguage.com/",
    github: "#",
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "An interactive sales analytics dashboard designed to visualize key business metrics, track sales performance, analyze trends, and provide clear insights for data-driven decision-making.",
    image: "/projects/SalesDashboard.png",
    tags: ["Excel", "Google Data Studio"],
    link: "https://datastudio.google.com/reporting/c47aadae-9a98-43d4-88ab-5bde7eee7aa3",
    github: "#",
  },
  {
    title: "Ecommerce Analytics Dashboard",
    description:
      "An interactive e-commerce analytics dashboard built with Power BI, SQL, and Excel to track sales, revenue, profit, customer behavior, product performance, and key business trends.",
    image: "/projects/Ecommerce_Analytics.png",
    tags: ["Excel", "SQL", "Power Query", "DAX", "PowerBI"],
    link: "#",
    github: "https://github.com/azulgautam79/Ecommerce-Analytics-PowerBI",
  },
  {
    title: "Ebook Creator",
    description:
      "Your AI-powered eBook creator — write smarter, design faster, and publish with ease.",
    image: "/projects/ebook_creator.webp",
    tags: ["React.js", "Express.js", "MongoDB", "Node.js", "Gemini"],
    link: "https://e-book-creator-frontend.vercel.app/",
    github: "https://github.com/lemongautam79/EBook_Creator_Frontend",
  },
  {
    title: "GraphQL Playground",
    description:
      "A learning-focused GraphQL API built with NestJS, Prisma, and PostgreSQL.",
    image: "/projects/GraphQLWala.png",
    tags: ["Nest.js", "GraphQL", "PostgreSQL", "Vercel"],
    link: "https://graph-ql-sepia-two.vercel.app/graphql",
    github: "https://github.com/azulgautam79/GraphQL",
  },
  {
    title: "Resume Builder",
    description:
      "Create a professional resume in minutes with our easy-to-use online builder.",
    image: "/projects/resume_builder.webp",
    tags: ["React.js", "Express.js", "MongoDB", "Node.js"],
    link: "https://blog-ai-frontend-theta.vercel.app/",
    github: "https://github.com/lemongautam79/Resume_Builder_Frontend",
  },
  {
    title: "Expense Tracker",
    description:
      "Smart expense tracking made simple — know where your money goes.",
    image: "/projects/expense_tracker.webp",
    tags: ["React.js", "Express.js", "MongoDB", "Node.js"],
    link: "https://expense-tracker-frontend-gray-nine.vercel.app/login",
    github: "https://github.com/lemongautam79/Expense_Tracker_Frontend",
  },
  {
    title: "AI Interview Prep",
    description:
      "Ace your next interview with AI-powered practice and feedback.",
    image: "/projects/ai_interview.webp",
    tags: ["React.js", "Express.js", "MongoDB", "Node.js", "Gemini"],
    link: "https://ai-interview-prep-frontend-phi.vercel.app/",
    github: "https://github.com/lemongautam79/AI_InterviewPrep_Frontend",
  },
  {
    title: "AI Blogger",
    description:
      "Your AI assistant for generating engaging, high-quality blog content in minutes.",
    image: "/projects/ai_blogger.webp",
    tags: ["React.js", "Express.js", "MongoDB", "Node.js", "Gemini"],
    link: "https://blog-ai-frontend-theta.vercel.app/",
    github: "https://github.com/lemongautam79/Blog_AI_Frontend",
  },
  {
    title: "Movie Recommendation System",
    description:
      "A machine learning project that recommends movies to users based on their preferences and viewing history.",
    image: "/projects/movie_recommendation.webp",
    tags: ["Python", "Machine Learning"],
    link: "https://lemongautam79-movie-recommendation-system-app-agayjy.streamlit.app/",
    github: "https://github.com/lemongautam79/Movie-Recommendation-System",
  },
  {
    title: "Heart Disease Prediction System",
    description:
      "A machine learning app that predicts the risk of heart disease based on health data.",
    image: "/projects/Heart_Disease_Prediction.webp",
    tags: ["Python", "Machine Learning"],
    link: "https://lemongautam79-heart-disease-prediction-app-okbavo.streamlit.app/",
    github: "https://github.com/lemongautam79/Heart_Disease_Prediction",
  },
  {
    title: "Chrome Dinosaur",
    description:
      "A fun offline 2D endless runner game inspired by the classic Chrome Dinosaur game, featuring simple controls, obstacle-dodging gameplay, and an endless challenge to achieve the highest score.",
    image: "/projects/Chrome_dino.png",
    tags: ["Unity", "Adobe Illustrator"],
    link: "https://www.mediafire.com/file/zzducowwdrh1anf/CHROMEDINOSAURWALA.exe/file",
    github: "#",
  },
  {
    title: "FPS Shooter",
    description:
      "An offline 3D first-person shooter game built with Unity, featuring immersive environments, fast-paced combat, enemy encounters, and engaging shooting mechanics.",
    image: "/projects/FPSShooter.webp",
    tags: ["Unity", "Blender"],
    link: "https://www.mediafire.com/file/qqb8p9zfeipi14f/mysetup.exe/file",
    github: "#",
  },

];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
