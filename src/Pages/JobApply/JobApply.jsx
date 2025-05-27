import React from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };

    // send application to db
    axios
      .post("http://localhost:3000/applications", application)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3 className="text-4xl text-center my-7">
        Apply for this job: <Link to={`/jobs/${jobId}`}>Details</Link>
      </h3>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset min-w-2xs max-w-xl mx-auto bg-base-200 border-base-300 rounded-box border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="linkedin"
            className="input w-full"
            placeholder="LinkedIn profile link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="github"
            className="input w-full"
            placeholder="Github Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input w-full"
            placeholder="Resume Link"
          />

          <input type="submit" className="btn btn-primary" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
