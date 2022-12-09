import styled from "styled-components";
import MagnifyingGlass from "./icons/MagnifyingGlass.jsx";

// 이곳에 컨테이너 스타일을 넣으세요
const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 16px;
  svg {
    top: 15px;
    left: 12px;
    position: absolute;
  }
`;

// 이곳에 Input의 스타일을 넣으세요
const Input = styled.input`
  padding: 11px 11px 11px 39px;
  border: 1px solid #c9cacc;
  border-radius: 4px;
  height: 46px;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  color: #7d7e80;
`;

SearchTextField.defaultProps = {
  value: "",
  onChange: () => {},
};

export default function SearchTextField({ value, onChange }) {
  return (
    <Container>
      <MagnifyingGlass />
      <Input
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
}
