interface skillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: skillGroup[] = [
  {
    title: 'Languages',
    skills: [
      'Python',
      'Java',
      'C#',
      'TypeScript',
      'JavaScript',
      'SQL',
      'R',
      'C',
      'Bash',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      'React',
      'React Native',
      '.NET',
      'Express.js',
      'Tailwind CSS',
      'Bootstrap',
      'Selenium',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'AWS',
      'Azure',
      'Docker',
      'Git',
      'Jira',
      'Figma',
      'Jupyter',
      'NumPy',
      'pandas',
      'scikit-learn',
      'Node.js',
      'Mongoose',
    ],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'DynamoDB'],
  },
];
