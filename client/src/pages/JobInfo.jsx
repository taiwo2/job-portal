import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import { Button } from "antd";
import moment from "moment";
import { applyJobs } from "../redux/actions/jobActions";
const JobInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobLists);
  const job = jobs.find((jb) => jb._id === id);

  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const applyNow = () => {
    dispatch(applyJobs(job));
  };

  return (
    <DefaultLayout>
      <div>
        {job && (
          <>
            <p> Title: {job.title}</p>
            <p> Company: {job.company}</p>
            <p> Small Description: {job.smallDescription}</p>
            <p> Full Description: {job.FullDescription}</p>
            <p> Title: {job.title}</p>
            <p> Skills Required: {job.skillsRequired}</p>
            <p> Minimum Qualification: {job.minimumQualification}</p>
            <hr />
            <p>
              {" "}
              Salary Range: {job.salaryFrom} - {job.salaryTo}
            </p>
            <p> Department: {job.department}</p>
            <p> Company Profile: {job.companyDescription}</p>

            <p> AplliedCandiddates: {job.appliedCandidates.length}</p>
            <hr />
            <div className="d-flex justify-content-between">
              {job.postedBy == userId ? (
                <Link to={`/editjob/${job._id}`}>
                  <Button>Edit Now</Button>
                </Link>
              ) : (
                <Button className="bt" onClick={applyNow}>Apply Now</Button>
              )}

              <p>posted on: {moment(job.createdAt).format("MMM DD yyyy")}</p>
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default JobInfo;
