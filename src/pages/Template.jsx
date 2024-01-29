import {useSelector} from 'react-redux'
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';


export const Template = (props) => {

    const basketPrice = useSelector(((state) => state.basket.entities.reduce((acc, item) => acc + (item.discont_price ? Number(item.discont_price) : Number(item.price)), 0)));
    const basketItemsCount = useSelector(((state) => state.basket.entities.length));

    console.log('basketPrice', basketPrice);

    return (
    <>
        <Header basketPrice={basketPrice} basketItemsCount={basketItemsCount} />
            {props.children}
        <Footer />
    </>
    )
}