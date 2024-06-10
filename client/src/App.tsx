import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Auth from './pages/auth';
import Dashboard from './pages/dashboard'


function App() {

  return (
  <Router> 
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/auth" element={<Auth></Auth>}></Route>

      </Routes>
      </div>
    </Router>
  )
}

export default App;
