// Home-page content (hero, skills, contact). Project cards come from the content collection.
import portrait from '../assets/images/portrait.jpg';

export const hero = {
  tagline: 'In God we trust. All others must bring data.',
  title: "Hi, I'm Imron",
  subtitle: 'A Data Analyst with experience in Growth and Product Marketing',
  paragraphs: [
    'Released 20+ product campaigns and analyzed user fraud in a promotional program to successfully secure tens of millions of rupiah marketing budget. I also have experience in data visualization and visualizing multiple presentation decks and project reports.',
    'Right now, I want to explore new possibilities in Data Analytics and/or Business Intelligence. Data Analytics successfully combines aspects of work that I love such as engineering, working with numbers, visualization, and communication. I really want to contribute to the progress of a business by using data.',
    // TODO(owner): outdated line, kept verbatim from the old site. Update or remove.
    'Recently finished my Full Stack Data Analysis Program at RevoU. Currently participating in the special program Virtual Labs RevoU x Tokopedia.',
  ],
  portrait,
  // TODO(owner): confirm this alt text (drafted from the photo itself).
  portraitAlt: 'Portrait of Adharul Imron smiling, wearing a tan sweatshirt over a white collared shirt',
};

export const skills = [
  { title: 'Tools', items: ['BigQuery', 'Tableau', 'Google Data Studio', 'Metabase', 'Google Sheet', 'Ms Excel', 'CleverTap'] },
  { title: 'Programming Language', items: ['SQL', 'Python'] },
  { title: 'Technical Knowledge', items: ['Exploratory data analysis (EDA)', 'Statistics', 'RFM', 'Regression and correlation', 'Clustering', 'A/B testing', 'Cohort analysis', 'Data visualization', 'Hypothesis testing'] },
  { title: 'Others', items: ['Problem solving', 'Communication', 'Critical thinking', 'Collaboration', 'Project management'] },
];

export const contact = {
  heading: 'Get in touch',
  text: 'If you have any question, want to ask business enquiries or want to collaborate, please do not hesitate to contact me.',
};
