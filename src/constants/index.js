import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    wooden,
    jobg,
    banglar,
    threejs,
    firebase,
    bs,
    nodejss,
    netly,
    express,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Backend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Boostrap",
      icon: bs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejss,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "ExpressJs",
      icon: express,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Netlify",
      icon: netly,
    },
    
    {
      name: "Firebase",
      icon: firebase,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Academic Projects",
      company_name: "Daffodil International University",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2022 - Jun 2022",
      points: [
        "School Management System.",
        "Developed a fully functional school management website as part of the final year project.",
        "Implemented user authentication,attendance, posting status functionality,  using HTML, CSS, JavaScript, and PHP.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Coursework and Certifications",
      company_name: "Programming Hero ",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Jun 2023",
      points: [
        "Completed comprehensive Programming Hero web development course, gaining proficiency in various programming languages and frameworks.",
        "Acquired practical web development skills through immersive Programming Hero program.",
        "Developed dynamic web applications through real-world projects in PHero course.",
        "Mastered multiple programming languages and frameworks through PHero program.",
      ],
    },
    {
      title: "Personal Projects",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design.",
        "Developed and executed personal projects demonstrating a strong passion for continuous learning and self-motivated exploration.",
        
        "Applied creative problem-solving skills to conceive and independently complete personal projects, showcasing initiative and resourcefulness.",
        
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Wooden",
      description:
        "Web-based platform that allows users to search, add, and manage toys from various providers, providing a convenient and efficient solution for toy market.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: wooden,
      source_code_link: "https://github.com/riaz9191/wooden-client-side",
      live_link: "https://wooden-feb93.web.app/"
    },
    {
      name: "Banglar Chef",
      description:
        "Web application that enables users to search for bengali recipe, view recipe. People can see recipe by their favorite chef.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: banglar,
      source_code_link: "https://github.com/riaz9191/banglar_chef",
      live_link: "https://banglar-chef.web.app/"
    },
    {
      name: "Job Genie",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobg,
      source_code_link: "https://github.com/riaz9191/job_genie_",
      live_link: "https://stunning-gumption-235c3a.netlify.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };