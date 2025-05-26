import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const HotJob = ({ job }) => {
  const {
    _id,
    title,
    location,
    requirements,
    description,
    company,
    company_logo,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img src={company_logo} className="w-16" alt="Shoes" />
        </figure>
        <div>
          <h3 className="text-4xl">{company}</h3>

          <p className="flex items-center gap-2">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.min}
          {salaryRange.currency} - {salaryRange.max}
          {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, i) => (
            <div key={i} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJob;
