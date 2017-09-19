import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 32%
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overflow: hidden;
`;
const ShowCard = props => (
  <Wrapper className="show-card">
    <img
      src={require(`./img/posters/${props.show.poster}`)}
      alt={`${props.show.title} Show Poster`}
    />
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      <p>{props.show.description}</p>
    </div>
  </Wrapper>
);

export default ShowCard;
