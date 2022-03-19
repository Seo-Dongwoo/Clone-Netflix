import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  @media (max-width: 1000px) {
    padding: 10px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 80px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: gray;
    transition: all ease 0.5s;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 30px;
  color: gray;
  margin-bottom: 120px;
  font-weight: bold;
  @media (max-width: 760px) {
    margin-bottom: 0;
    opacity: 0;
  }
`;
