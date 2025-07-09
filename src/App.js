import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Temp4 from './component/temp4'


const App = () => {
  return (    
  
  <Router>
        <Routes>
        <Route path="/" element={<Temp4 />} />

        </Routes>    
  </Router>

  );
};

export default App;
