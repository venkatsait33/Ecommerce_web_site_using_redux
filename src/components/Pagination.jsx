import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i < totalPages; i++) {
    pages.push(i);
  }
  return (
    <div>
      {" "}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            fontWeight: currentPage === page ? "bold" : "normal",
            margin: "0 5px",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination