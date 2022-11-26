import "./App.css";
import { useState } from "react";
import { useImmer } from "use-immer";
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
  const topic = topics.find((t) => t.id === id);
  return <Article title={topic.title} body={topic.body}></Article>;
};
function App() {
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useImmer([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ]);
  const navigate = useNavigate();
  const saveHandler = (title, body) => {
    setTopics((draft) => {
      draft.push({ id: nextId, title, body });
    });
    //url으르 생성된 컨텐츠의 주소로 변경
    navigate(`/read/${nextId}`);
    setNextId((oldNextId) => oldNextId + 1);
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
