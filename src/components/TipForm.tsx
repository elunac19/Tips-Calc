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
}

const TipForm = ({setTip} : TipFormProps) => {
    return (
        <div>
            <h3 className='font-black text-2xl'>Tip</h3>
            <form className='flex justify-between'>
                {tipOptions.map((tip) => (
                    <div key={tip.id} className='flex'>
                        <label className='m-2 font-medium' htmlFor={tip.id}>{tip.label}</label>
                        <input 
                            id={tip.id}
                            type="radio"
                            name="tip"
                            value={tip.value}
                            onChange={ e => setTip(+e.target.value)}
                        />
                    </div>
                ))}
            </form>
        </div>
  )
}

export default TipForm