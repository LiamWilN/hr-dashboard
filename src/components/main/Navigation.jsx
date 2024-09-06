import React from "react";
import links from "../../api/content.details.json";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-full h-full bg-blue-400/80">
      {links.navigationLinks.map((item) => {
        return (
          <div className="flex flex-col px-4 py-1" key={item.id}>
            {item.title}
            {item.activeLinks.map((i) => {
              return (
                <Link key={i.id} className="pl-2">
                  {i.title}
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
