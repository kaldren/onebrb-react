import React from 'react'

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaChartArea, FaGem, FaHeart, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const APP_NAME = process.env.REACT_APP_NAME;

type Props = {}

const Sidebar = (props: Props) => {
  return <>
<ProSidebar>
  <Menu iconShape="square">
    <Link to="/">
      <MenuItem icon={<FaHome />}>{APP_NAME}</MenuItem>
    </Link>

    <Link to="dashboard">
      <MenuItem icon={<FaChartArea />}>Dashboard</MenuItem>
    </Link>

    <SubMenu title="Dashboard" icon={<FaHeart />}>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
</>
}

export default Sidebar