import React from 'react';
import {ShoppingCartItem} from './../components/ShoppingCartItem';
import {BasketTotal} from './../components/BasketTotal';
import { addToBasket, removeFromBasket, removeAllFromBasket, makeOrder, setBasketSend } from '../store/basketSlice';
import { useDispatch } from '../store';
import _ from 'lodash';
import { useSelector } from 'react-redux'
import { AppContext } from '../AppContext';

export const Basket = (props) => {
    const basket = useSelector(((state) => state.basket));
    const basketSend = useSelector(((state) => state.basket.sendOrder));
    const dedupeBasket =  useSelector(((state) => _.uniqBy(state.basket.entities, function (e) {
        return e.id;
      })));
    const basketPrice = useSelector(((state) => state.basket.entities.reduce((acc, item) => acc + (item.discont_price ? Number(item.discont_price) : Number(item.price)), 0)));
    const basketItemsCount = dedupeBasket.length;
    console.log('basket', basket);
    const dispatch = useDispatch();
    const {setIsModalOpen, setModalContent} = React.useContext(AppContext);

      React.useEffect(() => {
        if (basketSend) {
            setModalContent('Заказ успешно отправлен!');
            setIsModalOpen(true);
            dispatch(setBasketSend(false));
        }
      }, [basketSend]);

    return (
    <>
        {
            dedupeBasket.map((item) => {
                const itemQty = basket.entities.filter((itm) => itm.id === item.id).length;
                console.log('itemQty', itemQty);
                return <ShoppingCartItem 
                    basketItem={item}
                    removeAllFromBasket={() => dispatch(removeAllFromBasket(item.id))}
                    removeFromBasket={() => dispatch(removeFromBasket(item.id))}
                    addToBasket={() => dispatch(addToBasket(item))}
                    itemQty={itemQty}
                />
            })
        }
        {
            basketItemsCount && <BasketTotal basketPrice={basketPrice} makeOrder={() => dispatch(makeOrder(basket.enteties))} basketSend={basketSend}/>
        }

    </>
    )
}