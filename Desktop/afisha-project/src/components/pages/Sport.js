import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../redux/actions/actions";
import SportCard from "./SportCard";
import '../../styles/Sport.scss'
import EmptyItems from "../EmptyItems";

const Sport = () => {


    const {allItems} = useSelector(s => s)
    console.log(allItems)
    const dispatch = useDispatch()

    const {id:userId} = useParams()
    console.log(userId)




    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const sportItems = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(sportItems)

    if (sportItems.length === 0){
        return <EmptyItems/>
    }
    return (
        <section id='sport'>
            <div className="container">
                <div className="sport">
                    <h1 className='sport__title'>Sport</h1>
                    <div className="row">
                        {
                            sportItems.map(el => (
                                <SportCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sport;