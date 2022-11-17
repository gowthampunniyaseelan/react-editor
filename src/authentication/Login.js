import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await fetch('https://gowtham-editorss.onrender.com/api/login',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
            email,
            password
      })
    })
    const data = await response.json();
    if(data.user){
      alert('Login successful')
      localStorage.setItem("token",data.user)
      window.location.href = "/page"
    }else{
      alert('Please check your email and password')
    }
    console.log(data)
  }
  return (
    <div>
     <form
     style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100vh'

     }} 
     onSubmit={handleSubmit}>
        <input  
        style={{
          width: "100%",
          height: "40px",
          border: "1px solid #000",
          borderRadius: "5px",
          padding: "0 10px",
          marginBottom: "10px"

        }}
        type="text" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Enter your email' 
        />
        <br />
        <input
         style={{
          width: "100%",
          height: "40px",
          border: "1px solid #000",
          borderRadius: "5px",
          padding: "0 10px",
          marginBottom: "10px" 
        }} 
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder="Enter your password" 
        />
        <br />
        <input
        className='button1'
        style={{
          width: "100%",
          height: "40px",
          border: "1px solid #000",
          borderRadius: "5px",
          padding: "0 10px",
          marginBottom: "10px",
        }}
         type="submit" 
         value="Login" 
         />

      <br />
      <br />
      <Link to="/signup">Don't have an account? Signup</Link>
<br />
<Link to="/">Home</Link>

     </form>
    </div>
  )
}

export default Login