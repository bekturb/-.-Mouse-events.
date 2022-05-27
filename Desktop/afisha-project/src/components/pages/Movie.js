import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getAllItems} from "../../redux/actions/actions";
import MovieCard from "./MovieCard";
import '../../styles/Movie.scss'
import EmptyItems from "../EmptyItems";

const Movie = () => {

    const {allItems} = useSelector(s => s)
    const dispatch = useDispatch()

    const {id: userId} = useParams()
    console.log(userId)


    useEffect(() => {
        dispatch(getAllItems())
    }, [dispatch])

    const movieItems = allItems.filter(el => {
        return el.category === +userId
    })
    console.log(movieItems)

    if (movieItems.length === 0){
        return <EmptyItems/>
    }
    return (
        <section id='movie'>
            <div className="container">
                <div className="movie">
                    <h1 className='movie__title'>Movie</h1>
                    <div className="row">
                        {
                            movieItems.map(el => (
                                <MovieCard key={el.id} el={el}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Movie;