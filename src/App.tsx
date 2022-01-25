import React, { useEffect } from 'react';
import logo from './logo.svg';
import "antd/dist/antd.css";
import './App.css';
import { Button, Row, Menu, Dropdown, message, Checkbox, DatePicker, Input, Radio, Select } from 'antd';
import { DownOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Option } = Select;

function App() {
  const [value, setValue] = React.useState(1);

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  function handleButtonClick(e:any) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  const handleClick = (e:any) => {
    console.log('click ', e);
  };

  function onChange(e:any) {
    console.log(`checked = ${e.target.checked}`);
  }

  function onChangeDP(date:any, dateString:any) {
    console.log(date, dateString);
  }

  function handleChange(value:any) {
    console.log(`selected ${value}`);
  }

  const onChangeRB = (e:any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <Row>
        <Button>Button</Button>
        <Button type='primary'>Button</Button>
        <Button type='dashed'>Button</Button>
      </Row>
      <Row>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <DownOutlined />
          </a>
        </Dropdown>
      </Row>
      <Row>
        <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
          Dropdown
        </Dropdown.Button>
        <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
          Dropdown
        </Dropdown.Button>
      </Row>
      <Row>
        <Menu
          onClick={handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </Row>
      <Row>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
      </Row>
      <Row>
        <DatePicker onChange={onChangeDP} />
      </Row>
      <Row>
        <Input placeholder="Basic usage" />
      </Row>
      <Row>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
      </Row>
      <Row>
        <Radio.Group onChange={onChangeRB} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </Row>
    </div>
  );
}

export default App;
