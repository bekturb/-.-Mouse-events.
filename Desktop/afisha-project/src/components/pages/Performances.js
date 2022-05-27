import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../redux/actions/actions";
import PerformanceCard from "./PerformanceCard";
import '../../styles/Performance.scss'
import EmptyItems from "../EmptyItems";

const Performances = () => {

    const {allItems} = useSelector(s => s)
    console.log(allItems)

    const {id:userId} = useParams()
    console.log(userId)
    const dispatch = useDispatch()





    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const performanceItems = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(performanceItems)
    if (performanceItems.length === 0){
        return <EmptyItems/>
    }
    return (
        <section id='performance'>
            <div className="container">
                <div className="performance">
                    <h1 className='performance__title'>Performances</h1>
                    <div className="row">
                        {
                            performanceItems.map(el => (
                                <PerformanceCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Performances;