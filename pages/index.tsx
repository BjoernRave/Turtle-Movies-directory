import { NextPage } from "next";
import React, { ChangeEvent, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import styled from "styled-components";
import Description from "../components/Description";
import Items from "../components/Items";
import movies from "../public/movies.json";

const PageWrapper = styled.main`
  height: 100%;
  width: 90%;
  position: fixed;
  left: -5%;
  padding: 0 10%;
  overflow-x: hidden;

  @media (max-width: 767px) {
    width: 100%;
    left: 0;
    padding: 0;
  }
`;

const FilterInput = styled.input`
  border-radius: 10px;
  padding: 10px;
  width: 30%;
  border: 1px solid black;
  box-sizing: border-box;
`;

const Example: NextPage = () => {
  const [shownMovies, setShownMovies] = useState(movies);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    const activeMovies = movies.filter(
      movie =>
        movie.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );

    setShownMovies(activeMovies);
  };

  return (
    <PageWrapper>
      <h1>Welcome to the list of movies</h1>
      <FilterInput
        placeholder="Filter by Title..."
        value={searchTerm}
        onChange={handleFilterInput}
      />
      <Description></Description>
      <AutoSizer>
        {({ width, height }) => (
          <List
            height={height}
            itemCount={shownMovies.length}
            itemSize={70}
            width={width}
            itemData={shownMovies}
          >
            {Items}
          </List>
        )}
      </AutoSizer>
    </PageWrapper>
  );
};

export default Example;
