import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import ContactPage from "./redux/reducers/ContactPageReducer";
import AboutPAge from "./pages/aboutpage/AboutPAge";
import UserPage from "./pages/UserPAge/UserPage";

function App() {
  return (
    <div className="App">
      {/*<MainPage/>*/}
        {/*<ContactPage/>*/}
        {/*<AboutPAge/>*/}
        <UserPage/>
    </div>
  );
}

export default App;
