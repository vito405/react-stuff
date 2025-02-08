import { useEffect, useState } from "react"



export default function RandoColor() {
    const [colorType, setColorType] = useState('hex');
    const [randoColor, setRandoColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setRandoColor(hexColor)
    }

    function handleCreateRandomRgbColor() {
        let r = randomColorUtility(256)
        let g = randomColorUtility(256)
        let b = randomColorUtility(256)

        setRandoColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(() => {
        if(colorType === 'rgb') handleCreateRandomRgbColor()
        else handleCreateRandomHexColor()

    },[colorType])

    return <div className="container" style={{
        background: randoColor,
        width: '100vw',
        height: '100vh'
    }}>
        <button onClick={() => setColorType('hex')}>Create Hex Color</button>
        <button onClick={() => setColorType('rgb')}>Create RGB Color</button>
        <button onClick={colorType === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff',
            fontSize: '60px',
            marginTop: '50px',
            flexDirection: 'column',
            
        }}>
            <h3>{colorType === 'rgb' ? 'RGB Color: ' : 'Hex Color: '}</h3>
            <h1>{randoColor}</h1>
        </div>
    </div>
}