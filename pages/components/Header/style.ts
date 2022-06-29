import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 88.23px;
  background-color: #FFFFFF;
`;

export const HeaderLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #CCCCCC;
  box-shadow: #CCCCCC 0px 1px 4px;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  font-familiy: Neo Sans Std;
  color: #555555;
  height: 100%;
  margin-left: 83px;
`;

export const HeaderButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Selected = styled.div`
  display: flex;
  align-items: center;
  font-familiy: Neo Sans Std;
  color: #D14B8F;
  border-bottom: 2px solid #D14B8F;
  height: 100%; 
`

export const Container = styled.div`
  display:flex;
  height: 100%;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 42px;
`;