import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../redux/actions/actions";
import FairCard from "./FairCard";
import '../../styles/Fair.scss'
import Loader from "../../Loader";
import EmptyItems from "../EmptyItems";

const Fairs = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)


    const {id: userId} = useParams()
    const {allItems} = useSelector(s => s)



    useEffect(() => {
        dispatch(getAllItems(),
        setLoading(true)
    )
    }, [dispatch])

    const fairItems = allItems.filter(el => {
        return el.category === +userId
    })



    if (fairItems.length === 0){
       return <EmptyItems/>
    }
    if (loading){
        return  <Loader/>
    }

    return (
        <section id='fair'>
            <div className="container">
                <div className="fair">
                    <h1 className='fair__title'>Fairs</h1>
                    <div className="row">
                        {
                            fairItems.map(el => (
                                <FairCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fairs;