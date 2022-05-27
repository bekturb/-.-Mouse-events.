import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import '../../styles/SinglePage.scss'
import SingleDetailPageCart from "./SingleDetailPageCart";
import EmptyItems from "../EmptyItems";

const SingleDetailPage = () => {

    const {singleItem} = useSelector(s => s)
    console.log(singleItem)


    if (singleItem.length === 0){
        return <EmptyItems/>
    }
    return (
        <section id='single'>
            <div className="container">
                {
                    singleItem.map(el => (
                        <SingleDetailPageCart key={el.id} el={el}/>

                    ))
                }
            </div>
        </section>
    );
};

export default SingleDetailPage;