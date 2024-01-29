import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { addToBasket, removeFromBasket } from '../store/basketSlice';
import { useDispatch } from '../store';

export const Item = (props) => {

    const {id: itemId} = useParams();
    const dispatch = useDispatch();
    console.log('itemId', itemId);
    const item = useSelector(((state) => state.items.entities.find(item => item.id === Number(itemId))));
    console.log('item', item);

    const basket = useSelector(((state) => state.basket));
    const itemQty = basket.entities.filter((itm) => itm.id === item.id).length;

    return (
            item && <>
            <div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns="4" style={{opacity: '1', transition: 'opacity 0.25s ease-in-out 0s'}}>
            <div class="woocommerce-product-gallery__wrapper">
                <div class="woocommerce-product-gallery__image" style={{position: 'relative', overflow: 'hidden'}}><a href=""><img fetchpriority="high" src={`http://localhost:3333/${item.image}`} class="wp-post-image" decoding="async"  sizes="(max-width: 600px) 100vw, 600px" width="300" height="300"/></a></div>
            </div>
            </div>
            <div class="summary entry-summary">
            <h1 class="product_title entry-title">{item.name}</h1>
            {
                item.discont_price
                ? (
                    
                    <p class="price">
                        <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol" style={{color: 'grey'}}>$</span>{item.discont_price}</bdi></span>
                        <del><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>{item.price}</bdi></span></del>
                    </p>
                )
                : (
                    <p class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>{item.price}</bdi></span>
                    </p>
                )
            }
            <div class="woocommerce-product-details__short-description">
                <p>{item.description}</p>
            </div>

                <div class="quantity buttons_added" style={{margin: '10px', display: 'inline-block'}}><label class="screen-reader-text" for="minus_qty">Minus Quantity</label><span  style={{cursor: 'pointer', margin: '10px'}} id="minus_qty" class="minus no-internal-border" onClick={() => dispatch(removeFromBasket(item.id))}>-</span>
                    <label class="screen-reader-text" for="quantity_65b6b03e6ce24">Aluminum Plant quantity</label>
                    <input value={itemQty} disabled style={{width: '30px'}}/>
                    <label class="screen-reader-text" for="plus_qty"> Plus Quantity</label><span style={{cursor: 'pointer', margin: '10px'}}  id="plus_qty" class="plus no-internal-border" onClick={() => dispatch(addToBasket(item))}>+</span> 
                </div>
                <button onClick={() => dispatch(addToBasket(item))} type="submit" name="add-to-cart" value="118" class="single_add_to_cart_button button alt">Add to cart</button>

            <div class="product_meta">
            </div>
            <div class="ast-single-product-extras">
            </div>
            </div>

            </>
)}