import styled from "styled-components";
import { useState } from "react";
import CourseCard from "./CourseCard.jsx";
import TrackCard from "./TrackCard.jsx";
import Tab from "./Tab.jsx";
import SearchTextField from "./SearchTextField.jsx";
import CardCount from "./CardCount.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 100px;
  justify-content: center;
  width: 1232px;
  margin: auto;
`;

export default function App() {
  const [value, setValue] = useState("");
  const [currTab, setCurrTab] = useState("트랙");
  const handleClickTab = (tab) => {
    if (tab !== currTab) setValue("");
    setCurrTab(tab);
  };
  const handleChangeValue = (val) => {
    setValue(val);
  };
  return (
    <Container>
      <Tab currTab={currTab} onClick={handleClickTab}></Tab>
      <SearchTextField value={value} onChange={handleChangeValue} />
      <CardCount />
      {currTab === "트랙" ? <TrackCard /> : <CourseCard />}
    </Container>
  );
}
