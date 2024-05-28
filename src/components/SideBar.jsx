import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  //searchparams are used to checked or clicked data to searchURL as params as identifiers
  const [searchParams, setSearchParams] = useSearchParams();

  //in this we  retrieve stored, the current search params in the searchParams state and  the data when we refresh the page the search params will retrieved and stored in a array.
  const initialGender = searchParams.getAll("gender") || [];
  const initialCategory = searchParams.getAll("category") || [];
  const initialOrder = searchParams.get("order");

  // in this compare the clicked data and stored in the searchParams state and stored in a array. if there is no data it will be reset.
  const [gender, setGender] = useState(initialGender || []);
  const [category, setCategory] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || "");
  const handleGender = (e) => {
    console.log(e.target.value);
    const { value } = e.target;
    let newGender = [...gender];
    {
      /* we use newgender to filter the values in the array and pass them to the gender state to store   */
    }

    if (newGender.includes(value)) {
      newGender = newGender.filter((item) => item !== value);
    } else {
      newGender.push(value);
    }
    setGender(newGender);
  };
  const handleCategory = (e) => {
    console.log(e.target.value);
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((item) => item !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    const { value } = e.target;
    console.log(value);
    setOrder(value);
  };

  useEffect(() => {
    let params = {
      gender,
      category,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [gender, category,order]);
  console.log(category, gender);
  return (
    <div className="p-1 mx-auto mt-2 rounded-md shadow bg-inherit s">
      <h3 className="font-medium text-center">Filter by Gender</h3>
      <div className="flex flex-col gap-2 p-3 mb-2 border border-gray-300 border-solid rounded shadow-sm">
        <span className="flex items-center justify-between">
          <label htmlFor="male">Male</label>
          <input
            type="checkbox"
            id="male"
            name="male"
            value="male"
            onChange={handleGender}
            checked={gender.includes("male")}
          />
        </span>

        <span className="flex items-center justify-between ">
          {" "}
          <label htmlFor="female">Female</label>
          <input
            type="checkbox"
            id="female"
            name="female"
            value="female"
            onChange={handleGender}
            checked={gender.includes("female")}
          />
        </span>
        <span className="flex items-center justify-between ">
          {" "}
          <label htmlFor="kid">Kid</label>
          <input
            type="checkbox"
            id="kid"
            name="kid"
            value="kid"
            onChange={handleGender}
            checked={gender.includes("kid")}
          />
        </span>
      </div>
      <h3 className="font-medium text-center">Filter by Category</h3>
      <div className="flex flex-col gap-2 p-3 mb-2 border border-gray-300 border-solid rounded shadow-sm">
        <span className="flex items-center justify-between">
          <label htmlFor="t-shirt">t-shirt</label>
          <input
            type="checkbox"
            id="t-shirt"
            name="t-shirt"
            value="t-shirt"
            onChange={handleCategory}
            checked={category.includes("t-shirt")}
          />
        </span>

        <span className="flex items-center justify-between ">
          {" "}
          <label htmlFor="jeans">jeans</label>
          <input
            type="checkbox"
            id="jeans"
            name="jeans"
            value="jeans"
            onChange={handleCategory}
            checked={category.includes("jeans")}
          />
        </span>
        <span className="flex items-center justify-between ">
          {" "}
          <label htmlFor="shoes">shoes</label>
          <input
            type="checkbox"
            id="shoes"
            name="shoes"
            value="shoes"
            onChange={handleCategory}
            checked={category.includes("shoes")}
          />
        </span>
      </div>
      <h3 className="font-medium text-center">Sort by price</h3>
      <div
        className="flex flex-col gap-2 p-3 mb-2 border border-gray-300 border-solid rounded shadow-sm"
        onChange={handleSort}
      >
        <span className="flex items-center justify-between ">
          <label htmlFor="">Ascending</label>
          <input
            type="radio"
            name="order"
            value={"asc"}
            defaultChecked={order === "asc"}
          />
        </span>

        <span className="flex items-center justify-between ">
          <label htmlFor="">Descending</label>
          <input
            type="radio"
            name="order"
            value={"desc"}
            defaultChecked={order === "desc"}
          />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
