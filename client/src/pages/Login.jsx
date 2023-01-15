import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userAction";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(loginUser(values));
  };
  return (
    <div className="login">
      <Row justify="center" className="flex align-items-center">
        <Col lg={5}>
          <h1 className="heading1" data-aos="slide-left">
            Waliy
          </h1>
        </Col>
        <Col lg={10} sm={24} className="bs p-5 login-form">
          <h3>Login</h3>
          <hr />
          <Form layout="vertical" onFinish={onSubmit}>
            <Form.Item
              label="Username"
              name="userName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <Link to="/register">
              {" "}
              Not Registered ?, click here to Register
            </Link>
          </Form>
        </Col>
        <Col lg={5}>
          <h1 className="heading2" data-aos="slide-right">
            Jobs
          </h1>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
