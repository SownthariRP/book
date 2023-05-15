import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/product";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    return (

        <div className="container"> 
            <div class="text">User Login</div>
            <form onSubmit={loginSubmit}>

                <div class="data">
                    <input type="email" name="email" required 
                    placeholder="Email" value={user.email} onChange={onChangeInput}/>
                </div>

                <div class="data">
                    <input type="password" name="password" required
                    placeholder="Password" value={user.password} onChange={onChangeInput} />
                </div>
                <div className="btn1">
                    <button type="submit">Login</button>

                </div>
                <div class="signup-link">
                    Not a member? <Link to={"/register"}>Signup now </Link>
                </div>
            </form>
        </div>
    )
}

export default Login;