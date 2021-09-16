import React from "react";

const Follower = (follower) => {
  const { login, avatar_url, html_url } = follower;
  return (
    <article className="card">
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className="btn">
        View Profile
      </a>
    </article>
  );
};

export default Follower;
