import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {getSingleItem} from "../../redux/actions/actions";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const ExhibitionCard = ({el}) => {

    const dispatch = useDispatch()

    return (
        <div className='col-4'>
            <div className='exhibition__items'>
                <Link  to={`/single/${el.id}`} onClick={() => dispatch(getSingleItem(el.id))}>
                <img className='exhibition__items__img' src={el.img} alt=""/>
                <span className='exhibition__items__img--price'>{el.price} сом</span>
                </Link>
                <h2 className='exhibition__items__name'>{el.name}</h2>
                <hr className='exhibition__items__line'/>
                <div className='exhibition__items--times'>
                    <span><FontAwesomeIcon className='exhibition__items--times__calendar' icon={faCalendarDays} /></span>
                    <p className='exhibition__items--times--time'>{el.time}</p>
                </div>
                <div className='exhibition__items--address'>
                    <span><FontAwesomeIcon className='exhibition__items--address--location' icon={faLocationDot} /></span>
                    <p className='exhibition__items--address--position'>{el.address}</p>
                </div>
            </div>
        </div>
    );
};

export default ExhibitionCard;