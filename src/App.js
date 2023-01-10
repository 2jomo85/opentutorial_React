import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";

function App() {
  return (
    <div className="App">
      <Subject title="WEB" sub="world wide web!"></Subject>
      <TOC></TOC>
      <Content title="HTML" sub="HTML is HyperText Markup Language."></Content>
    </div>
  );
}

export default App;
