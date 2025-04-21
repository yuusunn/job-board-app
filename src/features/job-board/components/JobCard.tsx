import React from 'react';

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    description: string;
    onApply: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location, description, onApply }) => {
    return (
        <div className="job-card">
            <h2>{title}</h2>
            <h3>{company}</h3>
            <p>{location}</p>
            <p>{description}</p>
            <button onClick={onApply}>Apply</button>
        </div>
    );
};

export default JobCard;