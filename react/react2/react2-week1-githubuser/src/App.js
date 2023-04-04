import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import { UserContextProvider } from "./components/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Header />
        <SearchBox />
      </div>
    </UserContextProvider>
  );
}

export default App;
