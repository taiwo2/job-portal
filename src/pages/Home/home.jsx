import React from 'react';
import Navbar from '../../components/NavBar/navBar';
import SideBar from '../../components/SideBar/sidebar';
import Widget from '../../components/Widget/widget';
import Featured from '../../components/featured/featured';
import Charts from '../../components/Charts/charts';
import Table from '../../components/Table/table'
import "./home.scss"
const home = () => {
  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users"/>
          <Widget type="orders"/>
          <Widget type="earnings"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured  />
          <Charts />
        </div>
        <div className="listContainer">
          <div className="listTitle">Transaction</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default home
