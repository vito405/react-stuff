import { useEffect, useState } from "react"
import './scroll.css'


export default function Scroll({ url }) {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')
    const [scrollPer, setScrollPer] = useState(0)

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl)
            const data = await response.json()


            if (data && data.products && data.products.length > 0) {
                setData(data.products)
                setLoading(false)
            }
            console.log(data);

        } catch (error) {
            console.log(error);
            setErrorMsg(error.message)
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])

    function handleScrollPer() {
        console.log(document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight);

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPer((howMuchScrolled / height) * 100)
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScrollPer)


        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    if (loading) return <h1>Loading Please !!! Wait</h1>

    if(errorMsg) return <div>Error ! {errorMsg}</div>
    return <div className="container">
        <div className="top-container">
            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress-tracker">
                <div className="current-progress-bar" style={{ width: `${scrollPer}%` }}></div>
            </div>

        </div>
        <div className="data-container">
            {
                data && data.length > 0 ?
                    data.map((item) => <p key={item.id}>{item.title}</p>)
                    : <p>No Products Found</p>
            }
        </div>
    </div>

}