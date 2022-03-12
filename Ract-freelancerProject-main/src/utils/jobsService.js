export const getJobs=()=>{
    let url=`http://localhost:9999/job`    
    return fetch(url)
   .then(res=>res.json())
   .catch(error=>console.log(error))

}
export const  getOne = (id) => {
    let url = `http://localhost:9999/job/${id}`
   
    return fetch(url)
        .then(res => res.json())
        
}
export const getByCreator = (user) => {
    let url = `http://localhost:9999/job/myjobs/${user}`


    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const create=(title,description,money,catrgory,data,creator)=>{
    let job={
        title: title,
        description: description,
        money: money,
        category: catrgory,
        toData:data,
        creator:creator
    }
 
    return fetch('http://localhost:9999/job/',{
        method: 'POST',
        headers:{
            'Content-Type':   "application/json" 
        },
        body: JSON.stringify(job)
    })
   

}
export const editJob=(id,title,description,money,catrgory,data)=>{
    let job={
        title: title,
        description: description,
        money: money,
        category: catrgory,
        toData:data,
        
    }
  
    return fetch(`http://localhost:9999/job/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type':   "application/json" 
        },
        body: JSON.stringify(job)
    })
    .catch((error) => {
        // Handle the error
        console.log(error);
      });

}
export const deleteJob=(id)=>{
   
    fetch(`https://localhost:9999/job/${id}`, {
      method: 'DELETE',
      headers:{
          'Content-Type':   "application/json" 
      },
      body: JSON.stringify()
  }
    )
    .then(res=>res.json())
}
