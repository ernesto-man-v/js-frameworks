export const BasketTotal = (props) => {
    return <>
    <h4>Cart totals</h4>
    <table class="shop_table shop_table_responsive" cellspacing="0">
       <tbody>
          <tr class="order-total">
             <th>Total</th>
             <td data-title="Total"><strong><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>{props.basketPrice}</bdi></span></strong> </td>
          </tr>
       </tbody>
    </table>
    {
        !props.basketSend && <div class="wc-proceed-to-checkout">
        <div onClick={() => props.makeOrder()} class="checkout-button button alt wc-forward" style={{width: '150px', cursor: 'pointer'}}>
    Отправить				</div>
        </div>
    }

    </>
    
}