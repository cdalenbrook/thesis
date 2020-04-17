import React from "react";
import styled from "styled-components";
import icon from "../../images/icon.png";

const NavBar = styled.nav`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
`;

const Logo = styled.img`
  height: 80%;
  width: auto;
`;

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export default (WrappedComponent: React.ComponentType<any>) => {
  const hocComponent = ({ ...props }) => {
    return (
      <>
        <NavBar>
          <Logo src={icon} />
        </NavBar>
        <LayoutWrapper>
          <WrappedComponent {...props} />
        </LayoutWrapper>
      </>
    );
  };
  return hocComponent;
};
