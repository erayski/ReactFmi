import { useState,useEffect } from "react";
import isAuth from "../../isAuth";
import style from '../Job/Job.module.css'
import Form from '../JobForm/index'
import * as jobsService from '../../utils/jobsService'

const EditJob=({match,history})=>{

       
    const id=match.params.id;
    let [job, setJob] = useState({});
    useEffect(() => {

        jobsService.getOne(id)
            .then(res => setJob(res));
    }, [match]);
       
     
    const onSaveSubmit=(e)=>{
        e.preventDefault();
        
        const {title,description,money,category,data}=e.target;

        jobsService.editJob(id,title.value, description.value, money.value, category.value,data.value)
        .then(()=>
        {
            history.push(`/`)
            return
        })
       
        

    }
    return(
        <Form
        type="Edit"
        action={onSaveSubmit}
        title={job.title}
        description={job.description}
        money={job.money}
        category={job.category}
        toData={job.toData}

         />
       
    )
    
}
export default isAuth( EditJob)
