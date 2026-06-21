interface project {
  project: string;
  projectType: string;
  duration: string;
  description: string[];
}

export const projects: project[] = [
  {
    project: 'Personal Portfolio',
    projectType: 'Personal Project - This Website!',
    duration: 'February 2026 - Present',
    description: [
      'Designed and created a personal portfolio in the React framework to showcase qualifications and skills.',
      'Implemented and automated deployment workflows using Docker and GitHub Pages.',
    ],
  },
  {
    project: 'FitBook',
    projectType: 'University Project',
    duration: 'May 2023 - August 2023',
    description: [
      'Built a fitness social media app with workout and progress tracking using React Native for iOS and Android.',
      'Implemented a RESTful API with Node.js, Express.js, and Mongoose to connect to a MongoDB database.',
    ],
  },
];
