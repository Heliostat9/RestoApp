import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deletedToCart,totalValue} from '../../actions';
import WithRestoService from '../hoc';

const CartTable = ({items, total, deletedToCart, totalValue, RestoService}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, qtty} = item;

                        return (<div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{price}$</div>
                            <div className="cart__item-price">Count: {qtty}</div>
                            <div onClick={() => {
                                deletedToCart(id);
                                totalValue();
                                }} className="cart__close">&times;</div>
                        </div>)
                    })
                }
            </div>
            <div className="cart__title">Итоговая стоимость: {total} $</div>
            
        </>
    );
};


const mapStateToProps = ({items,total}) => {
    return {
        items,
        total
    }
}

const mapDispatchToProps =  {
    deletedToCart,
    totalValue
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));