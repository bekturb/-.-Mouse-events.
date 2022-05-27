import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllItems} from "../../redux/actions/actions";
import '../../styles/All.scss'
import AllCard from "./AllCard";
import EmptyItems from "../EmptyItems";

const All = () => {

    const dispatch = useDispatch()
    const {allItems} = useSelector(s => s)
    console.log(allItems)


    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    if (allItems.length === 0){
        return <EmptyItems/>
    }

    return (
        <section id='all'>
            <div className="container">
                <div className="all">
                    <h1 className='all__title'>All</h1>
                    <div className="row">
                        {
                            allItems.map(el => (
                              <AllCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default All;