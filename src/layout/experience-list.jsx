// import React from 'react';

// using https://daisyui.com/components/list/
const ExperienceItem = ({ company, position, image, descriptions, startDate, endDate }) => (
  <li className="list-row">
    <div>
      <img className="size-10 rounded-full" src={image} alt={`${company} logo`} />
    </div>
    <div>
      <div>{company}</div>
      <div className="text-xs uppercase font-semibold opacity-70">{position}</div>
      <div className="text-xs opacity-60 mt-1">
        {startDate} - {endDate || "Present"}
      </div>
    </div>
    <ul className="list-col-wrap text-xs">
      {descriptions.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  </li>
);

const ExperienceList = ({ title, experiences }) => {
  if (!experiences || experiences.length === 0) {
    return null;
  }

  // dynamic experience list
  return (
    <ul className="list bg-base-100 rounded-box shadow-md mx-8">
      <li className="p-4 pb-2 text-xs font-medium opacity-70 tracking-wide">
        {title}
      </li>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={experience.id || index}
          company={experience.company}
          position={experience.position}
          image={experience.image}
          descriptions={experience.descriptions}
          startDate={experience.startDate}
          endDate={experience.endDate}
        />
      ))}
    </ul>
  );
};

export default ExperienceList;