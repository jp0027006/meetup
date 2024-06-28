import React from "react";
import { Link } from 'react-router-dom';
import f_artical from "../images/blog/first_article.webp";
import s_artical from "../images/blog/second_article.webp";
import t_artical from "../images/blog/third_article.webp";
import "./Friendships.css";

const Friendships_Module = ({details}) => {
    if (!details) 
    {
        return null;
    }

    
    return(
        <Link to={`/Friendships/${details.id}`}>
            <div className="Friendships_Module">
                <a className="frienship_sec">
                    <img 
                        className="blog_image" 
                        src={`../images/blog/${details.Friends_image}`} 
                        alt={details.Friends_title} 
                        height="100%" 
                        width="100%" 
                    />
                    <h3 className="mt-3">{details.Friends_title}</h3>
                    <span className="des">{details.Friends_info}</span>
                    <p className="read">Read more</p>
                </a>
            </div>
        </Link>
    );
};

export default Friendships_Module
