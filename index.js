import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const jobListings = [
  { 
    icon: 'scoot.svg',
    title: 'Senior Software Engineer',
    datePosted: '5h ago',
    category: 'Full-time',
    company: 'Scoot',
    location: 'United Kingdom'
  },
  {
    icon: 'blogr.svg',
    title: 'Haskel and Purescript Dev',
    datePosted: '20h ago',
    category: 'Part Time',
    company: 'Blogr',
    location: 'United States'
  },
  {
    icon: 'vector.svg',
    title: 'Midlevel Back End Engineer',
    datePosted: '1d ago',
    category: 'Part Time',
    company: 'Vector',
    location: 'Russia'
  },
  {
    icon: 'officelite.svg',
    title: 'Senior Application Engineer',
    datePosted: '2d ago',
    category: 'Full Time',
    company: 'Office Lite',
    location: 'Japan'
  },
  {
    icon: 'pod.svg',
    title: 'Remote DevOps Engineer',
    datePosted: '2d ago',
    category: 'Part Time',
    company: 'Pod',
    location: 'Thailand'
  },
  {
    icon: 'creative.svg',
    title: 'Desktop Support Manager',
    datePosted: '4d ago',
    category: 'Part Time',
    company: 'Creative',
    location: 'Germany'
  },
  {
    icon: 'pomodoro.svg',
    title: 'iOS Engineer',
    datePosted: '1w ago',
    category: 'Full Time',
    company: 'Pomodoro',
    location: 'United States'
  },
  {
    icon: 'maker.svg',
    title: 'Senior EJB Developer',
    datePosted: '1w ago',
    category: 'Full Time',
    company: 'Maker',
    location: 'United Kingdom'
  },
  {
    icon: 'coffeeroasters.svg',
    title: 'Senior Frontend Developer',
    datePosted: '1w ago',
    category: 'Part Time',
    company: 'Coffeeroasters',
    location: 'Singapore'
  },
  {
    icon: 'mastercraft.svg',
    title: 'App $ Website Design',
    datePosted: '2w ago',
    category: 'Freelance',
    company: 'Mastercraft',
    location: 'United States'
  },
  {
    icon: 'crowdfund.svg',
    title: 'Fullstack Developer',
    datePosted: '1mo ago',
    category: 'Part Time',
    company: 'Crowdfund',
    location: 'New Zealand'
  },
  {
    icon: 'typemaster.svg',
    title: 'Technical Lead Engineer',
    datePosted: '4d ago',
    category: 'Part Time',
    company: 'Typemaster',
    location: 'United Kingdom'
  }
];

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <img src={job.icon} alt="Job Icon" />
      <p>{job.title}</p>
      <p>Date Posted: {job.datePosted}</p>
      <p>Category: {job.category}</p>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="jobs-container">
      {jobListings.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
