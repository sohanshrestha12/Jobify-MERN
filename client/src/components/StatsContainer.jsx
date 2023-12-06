import React from "react";
import Wrapper from "../assets/wrappers/StatsContainer";
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";
import StatItem from "./StatItem";

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: "pending applications",
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "interview scheduled",
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
    {
      title: "jobs declined",
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
  ];
  return <Wrapper>{stats.map((item) => {
    return <StatItem key={item.title} {...item}/>
  })}</Wrapper>;
};

export default StatsContainer;
