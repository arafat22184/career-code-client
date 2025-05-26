import { useEffect, useState } from "react";
import HotJob from "../Shared/HotJob";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center">Hot Jobs of the Day</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <HotJob key={job._id} job={job}></HotJob>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
