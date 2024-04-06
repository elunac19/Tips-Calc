import { formatCurrency } from "../helpers"
import type { Item } from "../types"

type MenuItemProps = {
    item : Item
    addItem: (item : Item) => void
}

function MenuItem({item, addItem} : MenuItemProps) {

  return (
    <button
      className='border-2 border-orange-200 hover:bg-amber-400 w-full p-3 flex justify-between rounded-md'
      onClick={() =>  addItem(item)}
    >
        <p>{item.name}</p>
        <p className='font-bold'>{formatCurrency(item.price)}</p>
    </button>
  )
}

export default MenuItem