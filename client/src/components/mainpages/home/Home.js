import React from "react";
import "./home.css"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="video">
                <video width="1500" height="1120" controls loop autoPlay>
                    <source src="https://res.cloudinary.com/sownthari/video/upload/v1665735158/book/Funny_Cartoon_Intro_Trim1_yigqnh.mp4" type="video/mp4" autoplay />
                </video>
            </div>
            
            <section class="home">
                <div class="main">
                    <h1 class="headings">Login to explore more </h1>
                    <h2>#Readify</h2>
                    <Link to="/login" className="jump">Jump In</Link>
                </div>
            </section>
        </div>
    )
}
export default Home;