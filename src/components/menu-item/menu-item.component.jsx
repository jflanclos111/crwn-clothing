import React from "react";
import { useHistory, useRouteMatch, withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

export function MenuItem({ title, imageUrl, size, linkUrl }) {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">BUY NOW</span>
      </div>
    </div>
  );
}
