import React, { useState } from "react";
import "../styles/search.css";
import { MdSearch } from "react-icons/md";
import { useGlobalContext } from "../hooks/useGlobalContext";

export const Search = () => {
  const [user, setUser] = useState("");
  const { request, error, loading, searchUser } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(user);
  };

  return (
    <section className="section">
      <div className="section-center search-card">
        {error.show && (
          <div className="error-wrapper">
            <p>{error.msg}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="Enter GitHub User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {request > 0 && !loading && <button type="sybmit">Search</button>}
          </div>
        </form>
        <h3 className="req">Requests: {`${request}`}/60</h3>
      </div>
    </section>
  );
};
