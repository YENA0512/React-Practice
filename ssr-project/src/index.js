const express = require("express");
const ReactDomServer = require("react-dom/server");
const React = require("react");
const App = require("./client/App").default;

const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const html = ReactDomServer.renderToString(<App />);
  const template = `
    <html>
      <head>
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  res.send(template);
});
app.listen(4000, () => {
  console.log("4000 port listening...");
});
