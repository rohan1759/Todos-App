import React, { useState } from "react";
import "./searchSection.css";

const SearchSection = ({data, setData}) => {
  const [filter, setFilter] = useState("all");
  const [sortid, setSort] = useState("dueDate");

  const handleSortChange = (v) => {
    const selectedSortId = v.target.value;
    setSort(selectedSortId);

    // Sort the data based on the selected sorting criteria
    const sortedData = [...data].sort((a, b) => {
      if (selectedSortId === "createdAt") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
      else if(selectedSortId === "dueDate"){
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      return 0; // No sorting (maintain the current order)
    });

    setData(sortedData);
  }

  const handleFilterChange = (v) => {
    const selectedFilter = v.target.value;
    setFilter(selectedFilter);

    // Filter the data based on the selected filter criteria
    let filteredData = [...data];
    if (selectedFilter === "pending") {
      filteredData = filteredData.filter((item) => item.status === "pending");
    }
    else if(selectedFilter === "completed"){
      filteredData = filteredData.filter((item) => item.status === "completed");
    }

    setData(filteredData);
  };

  return (
    <div className="searchSection_maindiv">
      <div className="searchSection_maindiv_filter">
        <span>Filter</span>
        <select
          name="filter"
          onChange={handleFilterChange}
          id="filter"
        >
          <option value={"all"}>All</option>
          <option value={"pending"}>Pending</option>
          <option value={"completed"}>Completed</option>
        </select>
      </div>
      <div className="searchSection_maindiv_sort">
        <span>Sort</span>
        <select name="sortid" onChange={handleSortChange} id="sort">
          <option value={"createdAt"}>Added Date</option>
          <option value={"dueDate"}>Due Date</option>
        </select>
      </div>
    </div>
  );
};

export default SearchSection;