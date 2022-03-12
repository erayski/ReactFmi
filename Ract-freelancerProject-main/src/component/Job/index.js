import { Link } from 'react-router-dom'
import style from './Job.module.css'
const Job = ({ id, title, category, money, creator, description, toData, detail,isCreator}) => {   
   
    return (

        <li className={style}>

            <div className={style.post}>
                <div className={style.div}>
                    <h3 className='h3'> {title}</h3>
                </div>
                {description ? <p>Description:{description}</p> : ''}
                <p>Category: {category}</p>
                <p>Payment: {money} $</p>
                {toData ? <p>To :{toData}</p> : ''}
                
               
               
                {isCreator?     
                  <div>   
                <Link to={`/job/edit/${id}`}><button className={style.button}>Edit</button></Link>
                <Link to={`/job/delete/${id}`}><button className={style.button}>Delete</button></Link>
                </div>
                : <p>Send email to: {creator} </p>
                }
                {detail?
                 <Link to={`/job/detail/${id}`}><button className={style.button} >More Info</button></Link>:''
                } 
            </div>
        </li>

    )
}
export default Job