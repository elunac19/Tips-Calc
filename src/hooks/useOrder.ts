import { useState } from "react"
import type { Item, OrderItem} from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    function addItem(item : Item){

        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if(itemExist){
            // const updatedOrder = order.map((orderItem) => {
            //     if(orderItem.id == item.id){
            //         return {...orderItem, quantity: orderItem.quantity + 1}
            //     }
            //     return orderItem
            // })
            const updatedOrder = order.map((orderItem) => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)

        }else{
            const newOrderItem = {...item, quantity: 1}
            setOrder([...order, newOrderItem])
        }
    }

    function clearItem(item : OrderItem){
        setOrder(order.filter((orderItem) => orderItem.id !== item.id))
    }

    return {
        order,
        tip, 
        setTip,
        addItem,
        clearItem,
    }
}