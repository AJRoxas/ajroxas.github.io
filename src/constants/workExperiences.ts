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
      'Owned the integration surface for the platform\'s A/B experimentation framework, implementing experiment resolution and injection, and authoring technical design documents, ensuring safe LLM model testing and rollout.',
      'Built automated infrastructure-as-code monitoring for the control plane using Java, AWS Lambda, CloudWatch, and CDK, proactively establishing key metrics and audit tooling to maintain system health and incident detection.',
      'Re-engineered client library to filter its in-memory cache, reducing client heap ~50% and downstream service\'s heap ~13%, while authoring an operating procedure to maintain long-term cache health.',
    ],
  },
  {
    position: '.NET Software Developer Co-op',
    company: 'FGF Brands',
    duration: 'January 2022 - December 2022',
    responsibilities: [
      'Developed, tested, and maintained .NET MVC and .NET web applications and APIs, ensuring scalability and high performance as part of enablement operations.',
      'Built and showcased front-end user interfaces and data visualizations with JavaScript, jQuery, Bootstrap, TypeScript, and D3.js to enhance user experience and support data-driven decision-making.',
      'Engineered SQL Server/Entity Framework database enhancements (tables, views, stored procedures, indexing) to optimize data management and system performance.',
    ],
  },
  {
    position: 'QA Automation Engineer Co-op',
    company: 'Sensei Labs',
    duration: 'January 2021 - September 2021',
    responsibilities: [
      'Created and expanded UI automation regression test cases for the Conductor SaaS platform using Selenium WebDriver and C#, enhancing quality automation practices and coverage.',
      'Worked with product owners, developers, and UX designers in an Agile Scrum environment, actively contributing to sprint planning, code reviews, and technical discussions to drive continuous improvement.',
      'Debugged and maintained automated test scripts to ensure reliability, integrating them into the CI/CD pipeline in Azure Pipelines for consistent deployment quality.',
    ],
  },
];
