import { useState,useEffect, useContext } from "react";
import isAuth from "../../isAuth";
import AuthContext from "../context/AuthContext";
import style from '../Job/Job.module.css'
import Form from "../JobForm";
import * as jobsService from '../../utils/jobsService'
const CreateJob=({history})=>{
    const {username} = useContext (AuthContext );

    
    const onCreateSubmit=(e)=>{
        e.preventDefault();        
        const {title,description,money,category,data}=e.target;
        jobsService.create(title.value, description.value, money.value, category.value,data.value,username)
        .then(()=>history.push('/'))   
        .catch((error)=>{
            this.setState({ error });
          })
             
        

    }
    return(
        <Form
        type="Create"
        action={onCreateSubmit}     
         />

    )
    
}
export default isAuth( CreateJob)
