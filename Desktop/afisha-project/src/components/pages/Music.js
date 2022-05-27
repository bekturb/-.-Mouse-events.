import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../redux/actions/actions";
import MusicCard from "./MusicCard";
import '../../styles/Music.scss'
import EmptyItems from "../EmptyItems";

const Music = () => {


    const dispatch = useDispatch()


    const {id: userId} = useParams()
    const {allItems} = useSelector(s => s)
    console.log(allItems)



    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const musicItems = allItems.filter(el => {
        return el.category === +userId
    })
    if (musicItems.length === 0){
        return <EmptyItems/>
    }
    return (
        <section id='music'>
            <div className="container">
                <div className="music">
                    <h1 className='music__title'>Music</h1>
                    <div className="row">
                        {
                            musicItems.map(el => (
                                <MusicCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Music;