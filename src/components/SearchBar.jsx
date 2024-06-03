import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProductDetails,
  getProducts,
} from "../redux/productReducer/action";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((store) => store.productReducer.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
     if (Array.isArray(products) && query.length > 0) {
       const filteredSuggestions = products.filter((product) =>
         product.name.toLowerCase().includes(query.toLowerCase())
       );

       setSuggestions(filteredSuggestions);
       setShowSuggestions(true);
     } else {
       setSuggestions([]);
       setShowSuggestions(false);
     }
  }, [query, products]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveSuggestion((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      setActiveSuggestion((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      selectSuggestion(suggestions[activeSuggestion]);
    }
  };

  const selectSuggestion = (suggestion) => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    navigate(`/product/${suggestion.id}`);
  };

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="font-bold text-blue-500">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div>
      <div>
        <span className="flex items-center p-2 text-center rounded outline-none dark:text-white dark:bg-gray-700 dark:border-gray-600">
          <input
            type="text"
            ref={inputRef}
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-[100%] rounded  outline-none dark:text-white dark:bg-gray-700 dark:border-gray-600"
            placeholder="Search products..."
          />
          <BsSearch className="ml-2 dark:bg-white-200 rounded text-center w-[20px] h-[20px]" />
        </span>
      </div>
      {showSuggestions && query.length > 0 && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded">
          {suggestions.length > 0 ? (
            suggestions.map((suggestion, index) => (
              <li
                key={suggestion.id}
                className={`p-2 cursor-pointer ${
                  index === activeSuggestion ? "bg-gray-200" : ""
                }`}
                onMouseDown={() => selectSuggestion(suggestion)}
              >
                {highlightText(suggestion.name, query)}
              </li>
            ))
          ) : (
            <li className="p-2">No suggestions</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
