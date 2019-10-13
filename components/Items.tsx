import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { Movie } from "../types";

const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;

  :hover {
    background-color: #3b75ff;
  }
`;

const Item = styled.p``;

const convertMinutesToHours = (total: number) => {
  var minutes = total % 60;
  var hours = (total - minutes) / 60;
  return `${hours}h ${minutes}m`;
};

const Items: FC<Props> = ({ index, style, data }) => {
  const movie = data[index];

  const slug = movie.title.toLowerCase().replace(/ /g, "-");

  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <RowWrapper style={style}>
        <Item>{movie.title}</Item>
        <Item>{movie.year}</Item>
        <Item>{convertMinutesToHours(Number(movie.runtime))}</Item>
        <Item>{movie.revenue ? `$${movie.revenue} M` : "unknown"}</Item>
        <Item>{movie.rating}</Item>
        <Item>{movie.genre.join(", ")}</Item>
      </RowWrapper>
    </Link>
  );
};

export default Items;

interface Props {
  index: number;
  style: any;
  data: Movie[];
}
