import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';


const registerObserver = (ref, setShowImage) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }
            setShowImage(true);
            observer.disconnect();
        });
    });
    observer.observe(ref);
}

const LazyImage = ({src, alt, styleClass}) => {

    const [showImage, setShowImage] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        registerObserver(imageRef.current, setShowImage);
    }, [])


    if(showImage) {
        return (
            <img src={src} alt={alt} className={styleClass} />
        )
    }

    return (
        <span ref={imageRef} style={{width: '100%', height: '100%', background: '#ccc'}}>
        </span>
    )
}

LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    styleClass: PropTypes.string.isRequired
}

export default LazyImage
