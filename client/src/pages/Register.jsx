import React from "react";
import { Col, Row, Button, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/userAction";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (values.password !== values.confirmPassword) {
      message.error("passowrd not match");
    } else {
      // console.log(values)
      dispatch(registerUser(values));
    }
  };
  return (
    <div className="register">
      <Row justify="center" className="flex align-items-center">
        <Col lg={5}>
          <h1 className="heading1" data-aos="slide-right">
            Waliy
          </h1>
        </Col>
        <Col lg={10} sm={24} className="bs p-5 register-form">
          <h3>Register</h3>
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
            <Form.Item
              label="confirmPassword"
              name="confirmPassword"
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
            <Link to="/login"> Already Registered ?, click here to Login</Link>
          </Form>
        </Col>
        <Col lg={5}>
          <h1 className="heading2" data-aos="slide-left">
            Jobs
          </h1>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
