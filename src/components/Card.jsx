/* eslint-disable react/jsx-no-target-blank */
import "../styles/Card.css";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

export const Card = () => {
  const { gitHubUser } = useGlobalContext();

  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = gitHubUser;

  return (
    <div className="card-wrapper">
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || "No twitter account"}</p>
        </div>
        <a href={html_url} target="_blank">
          follow
        </a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        {company && (
          <p>
            <MdBusiness /> {company}
          </p>
        )}

        {
          <p>
            <MdLocationOn /> {location || "Earth"}
          </p>
        }

        {blog && (
          <a href={`https://${blog}`} target="_blank">
            <MdLink />
            {blog}
          </a>
        )}
      </div>
    </div>
  );
};
