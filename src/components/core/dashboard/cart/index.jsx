import { useSelector } from "react-redux"
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

export default function Cart(){
    const {total,totalItems}=useSelector((state)=>state.cart);


    return (
        <div className="text-richblack-5">
            <h1>Your Cart</h1>
            <p>{totalItems} Courses in cart</p>
            {total>0
            ?(
                <div>
                    <RenderCartCourses/>
                    <RenderTotalAmount/>
                </div>
            )
            :(<p>Your cart is empty</p>)
        }
        </div>
    )
}