import React, {useEffect, useState} from 'react'
import Image from './Image'
import axios from 'axios'
const Search = ()=>{
    const [tags, setTags] = useState('china')
    const [images, setImages] = useState([])
    const [page, setPage] = useState(1)
    const [keywords, setKeywords] = useState('')
    const key = "42b89c5ece8eb8ac4005c761aa7b252f";

    useEffect(()=>{

        let apiurl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+key
            if(keywords) apiurl+= "&text="+keywords
            if(tags) apiurl+= "&tags="+tags
            apiurl+= "&per_page=12&page="+page+"&format=json&nojsoncallback=1";

        axios.get(apiurl)
            .then(response => response.data)
            .then(response => {
                const photoArr = response.photos.photo;
                const allPhotos = photoArr.map(photoItem =>{
                    const url = "http://farm"+ photoItem.farm +".staticflickr.com/"+photoItem.server+"/"+photoItem.id+"_"+ photoItem.secret +"_m.jpg";
                    return url;
                });
                setImages(oldPhotos=>{
                    return [
                        ...oldPhotos,
                        ...allPhotos
                    ]
                })
            })

    },[page, tags, keywords])


    function onSelectChange(e){
        setPage(1)
        setImages([])
        setTags(e.target.value)
    }

    function onInputChange(e){
        setPage(1)
        setImages([])
        setKeywords(e.target.value)

    }

    const onNext = ()=>{
        setPage(oldPage => oldPage + 1)

    }

    return (
        <div className="search">
            <div className="searchBox">
                <h2>Search</h2>
                <div>
                    <label>Latitude</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Longitude</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Tags</label>
                    <input type="text" onChange={(e)=>onInputChange(e)} value={keywords} />
                </div>
                <div>
                    <label>Most Popular</label>
                    <select onChange={(e)=>onSelectChange(e)} value={tags}>
                        <option value="china">China</option>
                        <option value="usa">usa</option>
                        <option value="nepal">nepal</option>
                    </select>
                </div>

            </div>
            <div className="searchResults">
                <div className="row">
                    {
                        images.map((url)=><Image url={url}/>)
                    }
                </div>
            </div>

            <button onClick={()=>onNext()}>Next</button>

        </div>
    )
}

export default Search