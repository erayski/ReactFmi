import React from 'react'
import Job from '../Job'
import * as jobsService from '../../utils/jobsService'
import style from './Jobs.index.css'
class Jobs extends React.Component{
    constructor(props){
        super(props)
        this.state={
            jobs:[]
        }
    }
       
    componentDidMount(){
        jobsService.getJobs()
        .then(res=>this.setState({jobs:res}))
    }
    
    render(){
        return(
            <div className={style.jobslist}>
                <h1 className={style.h1}>All Jobs</h1>
            <ul>
                   {this.state.jobs.map(x=>
                    <Job 
                    key={x._id}  
                    id={x._id}
                    title={x.title}                   
                    money={x.money}
                    category={x.category}  
                    creator={x.creator} 
                    detail={true}                

                  />)}
                   
                </ul>
         </div>
        )
    }
}
export default Jobs