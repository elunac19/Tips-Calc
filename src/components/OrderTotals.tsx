import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order : OrderItem []
    tip : number
    placeOrder : () => void
}

const OrderTotals = ({order, tip, placeOrder} : OrderTotalsProps) => {
    
    const subtotalAmount = useMemo( () => order.reduce(
        (total, item) => total + (item.price * item.quantity), 0), [order]) 

    const tipAmount = useMemo( () => subtotalAmount * tip, [tip, order])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount,[tip, order])

  return (
    <>
        <div className='space-y-3'>
            <h2 className='font-black text-2xl'>Total & Tip</h2>
            <p>Subtotal: {''}
                <span className='font-bold'>{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className='font-bold'>{formatCurrency(tipAmount)}</span>
            </p>
            <p>Total: {''}
                <span className='font-bold'>{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button 
            className='w-full bg-amber-600 p-3 text-white uppercase font-bold mt-10 rounded-lg disabled:opacity-40'
            disabled={totalAmount === 0}
            onClick={placeOrder}
        >
            Save Order
        </button>
    </>
  )
}

export default OrderTotals