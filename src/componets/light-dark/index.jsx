import useLocalStorage from "./useLocalStroage"
import './light-dark.css'


export default function LightDark(){

    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }    

    return <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>Hello World !</p>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
}