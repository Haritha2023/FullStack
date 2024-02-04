// import React from "react";

// eslint-disable-next-line react/prop-types
const Pagination = ({ nextPageFn, previousPageFn, pageNumber }) => {
  return (
    <div className="bg-gray-400 h-[50px] w-full p-4 mt-8 flex justify-center">
      <div className="px-8" onClick={previousPageFn}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNumber}</div>
      <div className="px-8" onClick={nextPageFn}>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
