import { useContext } from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import style from './index.module.css'
const Profile=()=>{
    const {username} = useContext (AuthContext);
    return(
        <div className={style.div}>
             <h3 className={style}>Your email: <span className={style}>{username}</span></h3>

             <Link to='/job/myjobs' ><button className={style.button}>Your job offer</button></Link>
             <br/>
             <Link to='/job/create' ><button className={style.button}>Create new job</button></Link>
              
      

        </div>
       
    )
}
export default Profile