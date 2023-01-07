import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { getallJobs } from "../redux/actions/jobActions";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

const mapState = ({ jobLists }) => ({
  jobs: jobLists.jobs,
});

const Home = () => {
  const { jobs } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getallJobs());
  }, []);
  return (
    <DefaultLayout>
      <Row gutter={16}>
        {jobs.map((job, i) => (
          <Col lg={12} sm={24}>
            <div className="job-div bs m-2 p-3">
              <h1>{job.title}</h1>
              <p>{job.company}</p>
              <hr />
              <p>{job.smallDescription}</p>
              <div className="d-flex">
                <p>
                  salary: {job.salaryFrom} - {job.salaryTo}
                </p>
                <p style={{ marginLeft: "20px" }}>
                  Experience: {job.experience} years
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <Link to={`/job/${job._id}`} >
                  <Button>View</Button>
                </Link>
                <p>posted on: {moment(job.createdAt).format("MMM DD yyyy")}</p>
              </div>
            </div>
            
          </Col>
        ))}
      </Row>
    </DefaultLayout>
  );
};

export default Home;
