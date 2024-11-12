const projects = [
    {
      name: "Human Gender and Age Detection",
      description: "I am working on a project focused on Human Gender and Age Detection, as well as Object Recognition, using OpenCV and pre-trained models. This project enhances my skills in image processing and machine learning.",
      duration: "01/09/2024 – Current",
      category: "Computer Vision"
    },
    {
      name: "Collaborative Document Editing System",
      description: "This project is a scalable, microservices-based platform that enables real-time collaborative document editing. Designed with flexibility, fault tolerance, and seamless user experience in mind, the system allows multiple users to concurrently edit, version, and manage documents securely.",
      duration: "Current",
      category: "Software Development"
    },
    {
      name: "Multitask Mobile Application",
      description: "I led a team to develop a Multitask Mobile Application using Java and Android SDK for a Mobile Programming course. The app, featuring calculations, a compass, a calendar, weather updates, and an alarm, was successfully published on the Google Play Store.",
      duration: "01/09/2023 – 12/12/2023",
      category: "Mobile Development"
    },
    {
      name: "Library Seat Booking System",
      description: "I led a team to develop a Library Seat Booking System using JavaScript, HTML, and CSS for the Software Requirement Engineering course, producing a complete system and an SRE paper.",
      duration: "01/09/2023 – 12/12/2023",
      category: "Web Development"
    },
    {
      name: "Enhancing Alumni Engagement and Connectivity",
      description: "I participated in a project to Enhance Alumni Engagement using Object-Oriented techniques in JavaScript, resulting in a comprehensive scientific report. This experience improved my skills in Object-Oriented programming, collaboration, and scientific reporting.",
      duration: "26/03/2024 – 25/04/2024",
      category: "Software Engineering"
    },
    {
      name: "Research on Scrum (Agile Methodology)",
      description: "In a group project, we studied Scrum and produced a report with recommendations for its effective use in software development.",
      duration: "25/02/2024 – 25/03/2024",
      category: "Agile Methodology"
    },
    {
      name: "Research on Version Control Systems (DevOps Practices)",
      description: "In New Technology and Software Development course, we researched the impact of Version Control Systems on DevOps, focusing on tools and best practices for enhancing deployment and continuous integration.",
      duration: "26/04/2024 – 25/05/2024",
      category: "DevOps"
    },
    {
      name: "Research on Cloud Computing under Parallel Computing",
      description: "In the New Technology and Software Development course, we examined cloud computing in parallel systems, focusing on resource management and performance.",
      duration: "26/05/2024 – 25/06/2024",
      category: "Cloud Computing"
    }
  ];
  
  const workExperience = [
    {
        role: "Personal IT Assistant (Online)",
        company: "Chany Zagury",
        duration: "01/08/2023 – Current",
        city: "Montreal",
        country: "Canada",
        description: "Two years of freelance experience providing personal IT support, including troubleshooting, software updates, system configurations, and data backups. Focused on maintaining smooth and secure operations to enhance productivity and efficiency for a Canadian client."
    },
    {
        role: "Graphic Designer (Upwork)",
        company: "Chany Zagury",
        duration: "28/03/2024 – Current",
        city: "Montreal",
        country: "Canada",
        description: "Book design for kids in Hebrew language, logo design for the book, and the cover page design, making it child-friendly."
    },
    {
        role: "Email Template Designer (Upwork)",
        company: "Chany Zagury",
        duration: "01/09/2024 – Current",
        city: "Montreal",
        country: "Canada",
        description: "Specializes in email design for advertising, including templates and signatures, focusing on effective email marketing to enhance engagement."
    },
    {
        role: "Web Specialist (Upwork)",
        company: "Chany Zagury",
        duration: "01/08/2023 – 06/08/2023",
        city: "Montreal",
        country: "Canada",
        description: "Logo adjustment for the whole website, redesigning contact page, redesigning subscribe page, and font adjustment as per the client's needs."
    },
    {
        role: "Graphics Designer",
        company: "Zhengzhou University (SIE)",
        duration: "10/04/2024 – 02/06/2024",
        city: "Zhengzhou",
        country: "China",
        description: "Handled the entire tournament design, including poster, player profile, banner, team logo, team jersey, trophy, and medal designs."
    }
];

  
const digitalSkills = {
    programmingLanguages: ["Python", "Java", "C/C++", "JavaScript", "CSS", "XML", "JSON", "Web Services", "Microservices"],
    frameworks: ["OpenCV", "Sci-kit Learn", "NumPy", "Pandas", "SciPy", "Matplotlib", "Node.js", "Express.js", "HTML", "CSS", "Bootstrap"],
    databases: ["NoSQL (Firebase Realtime Database, MongoDB)", "Mongoose"],
    technologies: ["Object-Oriented Programming", "GitHub", "Web Development"],
    ides: ["VS Code", "Android Studio", "Anaconda"],
    others: ["Adobe (Photoshop, Illustrator, Premiere Pro, Lightroom, Acrobat Pro)", "Microsoft (Microsoft 365, Word, Excel, PowerPoint, OneNote)"]
};
  
  const references = [
    {
      name: "Li Yafei",
      position: "Professor, School of Computer Science and AI",
      institution: "Zhengzhou University"
    },
    {
      name: "Xiaofei Nan",
      position: "Associate Professor, School of Computer Science and AI",
      institution: "Zhengzhou University"
    }
  ];
  
  // Display Projects
  const displayProjects = () => {
    const listElement = document.getElementById('projects-list');
    projects.forEach(project => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${project.name}</strong> (${project.duration}): ${project.description} <br>
        <em>Category: ${project.category}</em>
      `;
      listElement.appendChild(li);
    });
  };
  
  // Display Work Experience
  const displayWorkExperience = () => {
    const listElement = document.getElementById('work-experience-list');
    workExperience.forEach(experience => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${experience.role}</strong> at ${experience.company} (${experience.duration}) <br>
            <em>Location: ${experience.city}, ${experience.country}</em> <br>
            ${experience.description}
        `;
        listElement.appendChild(li);
    });
};
  
  // Display Skills
  const displaySkills = () => {
    const listElement = document.getElementById('skills-list');
    digitalSkills.programmingLanguages.concat(
      digitalSkills.frameworks, 
      digitalSkills.databases, 
      digitalSkills.technologies, 
      digitalSkills.ides, 
      digitalSkills.others
    ).forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      listElement.appendChild(li);
    });
  };
  
  // Display References
  const displayReferences = () => {
    const listElement = document.getElementById('references-list');
    references.forEach(reference => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${reference.name}</strong>, ${reference.position} at ${reference.institution}`;
      listElement.appendChild(li);
    });
  };
  
// On Page Load
window.onload = () => {
    // Display content
    displayProjects();
    displayWorkExperience();
    displaySkills();
    displayReferences();
};
