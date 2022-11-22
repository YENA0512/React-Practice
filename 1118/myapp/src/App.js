import "./App.css";
import { useState } from "react";
// es6 적용
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
        href={"/read/" + t.id}
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

function App() {
  const [mode, setMode] = useState("");
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];

  const changeModeHandler = (_mode2, id) => {
    setMode(_mode2);
    if (id !== undefined) {
      setId(id);
    }
  };
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Hello" body="Welcome,WEB!" />;
  } else if (mode === "READ") {
    // for (let i = 0; i < topics.length; i++) {
    //   if (topics[i].id === id) {
    //     selected = topics[i];
    //     break;
    //   }
    // }
    const selected = topics.find((t) => t.id === id);
    content = <Article title={selected.title} body={selected.body} />;
  }

  return (
    <div className="App">
      <Header title="Web" onChangeMode={changeModeHandler} />
      <Nav topics={topics} onChangeMode={changeModeHandler} />
      {content}
      {/* <Article title="어서오세요!" body="웹의 세계로 초대합니다." /> */}
    </div>
  );
}

export default App;
