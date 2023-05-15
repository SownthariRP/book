import React, {useState, useEffect} from "react";
import axios from 'axios';

const UserAPI = (token) =>{
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([])
    const [name,setName] = useState(true)
    const [address,setAddress] = useState()
    const [phno,setPhno] = useState()
    
 
    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await fetch('/user/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                    
                    setName(res.data.name)
                    setAddress(res.data.address)
                    setPhno(res.data.phno)
                    setCart(res.data.cart)
    
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
        }
    },[token])

    const addCart = async (product) =>{
        if(!isLogged) return alert("Please login to continue buying")

        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: 1}])

            await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity:1}]},{
                headers: {Authorization: token}
            })
        }else{
            alert("This product has been added to cart")
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        cart: [cart, setCart],
        addCart: addCart,
        name: [name,setName],
        address: [address,setAddress],
        phno: [phno, setPhno]
    } 
        
}

export default UserAPI;