import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import {Section} from '../Section';
import {Item} from '../Item';
import { addToBasket } from '../../store/basketSlice';
import { useDispatch } from '../../store';


const getFilteredItems = (items, priceFrom, priceTo, discountItems) => {
    let tempItems = [...items];
    if (priceFrom, priceTo) {
        tempItems = items.filter(item => {
            const price = item.dicont_price ? Number(item.dicont_price) : Number(item.price);
            return price >= priceFrom && price <= priceTo
        })
    }

    if (discountItems) {
        tempItems = tempItems.filter(item => item.discont_price);
    }

    return tempItems;
}

const getSortedItems = (items, sortType) => {
    let tempItems = [...items];
    if (sortType) {
        
        if (sortType === 'price_asc') {
            tempItems.sort((a, b) => {
                const priceA = a.dicont_price ? Number(a.dicont_price) : Number(a.price);
                const priceB = b.dicont_price ? Number(b.dicont_price) : Number(b.price);
                return priceA - priceB;
            })
        }

        if (sortType === 'price_desc') {
            tempItems.sort((a, b) => {
                const priceA = a.dicont_price ? Number(a.dicont_price) : Number(a.price);
                const priceB = b.dicont_price ? Number(b.dicont_price) : Number(b.price);
                return priceB - priceA;
            })
        }

    }
    return tempItems
}

export const AllProductsSection = (props) => {

    const dispatch = useDispatch();
    //let query = useQueryParams();
    const {id: categoryId} = useParams();
    //const categoryId = query.get("categoryId");
    const categories = useSelector(((state) => state.categories.entities));
    const categorieItem = categories.filter(item => item.id === categoryId);

    const [priceFrom, setPriceFrom] = React.useState();
    const [priceTo, setPriceTo] = React.useState();
    const [discountItems, setDiscountItems] = React.useState(false);
    const [priceSort, setPriceSort] = React.useState();

    console.log('produxt select', priceFrom, priceTo, discountItems, priceSort);
    let proceedItems = [...props.items.entities];
    console.log('proceedItems', proceedItems);
    if (categoryId) {
        proceedItems = proceedItems.filter(item => item.categoryId === Number(categoryId));
        proceedItems = getFilteredItems(proceedItems, priceFrom, priceTo, discountItems);
        proceedItems = getSortedItems(proceedItems, priceSort);
        console.log('proceedItems 2', proceedItems);
    }

    return (
        <Section title={categoryId ? categorieItem.title : 'All products'} link={categoryId ? null : {title: 'All products', href:'#'}}>
            {
                categoryId && 
                <>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', margin: '20px'}}>
                    <span>Price</span>
                        <input type="text" placeholder='from' value={priceFrom} onChange={e => setPriceFrom(e.target.value)}/>
                        <input type="text" placeholder='to' value={priceTo} onChange={e => setPriceTo(e.target.value)}/>
                    <span>Discount Items</span>
                        <input type="checkbox" value={discountItems} onChange={e => setDiscountItems(e.target.checked)}/>
                    <span>Sorted</span>
                        <select name="select" value={priceSort} onChange={e => setPriceSort(e.target.value)}>
                            <option value=""></option>
                            <option value="price_asc">Price asc</option>
                            <option value="price_desc">Price desc</option>
                        </select>
                </div>
                </>
            }
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                {
                    proceedItems.map((item) => {
                        return <Item
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            imageSource={item.image}
                            price={item.price}
                            discountPrice={item.discont_price}
                            addToBasket={() => dispatch(addToBasket(item))}
                        />
                    }).slice(0, props.max ? props.max : proceedItems.length - 1)
                }

            </div>

        </Section>
    )
}