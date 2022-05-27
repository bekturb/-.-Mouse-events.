import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllItems} from "../../redux/actions/actions";
import FreeCard from "./FreeCard";
import '../../styles/Free.scss'
import EmptyItems from "../EmptyItems";
const Free = () => {

    const {id} = useParams()
    console.log(id)

    const dispatch = useDispatch()
    const {allItems} = useSelector(s => s)
    console.log(allItems)


    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const categories = allItems.filter(el => {
        return el.category === +id
    })
    console.log(categories)

    if (categories.length === 0){
        return <EmptyItems/>
    }

    return (
        <section id='free'>
            <div className="container">
                <div className="free">
                    <h1 className='free__title'>Free</h1>
                    <div className="row">
                        {
                            categories.map(el => (
                                <FreeCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Free;