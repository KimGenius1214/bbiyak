import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";
import SearchInput from "./SearchInput";
import useMovieSearch from "../pages/detail/useMovieSearch";

export default function SearchMenu(props) {
  const SearchMenu = styled.li`
    width: 300px;
    display: flex;
    align-items: cneter;
    height: 62px;
    flex-shrink: 1;
    margin: 0 0 0 auto;
    position: relative;
  `;

  const Link = styled.a`
    text-decoration: none;
  `;

  const SearchContainer = styled.div`
    position: relative;
    width: 100%;
  `;

  const SearchResultWrapper = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 9999999;
    background-color: #fff;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    max-height: 480px;
    overflow-y: scroll;
  `;

  const SearchResultListItem = styled.li`
    padding: 4px 6px;
    box-sizing: border-box;
    color: #222;
    font-size: 16px;
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      background-color: #eee;
    }
  `;

  const SearchResultList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
  `;

  const SearchFormWrapper = styled.div``;

  const SearchForm = styled.form``;

  const SearchLabel = styled.label`
    background: rgb(245, 245, 247);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    border-radius: 2px;
    padding: 7px 8px;
  `;

  const searchRef = useRef("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  console.log(props.value);

  const data = useMovieSearch(props.value);

  console.log(data);

  return (
    <SearchMenu>
      <SearchContainer>
        <SearchFormWrapper ref={searchRef}>
          <SearchForm>
            <SearchLabel>
              <AiOutlineSearch />
              <SearchInput
                onChange={(e) => handleKeyword(e.target.value)}
                value={props.value}
              ></SearchInput>
            </SearchLabel>
          </SearchForm>
        </SearchFormWrapper>
      </SearchContainer>
      <SearchResultWrapper>
        <SearchResultList>
          {data.data &&
            data?.data?.results?.map((searchResultItem) => (
              <Link
                href={`/movie/${searchResultItem.id}`}
                key={searchResultItem.id}
              >
                <SearchResultListItem>
                  {searchResultItem.title}
                </SearchResultListItem>
              </Link>
            ))}
        </SearchResultList>
      </SearchResultWrapper>
    </SearchMenu>
  );
}
