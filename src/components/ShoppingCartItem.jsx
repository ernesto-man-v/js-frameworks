export const ShoppingCartItem = (props) => {
    const price = props.basketItem.dscont_price ? props.basketItem.dscont_price : props.basketItem.price;
    return <table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">

    <tbody>
       <tr class="woocommerce-cart-form__cart-item cart_item">
          <td class="product-remove"  >
             <div style={{cursor: 'pointer'}} onClick={() => props.removeAllFromBasket()} class="remove" aria-label="Remove Product Name 20 from cart" data-product_id="226" data-product_sku="">
                <span class="ahfb-svg-iconset ast-inline-flex">
                   <svg class="ast-mobile-svg ast-close-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                   </svg>
                </span>
             </div>
          </td>
          <td class="product-thumbnail">
             <a href="https://websitedemos.net/blingg-jewelry-store-04/product/product-name-20/"><img fetchpriority="high" decoding="async" src={`http://localhost:3333${props.basketItem.image}`} class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" width="200" style={{maxHeight: '95px'}}/></a> 
          </td>
          <td class="product-name" data-title="Product">
             <div class="ast-product-image ast-disable-image">
                <div class="ast-product-name"><a href="https://websitedemos.net/blingg-jewelry-store-04/product/product-name-20/">{props.basketItem.name}</a></div>
             </div>
          </td>
          <td class="product-price" data-title="Price">
             <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>{price}</bdi></span> 
          </td>
          <td class="product-quantity" data-title="Quantity">
             <div class="quantity buttons_added"><label class="screen-reader-text" for="minus_qty">Minus Quantity</label><span style={{cursor: 'pointer'}} onClick={() => props.removeFromBasket()} id="minus_qty" class="minus">-</span>
                <label class="screen-reader-text" for="quantity_65b601573ac1a">Product Name 20 quantity</label>
                <input value={props.itemQty} disabled style={{width: '30px'}}/>
                <label class="screen-reader-text" for="plus_qty"> Plus Quantity</label><span style={{cursor: 'pointer'}} onClick={() => props.addToBasket()} id="plus_qty" class="plus">+</span>
             </div>
          </td>
          <td class="product-subtotal" data-title="Subtotal">
             <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>{price * props.itemQty}</bdi></span> 
          </td>
       </tr>
    </tbody>
 </table>
 
}