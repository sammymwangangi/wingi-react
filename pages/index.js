import ReactDOM from 'react-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="wechat">
          <Icon
            type="wechat"
            style={{ fontSize: "16px", color: "#08c" }}
            theme="outlined"
          />
          NexForum
        </Menu.Item>
        <Menu.Item key="home">
          <Icon type="home" />
          Home
        </Menu.Item>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="appstore" />
            Create Discussion
          </a>
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="user" />
              Sammy
            </span>
          }
        >
          <Menu.ItemGroup title="Profile">
            <Menu.Item key="setting:1">Edit Profile</Menu.Item>
            <Menu.Item key="setting:2">Change Password</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Account">
            <Menu.Item key="setting:3">Settings</Menu.Item>
            <Menu.Item key="setting:4">LogOut</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

export default App