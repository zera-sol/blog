import './App.css';
import {Route, Routes} from "react-router-dom"
import Layout from './components/Layout';
import Posts from './pages/posts';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element = {<Posts />}> </Route>
            <Route path='/login' element = {<LoginPage />}></Route>
            <Route path='/register' element = {<RegisterPage />}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
