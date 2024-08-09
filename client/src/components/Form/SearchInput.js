import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="d-flex mx-3" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          style={{
            width: "250px",
            borderRadius: "20px",
            padding: "8px 12px",
            border: "1px solid #ced4da",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            outline: "none",
          }}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          style={{
            borderRadius: "20px",
            padding: "8px 20px",
            marginLeft: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
