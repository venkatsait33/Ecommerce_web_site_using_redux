import React from 'react'
import { Link } from 'react-router-dom';

const Add_Delete_Btn = ({ handleDelete, id, handleAddToCart }) => {
  return (
    <div>
      {" "}
      <button className="p-2 mt-2 mr-4 text-center bg-blue-500 rounded-md hover:bg-blue-600 dark:text-white">
        <Link to={`/edit/${id}`}>Edit</Link>
      </button>
      <button
        className="p-2 mt-2 text-center bg-red-500 rounded-md hover:bg-red-600 dark:text-white"
        onClick={handleDelete}
      >
        Delete
      </button>
  
    </div>
  );
};

export default Add_Delete_Btn