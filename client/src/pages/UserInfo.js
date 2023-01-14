import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import DefaultLayout from '../components/DefaultLayout'
const UserInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const user = users.find((user) => user._id === id);
  return (
    <DefaultLayout>
      {user && (
        <>
        <h2>Personal Information</h2>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email: {user.email}</p>
        <p>Phone Number: {user.phoneNumber}</p>
        <p>Address: {user.address}</p>
        <hr />
        <h2>Skills</h2>
        {user.skills.map((skill) => {
          return <p key={skill}>{skill}</p>
        })}
        <hr/>
        <h3>Education</h3>
        {user.education.map((edu) =>{
          return <p key={edu}>{edu}</p>
        })}
        <hr />
        <h3>Project</h3>
        {user.project.map((project) =>(
          <p key={project}>{project}</p>
        ))}
        <hr />
        <h3>Experience</h3>
        {user.experience.map((epx) => (
          <p key={epx}>{epx}</p>
        ))}
        </>

      )}
  </DefaultLayout>
  )
}

export default UserInfo