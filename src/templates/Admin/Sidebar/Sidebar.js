import React, { useState } from "react";
import {
  UserOutlined,
  VideoCameraOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
function getItem(label, key, icon, children, theme) {
  return {
    key,
    icon,
    children,
    label,
    theme,
  };
}

export default function Sidebar(props) {
  const [theme, setTheme] = useState("light");
  const [current, setCurrent] = useState("1");

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    getItem(
      "Users",
      "sub1",
      <UserOutlined />
      // [
      //   getItem("Option 1", "1"),
      //   getItem("Option 2", "2"),
      //   getItem("Option 3", "3"),
      // ],
    ),
    getItem("Films", "5", <VideoCameraOutlined />),
    getItem("Showtime", "6", <DesktopOutlined />),
  ];

  return (
    <div className="dark:bg-gray-900 shadow-lg min-h-screen">
      <img
        src="https://movie-booking-project.vercel.app/img/logoTixLoading.png"
        alt="logo"
        className="w-20 ml-14 mt-5"
      />
      <br />
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="vertical"
        theme="dark"
        items={items}
      />
      {/* <Switch
        className="text-center"
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      /> */}
    </div>
  );
}
