import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import OrderTotals from "./components/OrderTotals"
import TipForm from "./components/TipForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const {order, tip, setTip, addItem, clearItem} = useOrder()

  return ( 
    <>
      <header className='bg-amber-600 py-6'>
        <h1 className='text-center  text-orange-100 text-4xl font-black'>Consumption and Tips Calculator</h1>
      </header>

      <main className='max-w-7xl mx-auto py-8 grid md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='text-center text-amber-600 font-extrabold text-3xl '>MENU</h2>
          <div className='space-y-3 mt-8'>
              {menuItems.map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}      
                />
              ))}
          </div>
        </div>

        <div className='p-5 border border-dashed border-amber-800 rounded-2xl'>
          <h2 className='text-center text-amber-600 font-extrabold text-3xl'>TICKET CONSUMPTION</h2>
          <OrderContent
            order={order}
            clearItem={clearItem}
          />
          <TipForm
            setTip={setTip}  
          />
          <OrderTotals
            order={order}
            tip={tip}
          />
        </div>
      </main>
    </>
  )
}

export default App
