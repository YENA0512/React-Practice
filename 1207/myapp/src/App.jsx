import { useState } from "react";
import styled from "styled-components";
import Tab from "./Tab.jsx";
import SearchTextField from "./SearchTextField.jsx";
import CardCount from "./CardCount.jsx";
import TrackCard from "./TrackCard.jsx";
import CourseCard from "./CourseCard.jsx";
import Pagination from "./Pagination.jsx";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 1232px;
  margin: auto;
  padding-top: 100px;
  flex-direction: column;
`;

const TracksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 398px);
  grid-column-gap: 19px;
  grid-row-gap: 32px;
`;

const CoursesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 296px);
  grid-column-gap: 16px;
  grid-row-gap: 24px;
`;

export default function App() {
  const [currTab, setCurrTab] = useState("트랙");
  const [searchValue, setSearchValue] = useState("");
  const [currPage, setCurrPage] = useState(0);

  const handleClickTab = (tab) => {
    if (tab !== currTab) setSearchValue("");
    setCurrTab(tab);
  };

  const handleChangeSearch = (val) => {
    setSearchValue(val);
  };

  return (
    <Container>
      <Tab currTab={currTab} onClick={handleClickTab} />
      <SearchTextField value={searchValue} onChange={handleChangeSearch} />
      <CardCount />
      {currTab === "트랙" ? (
        <TracksContainer>
          {Array(6)
            .fill("")
            .map((x, i) => {
              return <TrackCard key={`trackcard-${i}`} />;
            })}
        </TracksContainer>
      ) : (
        <CoursesContainer>
          {Array(8)
            .fill("")
            .map((x, i) => {
              return <CourseCard key={`courseCard-${i}`} />;
            })}
        </CoursesContainer>
      )}
      <Pagination
        currPage={currPage}
        onClickPage={setCurrPage}
        pageCount={20}
      />
    </Container>
  );
}
