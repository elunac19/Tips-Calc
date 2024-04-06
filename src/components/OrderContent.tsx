import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentProps = {
    order : OrderItem[],
    clearItem : (item : OrderItem) => void 
}

function OrderContent({order, clearItem} : OrderContentProps) {
  return (
    <div className='space-y-3 mt-8'>
        {order.length === 0 ? 
            <p className='text-center font-bold text-xl text-gray-500 m-10'>Empty Order</p>
        :
            (order.map((item) => (
                <div 
                    className='flex justify-between items-center border-t border-dashed border-gray-300 py-3 last:border-b'
                    key={item.id} 
                >
                    <div>
                        <p className='text-lg font-medium'>
                            {item.name} - {formatCurrency(item.price)}
                        </p>
                        <p className='font-semibold text-amber-700'>
                            Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                        </p>
                    </div>

                    <button 
                        className='bg-red-700 text-white h-7 w-7 rounded-full font-bold hover:bg-red-800'
                        onClick={() => clearItem(item)}
                    >
                        X
                    </button>
                </div>
            ))
        )}
        
    </div>
  )
}

export default OrderContent