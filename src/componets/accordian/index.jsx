import data from './data'
import { useState } from 'react'
import './accordian.css'

export default function Accordian() {

    const [selected, setSelected] = useState(null)
    const [EnableMultiSelect, setEnableMultiSelect] = useState(false)
    const [multiSelect, setMultiSelect] = useState([])
    
    
    function handleSingleSelection(getCurrentItemId) {
        setSelected(getCurrentItemId === selected ? null : getCurrentItemId)
    }

    function handleMultiSelection(getCurrentItemId){
        let cpyMutiple = [...multiSelect];
        const findIndex = cpyMutiple.indexOf(getCurrentItemId)

        if(findIndex === -1) cpyMutiple.push(getCurrentItemId)  
        else cpyMutiple.splice(findIndex, 1)


        setMultiSelect(cpyMutiple)
    }
   
    console.log(EnableMultiSelect, multiSelect);

    

    return <div className='wrapper'>
        <button onClick={()=> setEnableMultiSelect(!EnableMultiSelect)}>Enable Muil select</button>
        <div className='accordian' >
            {
                data && data.length > 0 ?
                    data.map((dataItem) => 
                    <div className='item' style={{ listStyle: 'none' }} key={dataItem.id}>
                        <div onClick={
                            EnableMultiSelect 
                            ? ()=> handleMultiSelection(dataItem.id) 
                            : () => handleSingleSelection(dataItem.id)
                        } 
                            className='title'>
                            <h3>{dataItem.label}</h3>
                            <span>+</span>
                        </div>
                            {
                                selected === dataItem.id || multiSelect.indexOf(dataItem.id) !== -1?
                                    <div className='description'>{dataItem.description}</div>
                                    : null
                            }
                    </div>)
                    : <h1>Error !!! No Data found</h1>
            }
        </div>
    </div>
}