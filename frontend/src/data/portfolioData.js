/**
 * CENTRAL PORTFOLIO CONFIGURATION & DATA REPOSITORY
 * ----------------------------------------------------------------------------
 * Integrates directly with dynamic services:
 * - Resume PDF Parser: NitishResume.pdf
 * - GitHub REST API: NitishCodeMaster
 * - LeetCode Public API: Nitish_singh_2507
 * - CodeChef API: nitish_kumar
 * - LinkedIn: nitish-rathore
 * 
 * ZERO fake metrics or arbitrary percentages.
 */

export const portfolioData = {
  // 1. PERSONAL INFORMATION (From Nitish Resume & Verified Accounts)
  personal: {
    name: "Nitish Kumar",
    role: "Full Stack Developer",
    location: "Sonpur, Bihar",
    email: "nitish.rathore.in@gmail.com",
    phone: "+91 9523043234",
    availability: "Open to Full Stack Developer Roles",
    bio: "Computer Science undergraduate specializing in MERN Stack development, Java, Data Structures & Algorithms (DSA), REST APIs, and MongoDB. Experienced in building full-stack web applications featuring secure authentication, real-time functionality, and scalable architecture.",
    aboutHeading: "Engineering Scalable MERN & Java Web Solutions.",
    aboutBio: "Passionate about architecting end-to-end full-stack web platforms, writing clean and optimal Java algorithms, building secure RESTful APIs, and designing responsive, user-centered digital interfaces.",
    portraitImage: "/Profile.jpeg",
    yearsExperience: "B.Tech '26",
    stats: [
      { label: "B.Tech CSE", value: "2026" },
      { label: "Projects Built", value: "12+" },
      { label: "Certifications", value: "3" },
      { label: "Hackathon", value: "2025" }
    ]
  },

  // 2. RESUME SOURCE
  resume: {
    pdfUrl: "/NitishResume.pdf",
    downloadFilename: "Nitish_Kumar_Resume.pdf",
    lastUpdated: "2026",
    summary: "Computer Science undergraduate with expertise in MERN Stack development, Java, Data Structures & Algorithms (DSA), REST APIs, and MongoDB.",
    highlights: [
      "Artify Studio: Full-stack creative platform with JWT authentication, Razorpay payment processing, Jitsi Meet live streaming, and Socket.IO real-time chat.",
      "Weather App: Real-time weather dashboard with OpenWeatherMap API, geolocation detection, 24-hr forecast, and 4-day outlook.",
      "Meta Certified: Advanced React and Full-Stack Development from Coursera.",
      "Hackathon Finalist: Built Vistora short-form video platform during 48-hour Tech Sangram Hackathon 2025 at Haridwar University."
    ]
  },

  // 3. PROFILE IDENTIFIERS & PLATFORM HANDLES
  socials: {
    github: "https://github.com/NitishCodeMaster",
    linkedin: "https://www.linkedin.com/in/nitish-rathore/",
    leetcode: "https://leetcode.com/u/Nitish_singh_2507/",
    email: "mailto:nitish.rathore.in@gmail.com"
  },

  codingProfiles: {
    leetcode: {
      username: "Nitish_singh_2507",
      profileUrl: "https://leetcode.com/u/Nitish_singh_2507/"
    },
    codechef: {
      username: "nitish_kumar",
      profileUrl: "https://www.codechef.com/users/nitish_kumar"
    },
    github: {
      username: "NitishCodeMaster",
      profileUrl: "https://github.com/NitishCodeMaster"
    }
  },

  // 4. REAL PROJECTS (Connected to GitHub Repositories)
  projects: [
    {
      id: "artify-studio",
      title: "Artify Studio",
      category: "MERN Stack Platform",
      description: "A full-stack creative ecosystem for artists, mentors, and artisans featuring public artist profiles, portfolio publishing, marketplace listings, live mentor workshops, and real-time community engagement.",
      features: [
        "Secure JWT-based authentication and creator workflows including community posts, likes, comments, image sharing, and guided creative missions.",
        "Mentor-created free and paid workshops with Jitsi Meet live room video streaming and dynamic workshop lifecycle management.",
        "Integrated Razorpay payment gateway, wallet transactions, order history, and automated billing receipts.",
        "Real-time chat powered by Socket.IO, media storage via Cloudinary, and scalable MongoDB document architecture."
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZSUyMG1vZGVybiUyMGRhc2hib2FyZCUyMHVpfGVufDF8fHx8MTc3OTYzMTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      githubRepo: "NitishCodeMaster/Artify-Studio",
      demoUrl: "https://artify-studio-client.vercel.app/",
      manualTech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.IO", "Cloudinary", "Razorpay", "Jitsi Meet"]
    },
    {
      id: "weather-app",
      title: "Weather App & Forecast Dashboard",
      category: "React Web App",
      description: "A responsive React.js weather dashboard utilizing OpenWeatherMap API for live atmospheric data, geolocation detection, 24-hour forecast timelines, and 4-day outlooks.",
      features: [
        "Real-time weather data retrieval via OpenWeatherMap API with automatic geolocation detection.",
        "24-hour detailed forecast timeline, 4-day extended outlook, humidity, wind, and air pressure metrics.",
        "Interactive city search with search history caching, °C/°F metric toggle, and dynamic weather condition icons.",
        "Adaptive theme transitions and mobile-first responsive layout."
      ],
      image: "https://images.unsplash.com/photo-1588007374946-c79543903e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbmVvbiUyMGVjb21tZXJjZSUyMHdlYnNpdGV8ZW58MXx8fHwxNzc5NjMxODE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      githubRepo: "NitishCodeMaster/Weather-App",
      demoUrl: "https://weather-app-sigma-plum-71.vercel.app/",
      manualTech: ["React.js", "JavaScript", "CSS3", "OpenWeatherMap API", "REST APIs"]
    },
    {
      id: "vistora-video",
      title: "Vistora — Video Platform Frontend",
      category: "Hackathon Project (Tech Sangram 2025)",
      description: "Frontend architecture for a short-form video streaming platform built during the 48-hour Tech Sangram Hackathon 2025 at Haridwar University using React.js and JWT authentication.",
      features: [
        "Rapid prototyping of responsive video feed with infinite vertical scroll and media preloading.",
        "JWT-based user session handling and interaction states (likes, bookmarks, shares).",
        "Built under tight 48-hour competitive hackathon constraints at Haridwar University.",
        "Modular React component structure with optimized asset delivery."
      ],
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYWJzdHJhY3QlMjBkYXJrfGVufDF8fHx8MTc3OTYzMTgxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      githubRepo: "NitishCodeMaster/Vistora-Frontend",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7336278076160471041/",
      manualTech: ["React.js", "JavaScript", "JWT", "Tailwind CSS", "REST APIs"]
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      category: "Personal Finance Tool",
      description: "A responsive personal finance application to log, categorize, and calculate daily income and expenditures with real-time balance computation.",
      features: [
        "Dynamic transaction addition and deletion with categorized tracking (income vs. expense).",
        "DOM manipulation and event handling to compute net balances in real-time.",
        "Clean, intuitive interface with persistent transaction history.",
        "Zero external dependencies, pure lightweight performance."
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkYXJrJTIwbW9kZSUyMG1vZGVybiUyMGRhc2hib2FyZCUyMHVpfGVufDF8fHx8MTc3OTYzMTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      githubRepo: "NitishCodeMaster/Expense-Tracker",
      demoUrl: "https://github.com/NitishCodeMaster/Expense-Tracker",
      manualTech: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"]
    }
  ],

  // 5. TECHNICAL CAPABILITIES (Categorized by Domain Role, Zero Fake Percentages)
  skillsDomains: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      subtitle: "Component-driven web applications, design systems & responsive interfaces.",
      coreFocus: "React.js, Next.js, Tailwind CSS & State Management",
      skills: [
        { name: "React.js", role: "Frontend Library", highlight: true },
        { name: "JavaScript (ES6+)", role: "Core Language", highlight: true },
        { name: "Next.js", role: "React Framework", highlight: true },
        { name: "Tailwind CSS", role: "Utility Styling", highlight: false },
        { name: "Shadcn UI", role: "UI Components", highlight: false },
        { name: "Recharts", role: "Data Visualization", highlight: false }
      ]
    },
    {
      id: "backend",
      title: "Backend & APIs",
      subtitle: "RESTful API development, JWT authentication & asynchronous server logic.",
      coreFocus: "Node.js, Express.js, REST APIs & Token Security",
      skills: [
        { name: "Node.js", role: "Runtime Environment", highlight: true },
        { name: "Express.js", role: "Server Framework", highlight: true },
        { name: "REST APIs", role: "API Architecture", highlight: true },
        { name: "JWT Auth", role: "Security & Tokens", highlight: false },
        { name: "Socket.IO", role: "Real-Time WebSocket", highlight: false }
      ]
    },
    {
      id: "database",
      title: "Databases & Algorithms",
      subtitle: "Data Structures & Algorithms (DSA), relational & document databases.",
      coreFocus: "Java DSA, OOP Principles, MongoDB & MySQL",
      skills: [
        { name: "Java", role: "Core OOP / DSA", highlight: true },
        { name: "MongoDB", role: "NoSQL Document DB", highlight: true },
        { name: "MySQL", role: "Relational SQL", highlight: false },
        { name: "Redis", role: "In-Memory Cache", highlight: false },
        { name: "Data Structures & Algorithms", role: "Problem Solving", highlight: true }
      ]
    },
    {
      id: "devops",
      title: "Tools & Deployment",
      subtitle: "Version control, API testing, cloud hosting & build pipelines.",
      coreFocus: "Git / GitHub, Postman, Vercel & Render",
      skills: [
        { name: "Git / GitHub", role: "Version Control", highlight: true },
        { name: "Postman", role: "API Testing", highlight: true },
        { name: "Vercel / Render", role: "Cloud Deployment", highlight: false },
        { name: "VS Code / IntelliJ", role: "Development IDEs", highlight: false },
        { name: "Razorpay / Cloudinary", role: "Third-Party APIs", highlight: false }
      ]
    }
  ],

  // 6. REAL EDUCATION & CREDENTIALS
  experience: [
    {
      id: "01",
      type: "education",
      title: "B.Tech. in Computer Science Engineering",
      company: "Haridwar University",
      location: "Roorkee, Uttarakhand",
      date: "2022 - 2026",
      status: "Pursuing",
      description: "Specializing in Computer Science Engineering, Full Stack MERN Development, and Data Structures & Algorithms. Maintained a 6.5/10 CGPA while organizing university events and competing in hackathons.",
      tech: ["Java", "MERN Stack", "DSA", "DBMS", "Computer Networks"]
    },
    {
      id: "02",
      type: "work",
      title: "Full Stack Developer (Hackathon)",
      company: "Tech Sangram Hackathon 2025",
      location: "Haridwar University",
      date: "2025",
      status: "Competition",
      description: "Built the frontend architecture of Vistora, a short-form video streaming platform, during the intense 48-hour Tech Sangram Hackathon using React.js and JWT authentication.",
      tech: ["React.js", "JWT", "Tailwind CSS", "REST APIs"]
    },
    {
      id: "03",
      type: "education",
      title: "Class XII (Intermediate of Science)",
      company: "P.R. College, Sonpur",
      location: "Bihar (BSEB)",
      date: "2020",
      status: "Completed",
      description: "Completed higher secondary education in Science stream with 81.6% distinction.",
      tech: ["Physics", "Chemistry", "Mathematics"]
    },
    {
      id: "04",
      type: "education",
      title: "Class X (Matriculation)",
      company: "Heritage Public School",
      location: "Sonpur, Bihar (CBSE)",
      date: "2018",
      status: "Completed",
      description: "Completed secondary education under CBSE board with 68.2%.",
      tech: ["Mathematics", "Science", "Computer Science"]
    }
  ],

  certifications: [
    {
      name: "React Advanced Certification",
      issuer: "Meta (Coursera)",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/Z9F2OA9LNIUR"
    },
    {
      name: "Full-Stack Development Certification",
      issuer: "Meta (Coursera)",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/5GKPS78R4QEX"
    },
    {
      name: "MySQL Certification",
      issuer: "Coursera",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/C0UQ9IDFN8QI"
    }
  ]
};
