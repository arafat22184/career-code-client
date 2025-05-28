import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobLists from "./JobLists";
import { jobsCreatedByPromise } from "../../API/JobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>My Posted Jobs: </h2>
      <Suspense fallback={"Loading Your Application"}>
        <JobLists
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></JobLists>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
