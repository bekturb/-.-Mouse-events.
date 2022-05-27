import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../redux/actions/actions";
import ConcertCard from "./ConcertCard";
import '../../styles/Concert.scss'
import EmptyItems from "../EmptyItems";

const Concerts = () => {

    const {id:userId} = useParams()
    console.log(userId)
    const dispatch = useDispatch()

    const {allItems} = useSelector(s => s)
    console.log(allItems)



    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const ConcertItems = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(ConcertItems)

    if (ConcertItems.length === 0){
        return <EmptyItems/>
    }

    return (
        <section id='concert'>
            <div className="container">
                <div className="concert">
                    <h1 className='concert__title'>Concerts</h1>
                    <div className="row">
                        {
                            ConcertItems.map(el => (
                                <ConcertCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Concerts;