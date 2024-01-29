import {Section} from '../Section';
import { getCoupon } from '../../store/couponSlice';
import { useDispatch } from '../../store';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux'

export const CouponSection = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('getCoupon', getCoupon);
        dispatch(getCoupon(data));
    }
    const dispatch = useDispatch();
    const coupon = useSelector(((state) => state.coupon));
    console.log('coupon.received', coupon.received);
    return (
        <Section>
            {
                !coupon.received && <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{margin: '10px 10px 10px 10px'}}>
                        <input {...register("name", { required: true })} placeholder="Ivanov Ivan" />
                        {/* errors will return when field validation fails  */}
                        {errors.name && <span>Name is required</span>}
                    </div>

                    <div style={{margin: '10px 10px 10px 10px'}}>
                        <input {...register("phoneNumber", { required: true })} placeholder="+7(495)123-45-67" />
                        {/* errors will return when field validation fails  */}
                        {errors.phoneNumber && <span>Phone number is required</span>}
                    </div>

                    <div style={{margin: '10px 10px 10px 10px'}}>
                        <input {...register("email", { required: true })} placeholder="name@comp.com"/>
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span>Email is required</span>}
                    </div>

                    <div style={{margin: '10px 10px 10px 10px'}}>
                        <input type="submit" value="Получить купон"/>
                    </div>

                </form>
            }
            
        </Section>

    )
}