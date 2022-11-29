import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { useImmer } from "use-immer";
import axios from "axios";

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
  const params = useParams();
  const id = Number(params.id);
  let contextUI = null;
  if (id) {
    contextUI = (
      <li>
        <Link to={`/update/${id}`}>Update</Link>
      </li>
    );
  }
  console.log("id", id);
  return (
    <ul>
      <li>
        <Link to="/create">Create</Link>
      </li>
      {contextUI}
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
const Update = ({ onSave }) => {
  const params = useParams();
  const id = Number(params.id);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("egoing");
  useEffect(() => {
    axios.get(`/topics/${id}`).then((result) => {
      console.log("result.data", result.data);
      setTitle(result.data.title);
      setBody(result.data.body);
    });
  }, [id]);
  const submitHandler = (evt) => {
    evt.preventDefault();
    const title = evt.target.title.value;
    const body = evt.target.body.value;
    onSave(title, body);
  };
  const titleHandler = (evt) => {
    console.log(evt.target.value);
    setTitle(evt.target.value);
  };
  const bodyHandler = (evt) => {
    console.log(evt.target.value);
    setBody(evt.target.value);
  };
  const authorHandler = (evt) => {
    setAuthor(evt.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={titleHandler}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={bodyHandler}
        ></textarea>
      </p>
      <p>
        <input
          type="text"
          name="author"
          value={author}
          onChange={authorHandler}
        />
      </p>
      <p>
        <input type="submit" value="Create" />
      </p>
    </form>
  );
};
const Read = () => {
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
  useEffect(() => {
    fetchTopics();
  }, []);
  console.log("topics", topics);
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
        <Route
          path="/update/:id"
          element={<Update onSave={saveHandler}></Update>}
        ></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Control></Control>} />
        <Route path="/read/:id" element={<Control></Control>} />
        <Route path="/create" element={<Control></Control>} />
        <Route path="/update/:id" element={<Control></Control>} />
      </Routes>
      <Control></Control>
    </div>
  );
}

export default App;
