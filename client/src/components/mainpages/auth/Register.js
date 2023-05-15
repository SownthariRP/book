import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [user, setUser] = useState({
        name:'', email:'', password:'',address:'',phno:''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/product";
        } catch (err) {
            alert(err.response.data.msg) 
        }
    }
    return (
        <div className="container">
            <div class="text">Register</div>
            <form onSubmit={registerSubmit}>
                <div class="data">
                    <input type="text" name="name" required
                    placeholder="Name" value={user.name} onChange={onChangeInput} />
                </div>

                <div class="data">
                    <input type="email" name="email" required
                    placeholder="Email" value={user.email} onChange={onChangeInput} />
                </div>

                <div class="data">
                    <input type="password" name="password" required
                    placeholder="Password" value={user.password} onChange={onChangeInput} />
                </div>
                <div class="data">
                    <input type="text" name="address" required
                    placeholder="Address" value={user.address} onChange={onChangeInput} />
                </div>
                <div class="data">
                    <input type="text" name="phno" required
                    placeholder="Phone Number" value={user.phno} onChange={onChangeInput} />
                </div>

                <div className="btn1">
                    <button type="submit">Register</button>
                </div>

                <div class="signup-link">
                    Already a member? <Link to={"/login"}>Sign In </Link>
                </div>
                
            </form>
        </div>
    )
}

export default Register;