import type { Item } from "../types"

type MenuItemProps = {
    item : Item
    addItem: (item : Item) => void
}

function MenuItem({item, addItem} : MenuItemProps) {

  const {name, price} = item

  return (
    <button
      className='border-2 border-orange-200 hover:bg-amber-400 w-full p-3 flex justify-between rounded-md'
      onClick={() =>  addItem(item)}
    >
        <p>{name}</p>
        <p className='font-bold'>${price}.00</p>
    </button>
  )
}

export default MenuItem