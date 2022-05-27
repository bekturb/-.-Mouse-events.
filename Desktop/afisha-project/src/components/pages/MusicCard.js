import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {getSingleItem} from "../../redux/actions/actions";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const MusicCard = ({el}) => {

    const dispatch = useDispatch()

    return (
        <div className='col-4'>
            <div className='music__items'>
                <Link  to={`/single/${el.id}`} onClick={() => dispatch(getSingleItem(el.id))}>
                <img className='music__items__img' src={el.img} alt=""/>
                <span className='music__items__img--price'>{el.price} сом</span>
            </Link>
                <h2 className='music__items__name'>{el.name}</h2>
                <hr className='music__items__line'/>
                <div className='music__items--times'>
                    <span><FontAwesomeIcon className='music__items--times__calendar' icon={faCalendarDays} /></span>
                    <p className='music__items--times--time'>{el.time}</p>
                </div>
                <div className='music__items--address'>
                    <span><FontAwesomeIcon className='music__items--address--location' icon={faLocationDot} /></span>
                    <p className='music__items--address--position'>{el.address}</p>
                </div>
            </div>
        </div>
    )
};

export default MusicCard;