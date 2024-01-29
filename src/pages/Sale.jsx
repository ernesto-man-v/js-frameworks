import { useSelector } from 'react-redux'
import {SaleSection} from '../components/Sections';

export const Sale = (props) => {
    const items = useSelector(((state) => state.items));

    return (
        <SaleSection items={items} />
    )
}