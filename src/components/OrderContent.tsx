import { OrderItem } from "../types"

type OrderContentProps = {
    order : OrderItem[] 
}

function OrderContent({order} : OrderContentProps) {
  return (
    <div className='space-y-3 mt-5'>
        {order.length === 0 ? 
            <p className='text-center'>Empty Order</p>
        :
            (order.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                </div>
            ))
        )}
        
    </div>
  )
}

export default OrderContent