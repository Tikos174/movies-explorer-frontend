import "./index";
import Main from "./components/Main/Main";
import Header from "./components/Header/header";
import SearchForm from './components/Movies/SearchForm/SearchForm'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Main /> */}
      <SearchForm/>
      <Footer/>
    </div>

  );
}

export default App;
