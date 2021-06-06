import React, {useState}from 'react'

function LoginComponent({Login, error}) {
    const [details, setdetails] = useState({name:"", email:"", password:""})

    const submitHandler = e =>{
        e.preventDefault();

        Login(details)
    }
    return (
        <form onSubmit={submitHandler}>
        <div className="container" style={{textAlign:"center",fontSize:50 , fontWeight:20, justifyItems:"inherit"}}>
             <h2>Login</h2>
             <div className="from-group">
                 <label htmlFor="name">Name:</label>
                 <input style={{fontSize:20}} type="text" name="name" id="name"/>
             </div>
             <div className="from-group">
                 <label htmlFor="name">Email:</label>
                 <input style={{fontSize:20}} type="email" name="email" id="email"/>
             </div>
             <div className="from-group">
                 <label htmlFor="password">Password:</label>
                 <input style={{fontSize:20}} type="password" name="password" id="password"/>
             </div>
             <input style={{fontSize:20}}  type="submit" value="LOGIN"  ></input>
        </div>
    </form>
    )
}

export default LoginComponent
