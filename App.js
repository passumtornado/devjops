import logo from './logo.svg';
import './App.css';
import './index'

import React from "react";

const JobCard = ({ timeAgo, jobTitle, companyName, location, imgSrc }) => (
  <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
    <div className="flex grow flex-col max-md:mt-8">
      <img
        loading="lazy"
        src={imgSrc}
        className="aspect-square object-contain object-center w-[50px] overflow-hidden z-[1] max-w-full ml-8 max-md:ml-2.5"
        alt="Job Logo"
      />
      <div className="bg-white self-stretch flex w-full flex-col items-stretch pl-8 pr-16 pt-12 pb-10 rounded-md max-md:px-5">
        <div className="flex items-stretch justify-between gap-3 max-md:justify-center">
          <div className="text-slate-500 text-base leading-4">{timeAgo}</div>
          <div className="flex w-1 shrink-0 h-1 flex-col mt-2 rounded-[50%] self-start" />
          <div className="text-slate-500 text-base leading-4 whitespace-nowrap self-start">
            Full Time
          </div>
        </div>
        <div className="text-gray-900 text-xl font-bold leading-5 whitespace-nowrap mt-4">
          {jobTitle}
        </div>
        <div className="text-slate-500 text-base leading-4 whitespace-nowrap mt-4">
          {companyName}
        </div>
        <div className="text-indigo-500 text-sm font-bold leading-4 whitespace-nowrap mt-12 max-md:mt-10">
          {location}
        </div>
      </div>
    </div>
  </div>
);

const LoadMoreButton = () => (
  <div className="text-white text-center text-base font-bold leading-4 whitespace-nowrap bg-indigo-500 w-[141px] max-w-full items-center mr-28 mt-14 px-5 py-5 rounded-md self-end max-md:mr-2.5 max-md:mt-10">
    Load More
  </div>
);

const MyComponent = (props) => {
  // Define your data here or pass it as props
  
  return (
    <div className="bg-gray-100 flex flex-col">
      {/* Render job cards */}
      {/* For each job */}
      <JobCard
        timeAgo="5h ago"
        jobTitle="Senior Software Engineer"
        companyName="Scoot"
        location="United Kingdom"
        imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2288703c-c19f-42d5-819b-2dd0b1b75d31?"
      />
      {/* Repeat for other job cards */}
      {/* ... */}
      
      {/* Load more button */}
      <LoadMoreButton />
    </div>
  );
};

export default MyComponent;
