import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getSingleItem} from "../../redux/actions/actions";


const AllCard = ({el}) => {

    const dispatch = useDispatch()

    return (
        <div className='col-4'>
            <div className='all__items'>
                <Link  to={`/single/${el.id}`} onClick={() => dispatch(getSingleItem(el.id))}>
                    <img className='all__items__img' src={el.img} alt=""/>
                    <span className={el.price === '0' ? '' : 'all__items__img--price'}>{el.price === '0' ? '' : `${el.price} сом`}</span>
                </Link>
                <h2 className='all__items__name'>{el.name}</h2>
                <hr className='all__items__line'/>
                <div className='all__items--times'>
                    <span><FontAwesomeIcon className='all__items--times__calendar' icon={faCalendarDays} /></span>
                    <p className='all__items--times--time'>{el.time}</p>
                </div>
                <div className='all__items--address'>
                    <span><FontAwesomeIcon className='all__items--address--location' icon={faLocationDot} /></span>
                    <p className='all__items--address--position'>{el.address}</p>
                </div>
            </div>
        </div>
    );
};

export default AllCard;