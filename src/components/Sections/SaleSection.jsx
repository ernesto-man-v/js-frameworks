import {Section} from '../Section';
import {Item} from '../Item';
import { addToBasket } from '../../store/basketSlice';
import { useDispatch } from '../../store';

export const SaleSection = (props) => {

    console.log('sales', props.items)

    const dispatch = useDispatch();

    const saleItemsFiltered = props.items.entities
        .filter((item) => item.discont_price);
    const saleItemsFilteredSliced = saleItemsFiltered
        .slice(0, props.max ? props.max : saleItemsFiltered.length - 1);

    return (
        <Section title='Sales' link={{title: 'All sales', href:'#'}}>
            {
                saleItemsFilteredSliced.map((item) => {
                    return <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        imageSource={item.image}
                        price={item.price}
                        discountPrice={item.discont_price}
                        addToBasket={() => dispatch(addToBasket(item))}
                    />
                })
            }
        </Section>
    )
}