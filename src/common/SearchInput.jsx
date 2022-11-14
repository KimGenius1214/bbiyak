import { PropaneSharp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import useMovieSearch from "../pages/detail/useMovieSearch";

export default function SearchInput(props) {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  const setCreate = props.handleCreate;

  useEffect(() => {
    console.log(setCreate);
  }, []);

  const test = () => {
    console.log(props.handleCreate);
  };

  test();
  return (
    <input
      placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
      onChange={(e) => handleKeyword(e)}
      value={searchKeyword}
      style={{
        fontSize: "14px",
        fontWeight: 400,
        background: "transparent",
        width: "100%",
        padding: "0 0 0 8px",
        border: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        caretColor: "rgb(53, 53, 53)",
        lineHeight: "23px",
      }}
    />
  );
}
