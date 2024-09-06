import React from "react";
import links from "../../api/content.details.json";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      {links.navigationLinks.map((item) => {
        return (
          <Link className="flex flex-col" key={item.id}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
