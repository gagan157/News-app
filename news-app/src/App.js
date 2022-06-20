
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Component/Navbar';
import News from './Component/News';
import Allnews from "./Component/Allnews";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";
import Weather from "./Component/Weather";
import WeatherState from "./Component/context/weather/WeatherState";
import NewsState from "./Component/context/fetchnews/NewsState";

function App() {
  const [progress, setProgress] = useState(0);
  let apikey = process.env.REACT_APP_NEWS_API
  let completProgress = (progresss) => {
    setProgress(progresss)
  }
  return (
    <Router>
      <WeatherState>
        <NewsState>
          <div className="App w-full h-full">
            <Navbar />
            <LoadingBar
              color='#f11946'
              height={3}
              progress={progress}
            />
            <Routes>
              <Route exact path="/weather" element={<Weather setpro={completProgress} />} />
              <Route exact path="/news" element={<Allnews apikey={apikey} />} />
              <Route exact path="/" element={<News setprog={completProgress} apikey={apikey} />} />


            </Routes>
          </div>
        </NewsState>
      </WeatherState>
    </Router>
  );
}

export default App;
