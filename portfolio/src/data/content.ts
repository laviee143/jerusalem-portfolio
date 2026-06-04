export const site = {
  name: 'Jerusalem Girma',
  headline: 'Software Engineering Student building thoughtful web experiences',
  tagline:
    'Jerusalem Girma. Building scalable web applications and decentralized solutions. Based in Addis Ababa.',
  email: 'laviee1434@gmail.com',
  github: 'https://github.com/laviee143',
  linkedin: 'https://www.linkedin.com/in/jerusalem-girma-a3771b375/',
  phone: '+251 978 64 2454',
  location: 'Addis Ababa, Ethiopia',
  cta: 'See my work',
} as const;

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

export const about = {
  avatarAlt:
    'Professional portrait of Jerusalem Girma — hijabi woman, warm smile, soft studio lighting',
  paragraphs: [
    'Currently pursuing a BSc in Software Engineering at Adama Science and Technology University (ASTU), I am passionate about developing efficient and user-focused software solutions. My experience includes web application development, backend systems, and modern software engineering practices. I am also interested in emerging technologies, including blockchain and decentralized applications, and enjoy applying innovative ideas to real-world challenges.',
    'What keeps me going is the mix of logic and creativity in this field. I enjoy breaking down a problem, sketching a simple plan, and shipping something that works—even if the first version is rough. Whether it is a campus tool, a pharmacy platform, or a job board, I care about writing code that teammates can read and users can trust.',
    'Outside of class, I contribute to student developer communities, pair with friends on features, and document what I learn so I do not repeat the same mistakes twice. I am especially drawn to full-stack web development and products that make everyday tasks easier for students and small teams.',
  ],
} as const;

export const skills = [
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Java', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'PHP', category: 'backend' },
] as const;

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  accent: string;
  thumbnailLabel: string;
};

export const projects: Project[] = [
  {
    id: 'supermarket',
    title: 'Supermarket Management System',
    slug: 'supermarket-management-system',
    description:
      'A production-ready POS and inventory management solution. It streamlines sales, stock tracking, and customer loyalty programs for multi-branch supermarket operations.',
    highlights: [
      'Inventory tracking with automated low-stock alerts',
      'Integrated Point of Sale (POS) with barcode support',
      'Role-based access control for Admin, Manager, and Cashier',
      'In-depth analytics dashboard for sales and expense tracking',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Sequelize', 'Tailwind CSS'],
    github: 'https://github.com/laviee143/Super-market-system',
    live: 'https://supermarket-management-sys.vercel.app/',
    accent: '#4f46e5',
    thumbnailLabel: 'POS & Inventory Dashboard',
  },
  {
    id: 'bootcamp',
    title: 'CSEC ASTU Bootcamp Management',
    slug: 'csec-astu-bootcamp-management-system',
    description:
      'An internal management system for the CSEC ASTU developer club to organize bootcamps—track cohorts, sessions, mentors, and participant progress in one place instead of scattered spreadsheets.',
    highlights: [
      'Role-based views for organizers and participants',
      'Session scheduling and attendance tracking',
      'Dashboard for bootcamp status at a glance',
    ],
    tech: ['React', 'Node.js', 'Express', 'JavaScript', 'CSS'],
    github:
      'https://github.com/laviee143/csec-astu-bootcamp-management-system',
    accent: '#2d6a5f',
    thumbnailLabel: 'Bootcamp dashboard — cohorts & sessions',
  },
  {
    id: 'pharmalink',
    title: 'Pharmalink',
    slug: 'Pharmalink',
    description:
      'A pharmacy linking platform that helps connect inventory, requests, and communication between pharmacies—built to explore real-world healthcare logistics with a clean, task-focused interface.',
    highlights: [
      'Medicine listing and search flows',
      'Request and transfer workflow between parties',
      'Structured data models for inventory items',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'PHP', 'Node.js'],
    github: 'https://github.com/laviee143/Pharmalink',
    accent: '#7c4a6a',
    thumbnailLabel: 'Pharmacy inventory & linking UI',
  },
  {
    id: 'library',
    title: 'Library Management System',
    slug: 'library-management-system',
    description:
      'A full-stack library management system with dual-portal access for members and admins. Features automated email notifications, secure payment verification, and book borrowing engines.',
    highlights: [
      'Dual-Portal system for users and administrators',
      'Automated email alerts via Nodemailer and Node-cron',
      'Secure JWT authentication and salted bcrypt hashing',
      'Membership approval workflow with digital payment verification',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/laviee143/library-management-system',
    accent: '#34d399',
    thumbnailLabel: 'Library catalog & admin dashboard',
  },
  {
    id: 'uniconnect',
    title: 'UniConnect',
    slug: 'uniconnect-communication-app',
    description:
      'A cross-platform communication and resource-sharing application designed for students and teachers to bridge the academic gap.',
    highlights: [
      'Efficient resource sharing and assignment updates',
      'Secure messaging and notification system',
      'Mobile-first design for seamless accessibility',
    ],
    tech: ['Flutter', 'Firebase', 'Mobile App Development'],
    github: 'https://github.com/laviee143/Student_Teacher_Communication_App',
    live: 'https://student-teacher-communication-app.vercel.app/',
    accent: '#ef4444',
    thumbnailLabel: 'Student-Teacher Portal',
  },
];
