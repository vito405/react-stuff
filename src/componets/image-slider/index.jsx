import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './slider.css'


export default function Slider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlider, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (e) {
            setErrorMsg(e.message)
            setLoading(false)
        }
    }


    function handlePrev() {
        setCurrentSlide(currentSlider === 0 ? images.length - 1 : currentSlider - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlider === images.length - 1 ? 0 : currentSlider + 1)
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])

    if (loading) {
        return <div>Loading Data !! please Wait</div>
    }
    if (errorMsg !== null) {
        return <div>Error !! {errorMsg}</div>
    }



    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrev} className="arrow arrow-left" />
        {
            images && images.length ?
                images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={currentSlider === index ? "current-image" : "current-image hide-current-image"}
                    />
                ))
                : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
        <span className="circle-indicators">
            {
                images && images.length ?
                    images.map((_, index) => <button
                        key={index}
                        className={
                            currentSlider === index ? "current-indicator" : "current-indicator hide-inactive-indicator"
                        }
                        onClick={() => setCurrentSlide(index)}
                    ></button>)
                    : null
            }
        </span>
    </div>
}