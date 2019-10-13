import React, { FC } from "react";
import styled from "styled-components";

const DescriptionWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  width: 100%;
  border-bottom: 2px solid black;
  font-weight: bold;
  padding: 10px;
  box-sizing: border-box;
`;

const Description: FC<Props> = () => {
  return (
    <DescriptionWrapper>
      <p>Title</p>
      <p>Year</p>
      <p>Duration</p>
      <p>Revenue</p>
      <p>Rating</p>
      <p>Categories</p>
    </DescriptionWrapper>
  );
};

export default Description;

interface Props {}
