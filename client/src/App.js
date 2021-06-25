import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import SignIn from './components/login/SignIn';
import SignOut from './components/logout/SignOut';
import Navbar from './components/nav/Navbar';
import SignUp from './components/register/SignUp';
import { useSelector } from 'react-redux'
import AddData from './components/addData/AddData';
import Single from './components/singlePage/Single';
import UserPost from './components/userPOST.js/UserPost';
function App() {
  const { isAuthenticate } = useSelector(state => state.userData)
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/write'>
          {
            isAuthenticate?(<AddData/>):(<SignUp />)
          } 
        </Route>
        <Route exact path='/single/:id'>
          {
            isAuthenticate?(<Single/>):''
          } 
        </Route>
        <Route exact path='/userpost/:name'>
          {
            isAuthenticate?(<UserPost/>):(<SignUp />)
          } 
        </Route>
        <Route exact path='/signin'>
          {
            isAuthenticate ? (<Home />) : (<SignIn />)
          }

        </Route>
        <Route exact path='/signup'>
          {
            isAuthenticate ? (<Home />) : (<SignUp />)
          }

        </Route>
        <Route exact path='/signout'>
          {
            isAuthenticate?(<SignOut />):''
          } 
        </Route>
      </Switch>
    </>
  );
}

export default App;
