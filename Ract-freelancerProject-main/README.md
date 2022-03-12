# This is Freelancer App
In this app you can share jobs offer

Guest can see all offerts
You can :
create offer;
see your all offerts ;
edit your jobs;
## 1.Start New Application
npx create-react-app .
work on port 3000

## 2.Start REST Server
 cd reactAPi
 npm start
 work on port: 9999

## 3.Add Header and Footer component

add function components Header and Foooter

## 4.Create file jobsServices.js - all fetch request from back-end

getJobs(), getOne(id), getByCreator(user), create(...props),editJobs({..props}), deleteJob()
## 5. Create Job func Component / view one job info by id
## 6. Create home page/ class Component Jobs / view all jobs offer using Job Component
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

## 7. Create My Jobs page / view jobs offer by creatir id with hooks


const MyJobs=()=> {
    const {username} = useContext(AuthContext);
    
    let [jobs, setJobs] = useState([]);
    useEffect(() => {

      jobsService.getByCreator(username)
            .then(res => setJobs(res))
    }, []);    
    
        return(
           
            <ul>
                <div className={style.div}>
                    <h2>{username}'s jobs </h2>
                   <h3>Total: {jobs.length}</h3>
                
                </div>
                
                   {jobs!=''?
                    jobs.map(x=>
                    <Job 
                    key={x._id}  
                    id={x._id}
                    title={x.title} 
                    description={x.description}                  
                    money={x.money}
                    category={x.category} 
                    toData={x.toData} 
                    creator={x.creator}                 
                    isCreator={true}
                  />):
                  <h1> {username} have no jobs</h1>
}
                   

                </ul>
         
        )
    }

## 8. Add firebase.js
$ npm init
$ npm install --save firebase
Config firebase for authentication - utils/firebase.js

## 9. Login and Register form
create func Component ClientForm- handler,type
crate Login and Register form with ClientForm

## 10.  Create Job and Edit Job form

create func Component JobForm- handler,type
crate Create and Edit form with ClientForm

## 11. Add Contol Component isAuth.js

hold info about islogged user 

const isAuth = (WrappedComponent) => {

    const Component = (props) => {
        const { isAuthenticated } = useContext(AuthContext);
        const history = useHistory();

        if (!isAuthenticated) {
            history.push('/login')

            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
};

## 12. Add AuthContext
Context provides way to pass data through the component tree without  passing the props manually  

const AuthContext = React.createContext({});

add Context to header

 const { isAuthenticated, username }=useContext(AuthContext)
  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }


  }, [isAuthenticated])

  return (
    <nav className={style.navigation}>
      <ul>
       
     
       
        {isAuthenticated
          ? <div>
             <li> <img alt="Freelancer logo" className={style.logo} src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg" /></li>
            <Link to="/"><LinkItem>Home</LinkItem></Link>
            <Link to="/job/myjobs"><LinkItem> My Jobs</LinkItem></Link>
            <Link to="/profile"><LinkItem>Profile</LinkItem></Link>
            <Link to="/logout"><LinkItem>Logout</LinkItem></Link>
            <Link to="/profile" className={style.welcome}><LinkItem>Welcome, {username}</LinkItem></Link>
          </div> :
          <div>
            <li> <img  alt="Freelancer logo" className={style.logo} src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg" /></li>
            <Link to="/"><LinkItem>Home</LinkItem></Link>
            <Link to="/register"><LinkItem>Register</LinkItem></Link>
            <Link to="/login"><LinkItem>Login</LinkItem></Link> 
            <Link to='/login' className={style.welcome}><LinkItem>Welcome, Guest</LinkItem></Link>
          </div>}
 
      </ul>

    </nav>
  )
}

## 13. Add Validation
add CustomErrorBoundary


