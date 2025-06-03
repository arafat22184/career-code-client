import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobLists from "./JobLists";
import useJobApi from "../../API/useJobApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const { jobsCreatedByPromise } = useJobApi();

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
