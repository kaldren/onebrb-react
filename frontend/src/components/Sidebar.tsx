import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from 'react-icons/fa';

import React from 'react'

const APP_NAME = process.env.REACT_APP_NAME;

type Props = {}

const Sidebar = (props: Props) => {
  return <>
<ProSidebar>
  <h1>{APP_NAME}</h1>
  <Menu iconShape="square">
    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
    <SubMenu title="Components" icon={<FaHeart />}>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
</>
}

export default Sidebar