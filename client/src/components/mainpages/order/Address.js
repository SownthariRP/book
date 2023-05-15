import React, {useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";

const Address = () => {
    const state = useContext(GlobalState)
    const address = state.userAPI.address
    const phno = state.userAPI.phno
    const name = state.userAPI.name
    

    
    return (
        <div className="container">
            <div class="text">Address</div>
            <form >
                <div class="data">
                    <input type="text" name="address" required
                    placeholder="Address" />
                </div> 

                <div class="data">
                    <input type="text" name="phno" required
                    placeholder="Phone number"  />
                </div>


                <div className="btn1">
                    <Link to="/order"><button type="submit">Order Now</button></Link>
                </div>

                
            </form>
        </div>
    )
}

export default Address; 