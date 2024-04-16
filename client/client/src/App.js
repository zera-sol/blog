import './App.css';
import {Route, Routes} from "react-router-dom"
import Post from './components/Post';
import Header from './components/header';
import Layout from './components/Layout';
import Posts from './components/posts';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element = {<Posts />}> </Route>
            <Route path='/login' element = {<div>Login Page</div>}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
