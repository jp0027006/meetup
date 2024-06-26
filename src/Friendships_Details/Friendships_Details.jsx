import React from "react";
import { useParams } from "react-router-dom";
import AppData from '../AppData.json'
import './Friendships_Details.css'
import Friendships_Details_Footer from './Friendships_Details_Footer'

const Friendships_Details = () => {

    const { id } = useParams();
    const friendships = AppData.Friendships.find(Friendships => Friendships.id === id);

    return(
        <div className="Friendships_Details">
            <p>{friendships.Friends_title}</p>
            <div className="FDF">
                <Friendships_Details_Footer />
            </div>
        </div>
    )
}

export default Friendships_Details