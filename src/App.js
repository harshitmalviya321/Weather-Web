import React,{useState}from 'react'
import LoginComponent from './components/LoginComponent';

function App() {
    const adminUser ={
        email:"harshit@ail.com",
        password:"harshit123"
    }
    const [user, setuser] = useState({name:"",email:""})
    const [error, seterror] = useState("");
     
    const Login = details =>{
        console.log(details);
    }

    const Logout=() =>{
        console.log("Logout");
    }
    return (
        <div className="App">
            {(user.email != "") ? (
            <div className="welcome">
                <h2>Welcome{user.name}</h2>
                <button>Logout</button>
        </div> 
            ) : ( 
                <LoginComponent Login={Login} error={error} />
            )}
            </div>
    )}
export default App
