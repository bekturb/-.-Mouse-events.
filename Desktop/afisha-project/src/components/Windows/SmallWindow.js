import React from 'react';
import '../../styles/SmallWindow.scss'
import pic from '../../assets/Rectangle 87.svg'
import {useDispatch, useSelector} from "react-redux";
import {addToBasket} from "../../redux/actions/actions";

const SmallWindow = ({window,id}) => {

    const {singleItem} = useSelector(s => s)
    console.log(singleItem)
    const dispatch = useDispatch()


    return (
        <div className={window ? 'smallWindow active' :  'smallWindow' }>
            <img className='smallWindow__content' src={pic} alt=""/>
            <div className='smallWindow__info'>
                <table style={{width: '100%'}} className='smallWindow__info__table'>
                   <tr className='smallWindow__info__table--row'>
                       <th className='smallWindow__info__table--row--item'>Сектор</th>
                       <th className='smallWindow__info__table--row--item'>Ряд</th>
                       <th className='smallWindow__info__table--row--item'>Место</th>
                   </tr>
                    <tr>
                       <td className='smallWindow__info__table--row--item'>Партер</td>
                       <td className='smallWindow__info__table--row--item'>4</td>
                       <td className='smallWindow__info__table--row--item'>5</td>
                   </tr>
                </table>
                <p className='smallWindow__info__price'>Средний <span className='smallWindow__info__price--number'>1 500 сом</span></p>

                <button onClick={() => dispatch(addToBasket(id))} className='smallWindow__info__btn'>ДОБАВИТЬ КОРЗИНУ</button>
            </div>
        </div>
    );
};

export default SmallWindow;