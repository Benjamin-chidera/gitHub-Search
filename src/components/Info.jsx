import React from "react";
import "../styles/info.css";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { BiGitRepoForked, BiRegistered } from "react-icons/bi";
import { FiUserPlus, FiUsers } from "react-icons/fi";

export const Info = () => {
  const { gitHubUser } = useGlobalContext();

  const { followers, following, public_repos } = gitHubUser;

  const userInfo = [
    {
      id: 1,
      icon: <BiGitRepoForked className="icon" />,
      label: "Repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "Followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "Following",
      value: following,
      color: "purple",
    },
  ];

  return (
    <section className="section">
      <div className="section-center info-card">
        {userInfo.map((item) => {
          return (
            <article className="item" key={item.id}>
              <span className={item.color}>{item.icon}</span>

              <div>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
