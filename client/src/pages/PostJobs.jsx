import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Tabs, Col, Row, Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { createJobs } from "../redux/actions/jobActions";
const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;

const PostJobs = () => {
  const [jobInfo, setJobInfo] = useState({});
  const [activeTab, setActiveTab] = useState("0");
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    setJobInfo(values);
    setActiveTab("1");
  };

  const onFinalSubmit = (values) => {
    const Obj = { ...jobInfo, ...values };
    dispatch(createJobs(Obj));
  };
  return (
    <DefaultLayout>
      <Tabs defaultActiveKey="0" activeKey={activeTab}>
        <TabPane key="0" tab="Job Info">
          <Form layout="vertical" onFinish={onSubmit}>
            <Row gutter={16}>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Title"
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Please input your title!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Department"
                  name="department"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Department!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Experience"
                  name="experience"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Experience!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Salary From"
                  name="salaryFrom"
                  rules={[
                    {
                      required: true,
                      message: "Please input your SalaryFrom!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Salary To"
                  name="salaryTo"
                  rules={[
                    { required: true, message: "Please input your SalaryTo!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Skills "
                  name="skillsRequired"
                  rules={[
                    {
                      required: true,
                      message: "Please input your skills!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Minimum Qualification"
                  name="minimumQualification"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Minimum Qualification!",
                    },
                  ]}
                >
                  <Select>
                    <Option value="degree">
                      {" "}
                      Bachelor Degree
                    </Option>
                    <Option value="SSCE"> SSCE</Option>
                    <Option value="WAEC"> WAEC</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col lg={24} sm={24}>
                <Form.Item
                  label="Small Description"
                  name="smallDescription"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Small Description!",
                    },
                  ]}
                >
                  <TextArea rows={3} />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24}>
                <Form.Item
                  label="Full Description"
                  name="fullDescription"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Full Description!",
                    },
                  ]}
                >
                  <TextArea rows={3} />
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form>
        </TabPane>
        <TabPane key="1" tab="Company Info">
          <Form layout="vertical" onFinish={onFinalSubmit}>
            <Row gutter={16}>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Company Name"
                  name="company"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Company Name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Phone Number!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24}>
                <Form.Item
                  label="Company Description"
                  name="companyDescription"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Company Description!",
                    },
                  ]}
                >
                  <TextArea rows={3} />
                </Form.Item>
              </Col>
            </Row>
            <Button onClick={() => setActiveTab("0")}>Previous</Button>
            <Button type="primary" htmlType="submit">
              Update
            </Button>{" "}
          </Form>
        </TabPane>
      </Tabs>
    </DefaultLayout>
  );
};

export default PostJobs;
