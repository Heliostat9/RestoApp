import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import './menu-list.scss';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addedToCart, totalValue} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(() => this.props.menuError());

    }

    render() {
        const {menuItems, loading, error, addedToCart, totalValue} = this.props;

        const content = error 
                            ? <Error /> 
                            : loading 
                                ? <Spinner /> 
                                : <View items={menuItems} addedToCart={addedToCart} totalValue={totalValue}/>

        return (
            <ul className="menu__list">
                {content}
            </ul>
        )
    }
};

const View = ({items, addedToCart, totalValue}) => {
    return (
        <>
            {
                items.map(item => {
                    return <MenuListItem onAddToCart={() => {
                        addedToCart(item.id);
                        totalValue();
                    }} key={item.id} menuItem={item} />
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps =  {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    totalValue
};

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));