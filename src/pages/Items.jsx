import {useSelector} from 'react-redux'
import {AllProductsSection} from '../components/Sections';

export const Items = (props) => {

    const items = useSelector(((state) => state.items));
    console.log('categories', items);

    return (
        <AllProductsSection items={items} />
    )
}