import "./App.css";
import { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import axios from "axios";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
const Header = ({ title }) => {
  return (
    <header>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
    </header>
  );
};
const Nav = ({ topics, onChangeMode }) => {
  const liTag = topics.map((t) => (
    <li key={t.id}>
      <Link to={`/read/${t.id}`}>{t.title}</Link>
    </li>
  ));
  return (
    <nav>
      <ul>{liTag}</ul>
    </nav>
  );
};
const Article = ({ title, body }) => {
  return (
    <article>
      <h2>{title}</h2>
      {body}
    </article>
  );
};
function Control({ onChangeMode }) {
  return (
    <ul>
      <li>
        <Link to="/create">Create</Link>
      </li>
      <li>
        <Link to="/update">Update</Link>
      </li>
    </ul>
  );
}
const Create = ({ onSave }) => {
  const submitHandler = (evt) => {
    evt.preventDefault();
    const title = evt.target.title.value;
    const body = evt.target.body.value;
    onSave(title, body);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="Create" />
      </p>
    </form>
  );
};
const Read = ({ topics }) => {
  const params = useParams();
  const id = Number(params.id);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    axios.get(`/topics/${id}`).then((result) => {
      console.log("result.data", result.data);
      setTitle(result.data.title);
      setBody(result.data.body);
    });
  }, [id]); //id값이 바꼇을때만 실행

  return <Article title={title} body={body}></Article>;
};
function App() {
  const [topics, setTopics] = useImmer([]);
  const fetchTopics = async () => {
    const _topics = await axios.get("/topics");
    setTopics(_topics.data);
  };
  //useEffect는 async await을 안받는다. 고로 따로 함수 만들어서 넣어줌
  useEffect(() => {
    fetchTopics();
  }, []);
  const navigate = useNavigate();
  const saveHandler = (title, body) => {
    axios.post("/topics", { title, body }).then((result) => {
      setTopics((draft) => {
        draft.push(result.data);
      });
      //url으르 생성된 컨텐츠의 주소로 변경
      navigate(`/read/${result.data.id}`);
    });
  };

  return (
    <div className="App">
      <Header title="Web" />
      <Nav topics={topics} />
      <Routes>
        <Route
          path="/"
          element={<Article title="Hello" body="Welcome,WEB!" />}
        ></Route>
        <Route
          path="/create"
          element={<Create onSave={saveHandler}></Create>}
        ></Route>
        <Route path="/read/:id" element={<Read topics={topics} />}></Route>
      </Routes>
      <Control></Control>
    </div>
  );
}

export default App;
