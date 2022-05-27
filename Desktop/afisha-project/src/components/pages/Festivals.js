import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../redux/actions/actions";
import FestivalCard from "./FestivalCard";
import '../../styles/Festival.scss'
import EmptyItems from "../EmptyItems";

const Festivals = () => {

    const dispatch = useDispatch()

    const {allItems} = useSelector(s => s)

    const {id: userId} = useParams()
    console.log(userId)


    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const festivalItem = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(festivalItem)

    if (festivalItem.length === 0){
        return <EmptyItems/>
    }

    return (
        <section id='festival'>
            <div className="container">
                <div className="festival">
                    <h1 className='festival__title'>Festivals</h1>
                    <div className="row">
                        {
                            festivalItem.map(el => (
                                <FestivalCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Festivals;