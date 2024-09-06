import React from "react";

const DefaultButton = (i) => {
  return (
    <button className="bg-sky-600/90 text-white rounded-md shadow-lg w-full py-2 gap-2 flex justify-center">
      {i.title}
    </button>
  );
};

export default DefaultButton;
