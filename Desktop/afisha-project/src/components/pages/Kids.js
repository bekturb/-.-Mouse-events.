import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../redux/actions/actions";
import KidsCard from "./KidsCard";
import '../../styles/Kids.scss'
import EmptyItems from "../EmptyItems";

const Kids = () => {

    const dispatch = useDispatch()
    const {allItems} = useSelector(s => s)
    console.log(allItems)

    const {id: userId} = useParams()
    console.log(userId)


    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const kidsItems = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(kidsItems)

    if (kidsItems.length === 0){
        return <EmptyItems/>
    }
    return (
        <section id='kids'>
            <div className="container">
                <div className="kids">
                    <h1 className='kids__title'>Kids</h1>
                    <div className="row">
                        {
                            kidsItems.map(el => (
                                <KidsCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Kids;