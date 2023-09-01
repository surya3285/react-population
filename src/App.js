import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
// import Counter from './component/Counter';
// import Student from './component/Student';

function App() {
  const loginStatus = useSelector((state) => state.isLogin);
  const checkStatus = () => {
    if (loginStatus) {
      return <Home />;
    } else {
      return <Login />;
    }
  };
  return <div>{checkStatus()}</div>;
}

export default App;
