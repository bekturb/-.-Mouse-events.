import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {getSingleItem} from "../../redux/actions/actions";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const FreeCard = ({el}) => {


    const dispatch = useDispatch()

    return (
        <div className='col-4'>
            <div className='free__items'>
                <Link  to={`/single/${el.id}`} onClick={() => dispatch(getSingleItem(el.id))}>
                <img className='free__items__img' src={el.img} alt=""/>
                </Link>
                <h2 className='free__items__name'>{el.name}</h2>
                <hr className='free__items__line'/>
                <div className='free__items--times'>
                    <span><FontAwesomeIcon className='free__items--times__calendar' icon={faCalendarDays} /></span>
                    <p className='free__items--times--time'>{el.time}</p>
                </div>
                <div className='free__items--address'>
                    <span><FontAwesomeIcon className='free__items--address--location' icon={faLocationDot} /></span>
                    <p className='free__items--address--position'>{el.address}</p>
                </div>
            </div>
        </div>
    );
};

export default FreeCard;