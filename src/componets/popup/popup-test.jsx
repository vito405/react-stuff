import { useState } from "react"
import Modal from "."
import './popup.css'


export default function TestPopUp(){
    const [showModalPopup, setShowModalPopup] = useState(false)


    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup)
    }

    function onClose(){
        setShowModalPopup(false)
    }
    return <div>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {
            showModalPopup && <Modal 
            onClose={onClose}
            body={<div>Custom body</div>}
            />
        }
    </div>
}