import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import {Redirect, Route, Switch} from 'react-router'
import Jobs from './component/Jobs';

import style from './App.css'
import JobDetail from './component/JobDetail';
import CreateJob from './component/CreateJob';
import Login from './component/LoginForm';
import { auth } from './utils/firebase';
import Register from './component/RegisterForm';
import { useEffect, useState } from 'react';
import Profile from './component/Profile';
import MyJobs from './component/MyJobs';
import EditJob from './component/EditJob';

import AuthContext from './component/context/AuthContext';
import isAuth from './isAuth';

import CustomErrorBoundary from './component/CustomErrorBoundry';
import * as jobsService from '../src/utils/jobsService'


function App() {

  const[user,setUser]=useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  };
  
  


  return (
    <div className={style.App}>
     <AuthContext.Provider value={authInfo}>
       <Header />
      <div className={style.Container}>

    <CustomErrorBoundary>
      <Switch>
        <Route path="/" exact component={Jobs}/>
      <Route path="/job/detail/:id" exact component={JobDetail}/>

      <Route path="/job/edit/:id" exact component={isAuth(EditJob)}/>

      <Route path="/job/create" exact component={isAuth(CreateJob)}/>

      <Route path="/login" exact component={Login}/>
      <Route path="/register"  component={Register}/>

      <Route path="/profile" exact component={isAuth(Profile)}/>
      <Route path="/job/myjobs/" exact component={isAuth(MyJobs)}/>


      <Route path="/job/delete/:id" render={props=>{
        jobsService.deleteJob(props);
        return<Redirect to='/'/>

      }}/>
          
      <Route path="/logout" render={props=>{
        auth.signOut();
        return<Redirect to='/'/>

      }}/>


      </Switch>  
      </CustomErrorBoundary>
      </div>      
      <Footer/>
    </AuthContext.Provider>
    </div>

  );
}

export default App;
