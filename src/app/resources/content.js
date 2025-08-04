import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dernane',
    lastName:  'Djilali',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Fullstack Developer',
    avatar:    '/images/avatar.jpeg',
    location: 'Africa/Algiers',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'French', 'Arabic']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about web development, software engineering, and share insights on the intersection of technology and creativity.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/DJDERNANE',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/djilali-dernane-8b1984218/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'derndjilali38@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Fullstack Developer</>,
    subline: <>
    Hi, I’m Djilali – a Full-Stack Developer passionate about designing and building scalable, user-friendly web applications.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Djilali is an Algeria-based full-stack developer with a passion for transforming complex problems into efficient, scalable web solutions. Her work spans web development, interactive applications, and the seamless integration of design and technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Clients & Experiences',
        experiences: [
            {
                company: 'ICOSNET',
                timeframe: '07/2024 - Present',
                role: 'Development and Application Engineer',
                achievements: [
                    <>Develop, and maintain web applications using various frameworks, ensuring optimalperformance and scalability.</>,
                    <>Troubleshooting application issues, creating technical documentation and monitoring application performance.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                  
                ]
            },
            {
                company: 'Apollo Digital Solutions',
                timeframe: '06/2024 - 07/2024',
                role: 'Fullstack developer',
                achievements: [
                    <>Design and implement web applications by building server-side logic and APIs while creating responsive front-end interfaces.</>,
                    <>Managing databases, optimizing performance, overseeing deployment, and collaborating with cross-functional teams to deliver high-quality software solutions.</>
                ],
                images: [ ]
            },
            {
                company: 'Remotly',
                timeframe: '2023 - present',
                role: 'Full stack developer freelancer',
                achievements: [
                    <>Manage all aspects of my projects, including client communication, requirement gathering, and project scoping.</>,
                    <>Design, develop, and deliver high-quality work within deadlines while maintaining a strong focus on client satisfaction.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Engineer Degree in Network and Telecommunication Systems',
                description: <>Specialized in networks, cloud computing, telecommunications, and related technologies.</>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Web Development & Technologies',
                description: <>Experienced in building scalable web applications using Next.js, React.js, Express.js, Django, and Laravel. Proficient in deployment workflows with Vercel, GitHub Actions, and Docker for CI/CD pipelines.</>,
                images: [
                    // Add relevant technology logos here if desired
                ]
            },
            {
                title: 'Networking & Cloud Computing',
                description: <>Familiar with CCNA course content, including networking fundamentals, routing, switching, and basic network security. Knowledgeable in cloud computing technologies.</>,
                images: [
                    // Add relevant logos like CCNA, VMware, or AWS
                ]
            },
            {
                title: 'System Administration',
                description: <>Skilled in managing Linux and Windows systems, including server configuration, maintenance, and troubleshooting. </>,
                images: [
                    // Add relevant logos like Linux, Windows Server, or Bash
                ]
            }
        ]
        
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}


const services = {
    label: 'Services',
    title: 'My services',
    description: `My Services`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}


export { person, social, newsletter, home, about, blog, work, services };