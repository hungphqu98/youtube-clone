
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Recommendation from './components/Recommendation';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="main-page">
            <Sidebar />
            <SearchPage />
          </div>
          </Route>
          <Route path="/">
          <div className="main-page">
            <Sidebar />
            <Recommendation />
          </div>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
