import "./App.css";
import { useState } from "react";

const Header = ({ title, onChangeMode }) => {
  return (
    <header>
      <h1>
        <a
          href="index.html"
          onClick={(evt) => {
            evt.preventDefault();
            onChangeMode("WELCOME");
          }}
        >
          {title}
        </a>
      </h1>
    </header>
  );
};
const Nav = ({ topics, onChangeMode }) => {
  const liTag = topics.map((t) => (
    <li key={t.id}>
      <a
        href={`/read/${t.id}`}
        onClick={(evt) => {
          evt.preventDefault();
          onChangeMode("READ", t.id);
        }}
      >
        {t.title}
      </a>
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
  const createClickHandler = (evt) => {
    evt.preventDefault();
    onChangeMode("CREATE");
  };
  const updateClickHandler = (evt) => {
    evt.preventDefault();
    onChangeMode("UPDATE");
  };
  return (
    <ul>
      <li>
        <a href="/create" onClick={createClickHandler}>
          Create
        </a>
      </li>
      <li>
        <a href="/update" onClick={updateClickHandler}>
          Update
        </a>
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
function App() {
  const [mode, setMode] = useState("");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ]);
  const changeModeHandler = (_mode2, id) => {
    setMode(_mode2);
    if (id !== undefined) {
      setId(id);
    }
  };
  const saveHandler = (title, body) => {
    const newTopics = [...topics];
    //title,body를 이용해서 topics의 값 추가
    newTopics.push({ id: nextId, title, body });
    setTopics(newTopics);
    setMode("READ");
    setId(nextId);
    setNextId((oldNextId) => oldNextId + 1);
  };
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Hello" body="Welcome,WEB!" />;
  } else if (mode === "READ") {
    const selected = topics.find((t) => t.id === id);
    content = <Article title={selected.title} body={selected.body} />;
  } else if (mode === "CREATE") {
    content = <Create onSave={saveHandler} />;
  } else if (mode === "UPDATE") {
    content = <div>Update</div>;
  }

  return (
    <div className="App">
      <Header title="Web" onChangeMode={changeModeHandler} />
      <Nav topics={topics} />
      <Control onChangeMode={changeModeHandler}></Control>
      {content}
    </div>
  );
}

export default App;
