import { useSelector } from 'react-redux'
import {
    DiscountSection,
    CategoriesSection,
    CouponSection,
    SaleSection
} from '../components/Sections';

export const Main = (props) => {

    const categories = useSelector(((state) => state.categories));
    const items = useSelector(((state) => state.items));

    return (
    <>
        <DiscountSection />
        <CategoriesSection categories={categories} max={4}/>
        <CouponSection />
        <SaleSection items={items} max={5}/>
    </>
    )
}