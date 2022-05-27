import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {getSingleItem} from "../../redux/actions/actions";
import {Link} from "react-router-dom";

const KidsCard = ({el}) => {
    const dispatch = useDispatch()


    return (
        <div className='col-4'>
            <div className='kids__items'>
                <Link  to={`/single/${el.id}`} onClick={() => dispatch(getSingleItem(el.id))}>
                <img className='kids__items__img' src={el.img} alt=""/>
                    <span className='kids__items__img--price'>{el.price} сом</span>
                </Link>
                <h2 className='kids__items__name'>{el.name}</h2>
                <hr className='kids__items__line'/>
                <div className='kids__items--times'>
                    <span><FontAwesomeIcon className='kids__items--times__calendar' icon={faCalendarDays} /></span>
                    <p className='kids__items--times--time'>{el.time}</p>
                </div>
                <div className='kids__items--address'>
                    <span><FontAwesomeIcon className='kids__items--address--location' icon={faLocationDot} /></span>
                    <p className='kids__items--address--position'>{el.address}</p>
                </div>
            </div>
        </div>
    );
};

export default KidsCard;