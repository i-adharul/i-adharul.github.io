// Home-page content. All copy is reused from the legacy index.html / project pages;
// only typo fixes (Lavel→Level, "They wants"→"They want", "needs"→"need", E-commerceU naming).
import portrait from '../assets/images/portrait.jpg';
import thumbSegmentation from '../assets/images/thumb-segmentation.png';
import thumbDashboard from '../assets/images/thumb-dashboard.png';
import thumbEda from '../assets/images/thumb-eda.jpg';
import thumbSql from '../assets/images/thumb-sql.png';
import thumbTableau from '../assets/images/thumb-tableau.png';
import thumbSpreadsheet from '../assets/images/thumb-spreadsheet.jpg';
import thumbBbca from '../assets/images/thumb-bbca.png';

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

export interface Flagship {
  href: string; title: string; summary: string;
  finding: string; chips: string[];
  image: ImageMetadata; alt: string;
}

// Order: Segmentation, KPI Dashboard, EDA (per owner).
// TODO(owner): the "finding" lines were picked by me from each project page (verbatim numbers); confirm or replace.
export const selectedWork: Flagship[] = [
  {
    href: '/ecommerceu_segmentation.html',
    title: 'E-commerceU Marketing Strategy Based On Customer Segmentation',
    summary: 'Currently the marketing strategy used by E-commerceU Company does not target a specific market or different approaches for different market segments. Therefore, E-commerceU requires recommendation support for the development of segmented marketing strategies using Customer Segmentation Analysis.',
    finding: '75% of the products purchased by high revenue customers are electronics and hobbies categories.',
    chips: ['Python', 'RFM', 'K-means'],
    image: thumbSegmentation,
    // TODO(owner): confirm alt.
    alt: 'Stacked bar charts comparing the number of users, transactions and revenue across customer clusters, with a table of average revenue per buyer',
  },
  {
    href: '/ecommerceu_dashboard.html',
    title: 'E-commerceU KPI Dashboard for C-level, Managerial Level, and Operational Level',
    summary: 'E-commerceU companies are trying to change the way companies make decisions to be more data-driven. And one way is to develop a Business Performance Management Dashboard (KPI) for each level of management.',
    finding: 'Revenue loss of 33.5% from IDR 8.1 billion to IDR 5.4 billion.',
    chips: ['Tableau', 'KPI dashboard'],
    image: thumbDashboard,
    alt: 'C-level KPI dashboard in Tableau showing total revenue, unique transactions, unique buyers and quarterly revenue for 2020 and 2021',
  },
  {
    href: '/ecommerceu_eda.html',
    title: 'E-commerceU Exploratory Data Analysis (EDA) and Churn Analysis',
    // TODO(owner): "December 2020 - February 2021" conflicts with the project page ("throughout the year of 2021"). Kept as-is.
    summary: 'One of the E-commerceU manager knows that E-commerceU Company has experienced a significant revenue decline in December 2020 - February 2021. They want to know more about the causes and ways to anticipate and deal with similar incidents.',
    finding: 'The number of new registered users fell from 1423 users in 2020 to 107 users in 2021.',
    chips: ['EDA', 'Cohort analysis', 'Retention'],
    image: thumbEda,
    alt: 'Tables comparing total revenue and transaction counts by price group (under 500k, 500k to 1.5m, above 1.5m) for 2020 and 2021',
  },
];

export const skills = [
  { title: 'Tools', items: ['BigQuery', 'Tableau', 'Google Data Studio', 'Metabase', 'Google Sheet', 'Ms Excel', 'CleverTap'] },
  { title: 'Programming Language', items: ['SQL', 'Python'] },
  { title: 'Technical Knowledge', items: ['Exploratory data analysis (EDA)', 'Statistics', 'RFM', 'Regression and correlation', 'Clustering', 'A/B testing', 'Cohort analysis', 'Data visualization', 'Hypothesis testing'] },
  { title: 'Others', items: ['Problem solving', 'Communication', 'Critical thinking', 'Collaboration', 'Project management'] },
];

export interface CourseItem {
  href: string; title: string; summary: string;
  image?: ImageMetadata; alt?: string; typeCard?: { label: string; text: string };
}

export const courseWork: CourseItem[] = [
  {
    href: '/ecommerceu_feature_adoption.html',
    title: 'E-commerceU Feature Roll-Out Adoption Analysis',
    summary: 'The product team made an experiment to add new features. And they want to understand the impact of the experiments that have been carried out and need several recommendations that can be given for the continuation of adding these features.',
    typeCard: { label: 'E-commerceU', text: 'Feature Roll-Out Adoption' }, // typographic card until real charts exist
  },
  {
    href: '/sql_assignment.html',
    title: 'RevoU - SQL Assignment',
    summary: 'This assignment is the application of the skills learned in SQL class. We were given a data set and instructions to follow. These assignments require SQL skills ranging from basic to advanced levels such as window functions and CTE.',
    image: thumbSql,
    alt: 'Cohort retention table from the SQL assignment, showing the share of users returning in each month after their first post',
  },
  {
    href: '/tableau_assignment.html',
    title: 'RevoU - Tableau and Google Data Studio Assignment',
    summary: 'This assignment is the application of the skills that have been learned in the Data Visualization class. We were given a data set and instructions to follow. These assignments require Tableau and Google Data Studio skills from basic to advanced levels such as creating a hierarchy, calculated field, and interactive map.',
    image: thumbTableau,
    alt: 'Tableau dashboard of Singapore Airbnb listings with a treemap by region and area, bar charts by room type and price range, and a map',
  },
  {
    href: '/spreadsheet_assignment.html',
    title: 'RevoU - Spreadsheet and Statistics Assignment',
    summary: 'This assignment is the application of the skills learned in Spreadsheet and Statistics class. We were given a data set and instructions to follow.',
    image: thumbSpreadsheet,
    // TODO(owner): this is a stock A/B-test illustration, not your own work. Replace with a real screenshot?
    alt: 'Illustration of an A/B test: version A (control) next to version B (variation)',
  },
  {
    href: '/bbca.html',
    title: 'BBCA Stock Price Candle Stick',
    summary: 'This project uses data from Google Finance which is generated in Google Sheets. And this is how I make it a candle stick chart.',
    image: thumbBbca,
    alt: 'Candlestick chart of BBCA daily stock price from July 2021 to July 2022, with up days in green and down days in red',
  },
];

export const contact = {
  heading: 'Get in touch',
  text: 'If you have any question, want to ask business enquiries or want to collaborate, please do not hesitate to contact me.',
};
