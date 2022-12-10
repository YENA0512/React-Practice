import axios from "axios";
import { useState, useEffect } from "react";
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
  const [cardData, setCardData] = useState([]);
  const [totalCardCount, setTotalCardCount] = useState(0);

  const handleClickTab = (tab) => {
    if (tab !== currTab) {
      setSearchValue("");
      setCurrPage(0);
    }
    setCurrTab(tab);
  };

  const handleChangeSearch = (val) => {
    setSearchValue(val);
  };

  useEffect(() => {
    (async function () {
      const API_END_POINT = "https://api-beta.elicer.io:6664/org/academy/";

      if (currTab === "트랙") {
        const filterConditions = searchValue
          ? `filter_conditions=${JSON.stringfy({ title: searchValue })}&`
          : "";
        const offset = currPage * 6;
        const trackUrl = `${API_END_POINT}track/list/?${filterConditions}offset=${offset}&count=6`;
        const response = await axios.get(trackUrl);
        console.log(response.data.track_count);
        console.log(response.data.tracks);
        setTotalCardCount(response.data.track_count);
        setCardData(response.data.tracks);
      }
      if (currTab === "과목") {
        const filterConditions = searchValue
          ? `filter_conditions=${JSON.stringfy({ title: searchValue })}&`
          : "";
        const offset = currPage * 8;
        const courseUrl = `${API_END_POINT}track/list/?${filterConditions}offset=${offset}&count=8`;
        const response = await axios.get(courseUrl);
        console.log(response.data.course_count);
        console.log(response.data.courses);
        setTotalCardCount(response.data.course_count);
        setCardData(response.data.courses);
      }
    })();
  }, [currTab, currPage, searchValue]);

  return (
    <Container>
      <Tab currTab={currTab} onClick={handleClickTab} />
      <SearchTextField value={searchValue} onChange={handleChangeSearch} />
      <CardCount count={totalCardCount} />
      {currTab === "트랙" ? (
        <TracksContainer>
          {cardData.map((track, i) => {
            return <TrackCard title={track} key={`trackcard-${i}`} />;
          })}
        </TracksContainer>
      ) : (
        <CoursesContainer>
          {cardData.map((title, i) => {
            return <CourseCard key={`courseCard-${i}`} />;
          })}
        </CoursesContainer>
      )}
      <Pagination
        currPage={currPage}
        onClickPage={setCurrPage}
        pageCount={Math.ceil(totalCardCount / (currTab === "트랙" ? 6 : 8))}
      />
    </Container>
  );
}
