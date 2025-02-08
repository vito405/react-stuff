import { useState } from 'react'
import QRCode from 'react-qr-code'


export default function QRcode(){
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')


    function handleGenerate(){
        setQrCode(input)
        setInput('')
    }
    return <div>
        <h1>Qr Code Generator</h1>
        <div>
            <input 
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            value={input}
            placeholder="Enter your value"
            />
            <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerate}>Generate</button>
        </div>
        <QRCode value={qrCode} size={400} bgColor='white' id='qr-code-value'/>
    </div>
}