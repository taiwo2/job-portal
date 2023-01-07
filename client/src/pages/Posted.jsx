import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {EditOutlined }from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const Posted = () => {
  const { jobs } = useSelector((state) => state.jobLists);

  const userId = JSON.parse(localStorage.getItem("user"))._id;
  // console.log(userId);
  const filterjob = jobs.filter((job) => job.postedBy == userId);
  console.log(filterjob)
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
      title: "Posted on",
      dataIndex: "postedOn",
    },
    {
      title: "Applied Candidates",
      dataIndex: "appliedCandidates",
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

  const dataSource = [];

  for (let job in filterjob) {
    // const Obj = {
    //   title: job.title,
    //   company: job.company,
    //   postedOn: moment(job.createdAt).format("MMM DD YYYY"),
    //   appliedCandidates: job.appliedCandidates.length
    // }
    const Obj = {
      title: filterjob[job].title,
      appliedCandidates: filterjob[job].appliedCandidates.length,
      company: filterjob[job].company,
      postedOn: moment(filterjob[job].createdAt).format("MMM DD YYYY"),
      completeData: filterjob[job]
    };

    dataSource.push(Obj);
  }
  return (
    <DefaultLayout>
      <Table columns={columns} dataSource={dataSource} />
    </DefaultLayout>
  );
};

export default Posted;
