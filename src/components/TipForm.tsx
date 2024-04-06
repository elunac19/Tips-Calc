import type {Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-15',
      value: .15,
      label: '15%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
]

type TipFormProps = {
    setTip : Dispatch<SetStateAction<number>>
    tip : number 
}

const TipForm = ({setTip, tip} : TipFormProps) => {
    return (
        <div>
            <h3 className='font-black text-2xl'>Tip</h3>
            <form className='flex justify-between'>
                {tipOptions.map((tipOpt) => (
                    <div key={tipOpt.id} className='flex'>
                        <label className='m-2 font-medium' htmlFor={tipOpt.id}>{tipOpt.label}</label>
                        <input 
                            id={tipOpt.id}
                            type="radio"
                            name="tipOpt"
                            value={tipOpt.value}
                            onChange={ e => setTip(+e.target.value)}
                            checked={tipOpt.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
  )
}

export default TipForm