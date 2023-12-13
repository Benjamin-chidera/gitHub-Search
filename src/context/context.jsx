/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useEffect } from "react";
import mockData from "./Data/User";
import mockFollowers from "./Data/followers";
import axios from "axios";

import { useState } from "react";

export const GithubContext = createContext();
const baseUrl = "https://api.github.com";

const GithubProvider = ({ children }) => {
  const [gitHubUser, setGithubUser] = useState(mockData);
  const [followers, setFollowers] = useState(mockFollowers);
  const [request, setRequest] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    show: false,
    msg: "",
  });

  // const searchFollower = async (followers) => {
  //   const url = `${baseUrl}/users/${followers}`;
  //   console.log(followers);
  //   // setFollowers(url);
  // };

  const searchUser = async (user) => {
    setLoading(true);
    const url = `${baseUrl}/users/${user}`;

    const { data } = await axios(url);
    console.log(data);

    if (data) {
      setGithubUser(data);

      const { followers_url } = data;
      const { data: followData } = await axios(`${followers_url}?per_page=100`);
      setFollowers(followData);
    } else {
      setError({ show: true, msg: "There is no user with this name" });
    }
    setLoading(false);
    checkReq();
  };

  const checkReq = async () => {
    try {
      const {
        data: {
          rate: { remaining },
        },
      } = await axios(`${baseUrl}/rate_limit`);
      setRequest(remaining);

      if (remaining === 0) {
        setError({
          show: true,
          msg: "You have reached the limit of requests please wait for an hour",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    checkReq();
  }, []);

  // useEffect(() => {
  //   searchFollower();
  // }, []);

  return (
    <GithubContext.Provider
      value={{ gitHubUser, followers, request, error, loading, searchUser }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
