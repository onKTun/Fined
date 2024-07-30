<<<<<<< HEAD
import Login from "src/app/(account)/login/page";
=======
import Login from "./app/account/Login";
import Signup from "./app/account/Signup";
>>>>>>> ddf73b0 (finished signup design. just need to tie the requirmenets to the input fields (kevin pelase do that) also added two folders in account that need to be sorted when u make the files for each page. so those two will go in the same folder as the signup page)
import "./App.css";
function App() {
  return (
    <>
      <div className="content">
        <Signup></Signup>
      </div>
    </>
  );
}
export default App;
