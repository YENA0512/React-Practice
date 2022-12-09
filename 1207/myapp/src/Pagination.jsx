import { get } from "mongoose";
import styled, { css } from "styled-components";
import Arrow from "./icons/Arrow.jsx";

Pagination.defaultProps = {
  currPage: 0,
  pageCount: 5,
  onClickPage: () => {},
};
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #5e5f61;
  min-width: 22px;
  height: 22px;
  background: transparent;
  border-radius: 4px;
  + button {
    margin-left: 4px;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: #524fa1;
      color: #f9fafc;
    `};
`;
const ArrowButton = styled.button`
  margin: ${(props) => (props.flip ? "0 0 0 16px !important" : " 0 16px 0 0")};

  ${(props) =>
    props.flip &&
    css`
      transform: scaleX(-1);
    `}
  > svg {
    display: block;
  }
`;
function getPageNumbers(currPage, pageCount) {
  const resultPages = [];
  resultPages.push(currPage);
  let idx = 1;
  while (resultPages.length < 9) {
    if (currPage + idx < pageCount) resultPages.push(currPage + idx);
    if (currPage - idx > -1) resultPages.unshift(currPage - idx);
    idx++;
  }
  return resultPages;
}
export default function Pagination({ currPage, pageCount, onClickPage }) {
  return (
    <Container>
      <ArrowButton
        disabled={currPage === 0}
        onClick={() => onClickPage(currPage - 1)}
      >
        <Arrow />
      </ArrowButton>

      {getPageNumbers(currPage, pageCount).map((page) => {
        return (
          <Button
            key={`pagination-button-${page}`}
            active={currPage === page}
            onClick={() => onClickPage(page)}
          >
            {page + 1}
          </Button>
        );
      })}

      <ArrowButton
        flip
        disabled={currPage === pageCount - 1}
        onClick={() => onClickPage(currPage + 1)}
      >
        <Arrow />
      </ArrowButton>
    </Container>
  );
}
