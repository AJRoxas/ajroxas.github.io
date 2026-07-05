interface workExperience {
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export const workExperiences: workExperience[] = [
  {
    position: 'Software Development Engineer',
    company: 'Amazon',
    duration: 'June 2025 - Present',
    responsibilities: [
      'Owned the integration surface for the platform\'s experimentation framework, implementing experiment resolution and injection, and authoring technical design documents, ensuring safe LLM model evaluation and rollout.',
      'Built automated infrastructure-as-code monitoring for the control plane using Java, AWS Lambda, CloudWatch, and CDK, proactively establishing key metrics and audit tooling to maintain system health and incident detection.',
      'Re-engineered client library to filter its in-memory cache, reducing client heap ~50% and downstream service\'s heap ~13%, while authoring an operating procedure to maintain long-term cache health.',
    ],
  },
  {
    position: '.NET Software Developer Co-op',
    company: 'FGF Brands',
    duration: 'January 2022 - December 2022',
    responsibilities: [
      'Developed, tested, and maintained .NET MVC and .NET Core web applications and REST APIs, ensuring scalability and high performance as part of enablement operations.',
      'Built front-end user interfaces and interactive data visualizations with JavaScript, TypeScript, Bootstrap, and D3.js to enhance user experience and support data-driven decision-making.',
      'Engineered SQL Server/Entity Framework database enhancements (tables, views, stored procedures, indexing), optimizing query performance and data management across internal applications.',
    ],
  },
  {
    position: 'QA Automation Engineer Co-op',
    company: 'Sensei Labs',
    duration: 'January 2021 - September 2021',
    responsibilities: [
      'Created and expanded 100+ UI automation regression test cases for the Conductor SaaS platform using Selenium WebDriver and C#, including solo ownership of Looker (BI) integration test coverage.',
      'Worked with product owners, developers, and UX designers in an Agile Scrum environment, actively contributing to sprint planning, code reviews, and technical discussions to drive continuous improvement.',
      'Debugged and maintained automated test scripts to ensure reliability, integrating them into the CI/CD pipeline in Azure Pipelines for consistent deployment quality.',
    ],
  },
];
