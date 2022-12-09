import ClassCount from "./icons/ClassCount.jsx";
import Progress from "./icons/Progress.jsx";
import LargeCalender from "./icons/LargeCalender.jsx";
import * as Card from "./Card.js";

TrackCard.defaultProps = {
  title: "비전공자를 위한 인공지능 기초 트랙",
  description:
    "프로그래밍 입문자를 위한 트랙입니다. 파이썬 문법과 구조를 익히고, 크롤링 프로그램을 활용하는 방법을 배웁니다.",
  classCount: 4,
  progress: 10,
  duration: 10,
  currentCost: 70000,
  originalCost: 210000,
  discountPercentile: 10,
  iconUrl: "aiml.png",
  installment: 3,
};

export default function TrackCard({
  title,
  description,
  classCount,
  progress,
  duration,
  currentCost,
  originalCost,
  discountPercentile,
  iconUrl,
  installment,
}) {
  // Card에 담겨져있는 컴포넌트들을 조합하여 트랙카드를 만드세요
  return (
    <Card.Container large>
      <Card.Corner></Card.Corner>
      <Card.TrackCardIcon src={iconUrl} alt={iconUrl} />
      <Card.Title large>{title}</Card.Title>
      <Card.Description large>{description}</Card.Description>
      <Card.TextsWrapper large>
        <Card.TextWrapper large>
          <ClassCount />
          <Card.Text large>과목 수 : {classCount} 과목</Card.Text>
        </Card.TextWrapper>
        <Card.TextWrapper large>
          <Progress />
          <Card.Text large>과정 : {progress}주</Card.Text>
        </Card.TextWrapper>
        <Card.TextWrapper large>
          <LargeCalender />
          <Card.Text large>기간 : 수강 신청일로부터 {duration}주</Card.Text>
        </Card.TextWrapper>
      </Card.TextsWrapper>
      <Card.DividerLine />
      <Card.CostWrapper large>
        <Card.CurrentCost>월 {currentCost.toLocaleString()}원</Card.CurrentCost>
        <Card.Installment>({installment}개월)</Card.Installment>
        <Card.OriginalCost>{originalCost.toLocaleString()}원</Card.OriginalCost>
        <Card.DiscountPercentile>{discountPercentile}%</Card.DiscountPercentile>
      </Card.CostWrapper>
    </Card.Container>
  );
}
