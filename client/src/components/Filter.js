import React, { useState } from "react";
import { FilterOutlined, OrderedListOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select } from "antd";
import { searchJobs, sortJobs } from "../redux/actions/jobActions";
import { useDispatch } from "react-redux";
const { Search } = Input;
const { Option } = Select;

const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const SearchFilter = (value) => {
    dispatch(searchJobs(value));
    // console.log(value)
  };
  const onSubmitSort = (values) => {
    dispatch(sortJobs(values));
    handleOk()
  };
  return (
    <div className="d-flex">
      <Search placeholder="Search" 
      onSearch={SearchFilter} 
      />
      <FilterOutlined onClick={showModal} />
      <Modal
        title="Applied Candidates List"
        open={isModalOpen}
        closable={false}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <Form layout="vertical" onFinish={onSubmitSort}>
          <Form.Item name="experience" label="Experience">
            <Select>
              <Option value={0}> Fresher</Option>
              <Option value={1}> 1 Years</Option>
              <Option value={2}> 2 Years</Option>
              <Option value={3}> 3 Years</Option>
              <Option value={4}> 4 Years</Option>
              <Option value={4}> 5Years</Option>
            </Select>
          </Form.Item>
          <Form.Item name="salary" label="Salary">
            <Select>
              <Option value={10000}> 10000</Option>
              <Option value={15000}> 15000</Option>
              <Option value={25000}> 25000</Option>
              <Option value={35000}> 35000</Option>
              <Option value={50000}> 50000</Option>
              <Option value={70000}> 70000</Option>
            </Select>
          </Form.Item>
          <Button htmlType="submit">filter</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Filter;
