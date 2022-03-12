import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Job from '../Job';
import style from './index.module.css'

import * as jobsService from '../../utils/jobsService'
const JobDetail = ({ match,username }) => {
    const id=match.params.id;
    
    let [job, setJob] = useState({});
    useEffect(() => {

        jobsService.getOne(id)
            .then(res => setJob(res));
    }, [match]);


 
    return (
       
        <div>
             <ul>            
             <Job
                    key={job._id}  
                    id={job._id}
                    title={job.title}                   
                    money={job.money}
                    category={job.category}  
                    creator={job.creator}  
                    description={job.description}  
                    toData={job.toData}     
                    detail={false} 
                    isCreator={job.creator==username}       

                  />
               

                 </ul>

         <Link to='/' ><button className={style.button}>Back to All</button></Link>
         
        </div>


    )
}
export default JobDetail