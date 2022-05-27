import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {getSingleItem} from "../../redux/actions/actions";
import {Link} from "react-router-dom";

const VariousCard = ({el}) => {
    const dispatch = useDispatch()

    return (
        <div className='col-4'>
            <div className='various__items'>
                <Link  to={`/single/${el.id}`} onClick={() => dispatch(getSingleItem(el.id))}>
                <img className='various__items__img' src={el.img} alt=""/>
                <span className='various__items__img--price'>{el.price} сом</span>
                </Link>
                    <h2 className='various__items__name'>{el.name}</h2>
                <hr className='various__items__line'/>
                <div className='various__items--times'>
                    <span><FontAwesomeIcon className='various__items--times__calendar' icon={faCalendarDays} /></span>
                    <p className='various__items--times--time'>{el.time}</p>
                </div>
                <div className='various__items--address'>
                    <span><FontAwesomeIcon className='various__items--address--location' icon={faLocationDot} /></span>
                    <p className='various__items--address--position'>{el.address}</p>
                </div>
            </div>
        </div>
    );
};

export default VariousCard;