import React from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom'

function NavBar() {
  const[current, setCurrent ] = React.useState('mail')

  const  handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };
  
  return (
    <div className="App">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{float:'right',borderBottom:'none'}}>
        <Menu.Item key="news" >
        <Link to="/" >NewsData </Link>
        </Menu.Item>
      </Menu>

    </div>
  );
}

export default NavBar;
