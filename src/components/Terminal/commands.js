export const COMMAND_NAMES = [
    "help",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
    "resume",
    "social",
    "whoami",
    "stack",
    "github",
    "linkedin",
    "clear",
    "neofetch",
    "coffee",
];

export const COMMAND_DESCRIPTIONS = {
    help: "Show available commands",
    about: "Learn more about Lemon",
    skills: "View technical skills",
    projects: "Explore featured projects",
    experience: "View work experience",
    contact: "Get contact information",
    resume: "Open resume",
    social: "View social profiles",
    whoami: "Who is Lemon Gautam?",
    stack: "Display technology stack",
    github: "Open GitHub profile",
    linkedin: "Open LinkedIn profile",
    clear: "Clear terminal",
    neofetch: "Display system information",
    coffee: "Make coffee",
};

export const executeCommand = (command) => {
    switch (command) {
        case "help":
            return {
                type: "text",
                content: `Available commands:

  about       Learn more about me
  skills      View my technical skills
  projects    Explore featured projects
  experience  View my experience
  contact     Get my contact information
  resume      Open my resume
  social      View my social profiles
  whoami      Who is Lemon Gautam?
  stack       Display my technology stack
  github      Open GitHub
  linkedin    Open LinkedIn
  neofetch    Display system information
  coffee      Make coffee
  clear       Clear the terminal`,
            };

        case "about":
            return {
                type: "text",
                content: `Lemon Gautam

Full-Stack Software Engineer focused on building
scalable web applications and reliable backend systems.

I work primarily with React, Next.js, TypeScript,
Node.js, NestJS, PostgreSQL, and modern cloud tools.

I enjoy turning ideas into reliable software.`,
            };

        case "whoami":
            return {
                type: "text",
                content: `Lemon Gautam
Full-Stack Software Engineer

Building reliable software from idea to production.`,
            };

        case "skills":
            return {
                type: "text",
                content: `Frontend
  ├── React
  ├── Next.js
  ├── TypeScript
  └── Tailwind CSS

Backend
  ├── Node.js
  ├── NestJS
  └── GraphQL

Database
  ├── PostgreSQL
  ├── MongoDB
  └── Redis

DevOps / Cloud
  ├── Docker
  ├── AWS
  ├── Vercel
  └── GitHub Actions

Testing
  ├── Jest
  └── Cypress`,
            };

        case "stack":
            return {
                type: "text",
                content: `Frontend  → React, Next.js, TypeScript
Backend   → Node.js, NestJS, GraphQL
Database  → PostgreSQL, MongoDB, Redis
DevOps    → Docker, AWS, GitHub Actions
Testing   → Jest, Cypress`,
            };

        case "projects":
            return {
                type: "navigation",
                target: "projects",
                content: `Featured Projects

  Job Portal
  Full-stack job platform built with React and NestJS.

  E-commerce Backend
  Production-oriented NestJS backend with PostgreSQL.

  GraphQL Project
  GraphQL learning project exploring queries,
  mutations, schemas, and resolvers.

Opening Projects section...`,
            };

        case "experience":
            return {
                type: "navigation",
                target: "experience",
                content: `Experience

  Full-Stack Developer
  Building modern web applications and backend systems.

  Freelance Developer & Data Analyst
  Delivering web applications and data solutions
  for businesses and startups.

Opening Experience section...`,
            };

        case "contact":
            return {
                type: "navigation",
                target: "contact",
                content: `Let's build something together.

Opening Contact section...`,
            };

        case "resume":
            return {
                type: "link",
                url: "/LemonResume.pdf",
                content: "Opening resume...",
            };

        case "github":
            return {
                type: "link",
                url: "https://github.com/azulgautam79",
                content: "Opening GitHub...",
            };

        case "linkedin":
            return {
                type: "link",
                url: "https://www.linkedin.com/in/lemon-gautam-223439203/",
                content: "Opening LinkedIn...",
            };

        case "social":
            return {
                type: "links",
                links: [
                    {
                        label: "GitHub",
                        url: "https://github.com/azulgautam79",
                    },
                    {
                        label: "LinkedIn",
                        url: "https://www.linkedin.com/in/lemon-gautam-223439203/",
                    },
                    {
                        label: "X",
                        url: "https://x.com/GautamLemo10270",
                    },
                ],
            };

        case "neofetch":
            return {
                type: "text",
                content: `
       .---.          lemon@portfolio
      /     \\         ----------------
      \\\\.@-@./         OS: Developer
      /\`\\_/\`\\         Role: Full-Stack Engineer
     //  _  \\\\        Frontend: React / Next.js
    | \\     ) |       Backend: NestJS / Node.js
   /\\_'.='_/\\\\       Database: PostgreSQL
  /  \\\\   //  \\\\      Runtime: Node.js
 |   |\\\\_//|   |     Editor: VS Code
 \\\\   \\\\_/   /      Status: Available
  '---'---'
`,
            };

        case "coffee":
            return {
                type: "text",
                content: `Brewing coffee...

      ( (
       ) )
    ........
    |      |]
    \\      /
     \`----'

Coffee ready. ☕`,
            };

        default:
            return {
                type: "error",
                content: `Command not found: ${command}

Type "help" to see available commands.`,
            };
    }
};