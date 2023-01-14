import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {EditOutlined }from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const AppliedJobs = () => {
  const { jobs } = useSelector((state) => state.jobLists);

  const userId = JSON.parse(localStorage.getItem("user"))._id;

  const navigate = useNavigate()
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Applied Date",
      dataIndex: "appliedDate",
    },
    {
      title: "Actions",
      render: (text,data) => {
        return (
        <div className="d-flex">
          <EditOutlined onClick={() => navigate(`/editjob/${data.completeData._id}`)}/>
        </div>)
      }
    },
  ];

  const userAppliedJobs = [];

  for (let job of jobs) {

    const appliedCandidate = job.appliedCandidates;
    const temp = appliedCandidate.find(candidate => candidate.userId === userId);
    if (temp) {
      const Obj = {
        title: job.title,
        company: job.company,
        appliedDate: temp.appliedDate
      }
      userAppliedJobs.push(Obj);
    }
  }
  return (
    <DefaultLayout>
      <Table columns={columns} dataSource={userAppliedJobs} />
    </DefaultLayout>
  );
};

export default AppliedJobs;
