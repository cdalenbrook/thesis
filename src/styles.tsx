import styled from "styled-components";

interface cssprops {
  height?: string;
  padding?: string;
}

export const Button = styled.div<cssprops>`
  background-color: var(--buttonBlue);
  padding: ${(props) => props.padding ?? "10px"};
  border-radius: 25px;
  width: 30%;
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  -moz-box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  box-shadow: 6px 6px 5px 0px rgba(64, 138, 241, 0.55);
  font-size: 1.5em;
  cursor: pointer;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
`;

export const Title = styled.h1`
  font-size: 2em;
`;
