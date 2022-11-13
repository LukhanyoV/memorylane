import React, { useState } from 'react';
import axios from 'axios';

function Gallery() {
    const [images, setImages] = useState([]);
    (async () => {
        const images = await axios.get("https://comm-drive.deta.dev/getall");
        setImages(await Promise.all(images.data.data.names.map(async item => {
            return {
                "name": item,
                "link": await getImage(item)
            }
        })));
    })();

    const getImage = async (image) => {
        const {data} = await axios.get("https://comm-drive.deta.dev/download/"+image);
        return "data:image/jpeg;base64,"+data.data;
    }

    return <div>
    {images.map(image => {
        return <div key={image.name}>
            <h2>{image.name}</h2>
            <img src={image.link} alt={image.name} width='100px' height='100px' />
        </div>
        })}
    </div>
}

export default Gallery