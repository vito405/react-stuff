import { useEffect, useState } from "react"
import './load-more.css'


export default function LoadMore(){

const [loading, setLoading] = useState(false);
const [products, setProducts] = useState([]);
const [count, setCount] = useState(0);
const [disableButton, setDisableButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(
            `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20}`)

            const result = await response.json();

            console.log(result);
            

            if(result && result.products && result.products.length){
                setProducts((prevData)=> [...prevData, ...result.products])
                setLoading(false)
            }
        } catch (e) {
            console.log(e);
            setLoading(false)
        }
    }

    useEffect(() => {
       if(count > 0) fetchProducts()
    },[count])
    useEffect(() => {
        if(products && products.length === 100)  setDisableButton(true)
    },[products])


    if(loading){
        return <div>Loading Data !! Please Wait</div>
    }
    

    return <div className="container">
        <div className="product-container">
            {
                products && products.length ? 
                products.map(item=> <div  className="product" key={item.id}>
                    <img 
                    src={item.thumbnail}
                    alt={item.title}
                    /><p>{item.title}</p>

                </div>)
                : null
            }
        </div>
        <div className="button-load">
            <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
            {
                disableButton ? <p>No more Products</p> : null
            }
        </div>
    </div>
}

