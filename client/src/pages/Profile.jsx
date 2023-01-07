import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Tabs, Col, Row, Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/userAction";
const { TextArea } = Input;
const { TabPane } = Tabs;
const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState();
  const [activeTab, setActiveTab] = useState("1");
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    setPersonalInfo(values);
    setActiveTab("2");
    // console.log(personalInfo);
  };

  const onFinalSubmit = (values) => {
    const userObj = {
      ...personalInfo,
      ...values,
    };

    dispatch(updateUser(userObj));
    console.log(userObj);
  };

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <DefaultLayout>
      <Tabs defaultActiveKey="1" activeKey={activeTab}>
        <TabPane key="1" tab="Peronal Info">
          <Form layout="vertical" onFinish={onSubmit} initialValues={user}>
            <Row gutter={16}>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="First name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input your Last name!" },
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
                    { required: true, message: "Please input your Email!" },
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
              <Col lg={8} sm={24}>
                <Form.Item
                  label="Portfolio"
                  name="portfolio"
                  rules={[
                    { required: true, message: "Please input your Portfolio!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24}>
                <Form.Item
                  label="About"
                  name="about"
                  rules={[
                    { required: true, message: "Please input your about!" },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
              <Col lg={24} sm={24}>
                <Form.Item
                  label="Address"
                  name="address"
                  rules={[
                    { required: true, message: "Please input your Address!" },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <Button type="primary" htmlType="submit">
                Next
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane key="2" tab="Skills and Education">
          <Form initialValues={user} layout="vertical" onFinish={onFinalSubmit}>
            <Row>
              <Col lg={24} sm={24}>
                <Form.List name="education">
                  {(education, { add, remove }) => (
                    <div>
                      {education.map((field, index) => (
                        <div className="d-flex" key={index}>
                          <Form.Item
                            rules={[
                              {
                                required: true,
                                message: "Please input your Education!",
                              },
                            ]}
                            {...field}
                            label="Education"
                            style={{ width: "80%" }}
                          >
                            <TextArea rows={4} />
                          </Form.Item>
                          <Button onClick={() => add()}>Add</Button>
                          {index !== 0 && (
                            <Button onClick={() => remove(index)}>
                              Delete
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Form.List>
              </Col>
              <Col lg={24} sm={24}>
                <Form.List name="skills">
                  {(skills, { add, remove }) => (
                    <div>
                      {skills.map((field, index) => (
                        <div className="d-flex" key={index}>
                          <Form.Item
                            {...field}
                            rules={[
                              {
                                required: true,
                                message: "Please input your Skills!",
                              },
                            ]}
                            label="Skills"
                            style={{ width: "80%" }}
                          >
                            <TextArea rows={4} />
                          </Form.Item>
                          <Button onClick={() => add()}>Add</Button>
                          {index !== 0 && (
                            <Button onClick={() => remove(index)}>
                              Delete
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Form.List>
              </Col>
              <Col lg={24} sm={24}>
                <Form.List name="project">
                  {(project, { add, remove }) => (
                    <div>
                      {project.map((field, index) => (
                        <div className="d-flex" key={index}>
                          <Form.Item
                            {...field}
                            rules={[
                              {
                                required: true,
                                message: "Please input your Project!",
                              },
                            ]}
                            label="Projects"
                            style={{ width: "80%" }}
                          >
                            <TextArea rows={4} />
                          </Form.Item>
                          <Button onClick={() => add()}>Add</Button>
                          {index !== 0 && (
                            <Button onClick={() => remove(index)}>
                              Delete
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Form.List>
              </Col>
              <Col lg={24} sm={24}>
                <Form.List name="experience">
                  {(experience, { add, remove }) => (
                    <div>
                      {experience.map((field, index) => (
                        <div className="d-flex" key={index}>
                          <Form.Item
                            {...field}
                            rules={[
                              {
                                required: true,
                                message: "Please input your Experience!",
                              },
                            ]}
                            label="Experience"
                            style={{ width: "80%" }}
                          >
                            <TextArea rows={4} />
                          </Form.Item>
                          <Button onClick={() => add()}>Add</Button>
                          {index !== 0 && (
                            <Button onClick={() => remove(index)}>
                              Delete
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </Form.List>
              </Col>
            </Row>
            <Button onClick={() => setActiveTab("1")}>Previous</Button>
            <Button type="primary" htmlType="submit">
              Update
            </Button>{" "}
          </Form>
        </TabPane>
      </Tabs>
    </DefaultLayout>
  );
};

export default Profile;
