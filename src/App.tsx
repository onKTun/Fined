import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./index.css";
import LessonPreview from "./pages/lessonPreview/LessonPreview";
function App() {
  return (
    <>
      <Header name={"Adam Darzidan"} username={"adamhdarzidan"} xp={2400} />
      <div className="content">
        <Sidebar />
        <div className="soleContent">
          <LessonPreview />
        </div>
      </div>
    </>
  );
}
export default App;
