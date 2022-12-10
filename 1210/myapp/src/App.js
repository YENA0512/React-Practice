import styled from "styled-components";

// 임의로 설정한 12개의 점수들입니다, 수정하지 마세요!
const scores = [46, 74, 23, 38, 63, 58, 93, 67, 84, 86, 54, 34];

// 지시사항 1번을 참고하여 코드를 작성하세요.
const ScoresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  place-items: center;
  margin: 0 20vw;
`;

// 지시사항 2번을 참고하여 코드를 작성하세요.
function getColorByScore(score) {
  if (score <= 40) return "red";
  else if (score >= 41 && score <= 70) return "green";
  else if (score >= 71) return "blue";
}

// 지시사항 3번을 참고하여 코드를 작성하세요.
const Score = styled.div`
  position: relative;
  margin: auto;
  color: ${(props) => getColorByScore(props.score)};
  text-align: center;
  width: 100px;
  height: 50px;
  line-height: 50px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => getColorByScore(props.score)};
    opacity: 0.2;
    border-radius: 8px;
  }
`;
const Header = styled.h2`
  text-align: center;
`;
// map을 이용하여 12개의 Score를 화면에 그립니다. 수정하지 마세요!
export default function App() {
  return (
    <div>
      <Header>점수판 만들기</Header>
      <ScoresContainer id="check_layout">
        {scores.map((score, i) => {
          return (
            <Score
              score={score}
              key={`score-${i}-${score}`}
              id={`score-${i}-${score}`}
            >
              {score}
            </Score>
          );
        })}
      </ScoresContainer>
    </div>
  );
}
