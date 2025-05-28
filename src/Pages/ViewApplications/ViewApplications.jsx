import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { id } = useParams();
  const applications = useLoaderData();
  const handleStatusChange = (e, id) => {
    axios
      .patch(`http://localhost:3000/applications/${id}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application Status Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>applications for: {id}</h2>
      <h3>{applications.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            {applications &&
              applications.map((application, i) => (
                <tr key={application._id}>
                  <th>{i + 1}</th>
                  <td>{application.applicant}</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    <select
                      onChange={(e) => handleStatusChange(e, application._id)}
                      defaultValue={application.status}
                      className="select"
                    >
                      <option disabled={true}>Update Status</option>
                      <option>Pending</option>
                      <option>Call For Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
