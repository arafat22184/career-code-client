import React from "react";
import { useLoaderData } from "react-router";

const JobsDetails = () => {
  const { title, company } = useLoaderData();
  return (
    <div>
      <h2 className="text-6xl">Job Details of: {title}</h2>
      <p>Company: {company}</p>
      <button className="btn btn-primary">Apply Now</button>
    </div>
  );
};

export default JobsDetails;
