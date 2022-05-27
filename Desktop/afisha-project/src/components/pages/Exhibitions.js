import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getAllItems} from "../../redux/actions/actions";
import ExhibitionCard from "./ExhibitionCard";
import '../../styles/Exhibition.scss'
import EmptyItems from "../EmptyItems";

const Exhibitions = () => {

    const {allItems} = useSelector(s => s)

    const {id: userId} = useParams()
    console.log(userId)

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const exhibitionItem = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(exhibitionItem)

    if (exhibitionItem.length === 0){
        return <EmptyItems/>
    }

    return (

        <section id='exhibition'>
            <div className="container">
                <div className="exhibition">
                    <h1 className='exhibition__title'>Exhibition</h1>
                    <div className="row">
                        {
                            exhibitionItem.map(el => (
                                <ExhibitionCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Exhibitions;