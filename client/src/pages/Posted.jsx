import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Table, Modal } from "antd";
import { useSelector } from "react-redux";
import { EditOutlined, OrderedListOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Posted = () => {
  const { jobs } = useSelector((state) => state.jobLists);
  const { users } = useSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState();
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  // console.log(userId);
  const filterjob = jobs.filter((job) => job.postedBy == userId);
  const navigate = useNavigate();
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
      render: (text, data) => {
        return (
          <div className="d-flex">
            <EditOutlined
            className="mr-2"
              style={{ fontSize: "20px" }}
              onClick={() => navigate(`/editjob/${data.completeData._id}`)}
            />
            <OrderedListOutlined
              style={{ fontSize: "20px" }}
              onClick={() => showModal(data.completeData)}
            />
          </div>
        );
      },
    },
  ];

  const dataSource = [];

  for (let job of filterjob) {
    const Obj = {
      title: job.title,
      appliedCandidates: job.appliedCandidates.length,
      company: job.company,
      postedOn: moment(job.createdAt).format("MM DD YYYY"),
      completeData: job,
    };
    dataSource.push(Obj);
  }
  // for (let job in filterjob) {

  //   const Obj = {
  //     title: filterjob[job].title,
  //     appliedCandidates: filterjob[job].appliedCandidates.length,
  //     company: filterjob[job].company,
  //     postedOn: moment(filterjob[job].createdAt).format("MMM DD YYYY"),
  //     completeData: filterjob[job]
  //   };

  //   dataSource.push(Obj);
  // }

  const CandidateTable = () => {
    const candidatesColumns = [
      {
        title: "candidate ID",
        // dataIndex: "candidateId",
        render: (data) => {
          return (
            <div>
              <Link to={`/users/${data.candidateId}`}>{data.candidateId}</Link>
            </div>
          );
        },
      },
      {
        title: "Full Name",
        dataIndex: "fullName",
      },
      {
        title: "Applied Date",
        dataIndex: "appliedDate",
      },
    ];

    const candidateDataSource = [];
    for (let candidate of selectedJob.appliedCandidates) {
      const user = users.find((user) => user._id == candidate.userId);
      const Obj = {
        candidateId: user._id,
        fullName: user.firstName + " " + user.lastName,
        appliedDate: candidate.appliedDate,
      };

      candidateDataSource.push(Obj);
    }
    return (
      <Table columns={candidatesColumns} dataSource={candidateDataSource} />
    );
  };

  const showModal = (jobs) => {
    setIsModalOpen(true);
    setSelectedJob(jobs);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <DefaultLayout>
      <Table columns={columns} dataSource={dataSource} />
      <Modal
        title="Applied Candidates List"
        open={isModalOpen}
        closable={false}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <CandidateTable />
      </Modal>
    </DefaultLayout>
  );
};

export default Posted;
