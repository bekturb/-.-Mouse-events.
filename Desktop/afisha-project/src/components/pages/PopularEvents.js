import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllItems} from "../../redux/actions/actions";
import PopularEventCard from "./PopularEventCard";
import '../../styles/Popular.scss'
import EmptyItems from "../EmptyItems";

const PopularEvents = () => {

    const {id:userId} = useParams()
    console.log(userId)
    const dispatch = useDispatch()

    const {allItems} = useSelector(s => s)



    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const popularItems = allItems.filter(el => {
        return el.category === +userId
    })

    if (popularItems.length === 0){
        return <EmptyItems/>
    }
    return (
        <section id='popular'>
            <div className="container">
                <div className="popular">
                    <h1 className='popular__title'>Popular</h1>
                    <div className="row">
                        {
                            popularItems.map(el => (
                                <PopularEventCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularEvents;