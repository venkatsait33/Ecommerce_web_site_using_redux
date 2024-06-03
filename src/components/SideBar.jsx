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
    //console.log(e.target.value);
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
    //console.log(e.target.value);
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
  }, [gender, category, order]);
  //console.log(category, gender);
  return (
    <div className="p-4 mx-auto rounded-md shadow  max-[668px]:hidden dark:bg-gray-900 bg-white z-0 ">
      <h3 className="font-medium text-center dark:text-white">
        Filter by Gender
      </h3>
      <div className="flex flex-col gap-2 p-3 mb-2 border border-gray-300 border-solid rounded shadow-sm ">
        <span className="flex items-center justify-between">
          <label htmlFor="male" className="dark:text-white">
            Male
          </label>
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
          <label htmlFor="female" className="dark:text-white">
            Female
          </label>
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
          <label htmlFor="kid" className="dark:text-white">
            Kid
          </label>
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
      <h3 className="font-medium text-center dark:text-white">
        Filter by Category
      </h3>
      <div className="flex flex-col gap-2 p-3 mb-2 border border-gray-300 border-solid rounded shadow-sm ">
        <span className="flex items-center justify-between">
          <label htmlFor="t-shirt" className="dark:text-white">
            t-shirt
          </label>
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
          <label htmlFor="jeans" className="dark:text-white">
            jeans
          </label>
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
          <label htmlFor="shoes" className="dark:text-white">
            shoes
          </label>
          <input
            type="checkbox"
            id="shoes"
            name="shoes"
            value="shoes"
            onChange={handleCategory}
            checked={category.includes("shoes")}
          />
        </span>
        <span className="flex items-center justify-between ">
          {" "}
          <label htmlFor="shoes" className="dark:text-white">
            shorts
          </label>
          <input
            type="checkbox"
            id="shorts"
            name="shorts"
            value="shorts"
            onChange={handleCategory}
            checked={category.includes("shorts")}
          />
        </span>
        <span className="flex items-center justify-between ">
          {" "}
          <label htmlFor="shoes" className="dark:text-white">
            footwear
          </label>
          <input
            type="checkbox"
            id="footwear"
            name="footwear"
            value="footwear"
            onChange={handleCategory}
            checked={category.includes("footwear")}
          />
        </span>
        <span className="flex items-center justify-between ">
          {" "}
          <label htmlFor="shoes" className="dark:text-white">
            salwar
          </label>
          <input
            type="checkbox"
            id="salwar"
            name="salwar"
            value="salwar"
            onChange={handleCategory}
            checked={category.includes("salwar")}
          />
        </span>
        <span className="flex items-center justify-between ">
          {" "}
          <label htmlFor="shoes" className="dark:text-white">
            womentop
          </label>
          <input
            type="checkbox"
            id="womentop"
            name="womentop"
            value="womentop"
            onChange={handleCategory}
            checked={category.includes("womentop")}
          />
        </span>
      </div>
      <h3 className="font-medium text-center dark:text-white">Sort by price</h3>
      <div
        className="flex flex-col gap-2 p-3 mb-2 border border-gray-300 border-solid rounded shadow-sm"
        onChange={handleSort}
      >
        <span className="flex items-center justify-between ">
          <label htmlFor="" className="dark:text-white">
            Ascending
          </label>
          <input
            type="radio"
            name="order"
            value={"asc"}
            defaultChecked={order === "asc"}
          />
        </span>

        <span className="flex items-center justify-between ">
          <label htmlFor="" className="dark:text-white">
            Descending {""}
          </label>
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
