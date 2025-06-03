import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import useApplicationsApi from "../../API/useApplicationsApi";

const MyApplications = () => {
  const { user } = useAuth();
  const { myApplicationsPromise } = useApplicationsApi();
  return (
    <div>
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={"Loading Your Application"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
