import styled from "styled-components";

// 전체 카드 개수 UI 스타일을 여기에 넣으세요.
const Text = styled.p`
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  color: #151618;
  padding: 12px 0;
  margin-top: 24px;
  background: rgba(0, 0, 0, 0.0001);
  box-shadow: inset 0px -1px 0px #e1e2e4;
  width: 100%;
`;

CardCount.defaultProps = {
  count: 0,
};

export default function CardCount({ count }) {
  return <Text>전체 {count}개</Text>;
}
