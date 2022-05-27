import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../redux/actions/actions";
import VariousCard from "./VariousCard";
import '../../styles/Various.scss'
import EmptyItems from "../EmptyItems";

const Various = () => {

    const dispatch = useDispatch()


    const {id: userId} = useParams()
    const {allItems} = useSelector(s => s)



    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const variousItems = allItems.filter(el => {
        return el.category === +userId
    })

    if (variousItems.length === 0){
        return <EmptyItems/>
    }
    return (
        <section id='various'>
            <div className="container">
                <div className="various">
                    <h1 className='various__title'>Various</h1>
                    <div className="row">
                        {
                            variousItems.map(el => (
                                <VariousCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Various;