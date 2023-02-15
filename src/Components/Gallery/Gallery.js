import React from 'react'
import Pictures from './Pictures'
import './gallery.css'

  // const [galleryItem, setGalleryItem] = useState({
  //   url: "",
  //   description: ""
  // })
  // const [description, setDescription] = useState()
  // const [newImage, setNewImage]=useState(false);

  // function addImage() {
  //   setNewImage(true)
  // }


  // // [{url: http:facebook.com}, {description:"fsdfdsfsdfdsfsd"}]

  // function handleChangeURL(event) {
  //   setGalleryItem([{ url: event.target.value }])
  // }

  // function handleChangeDesc(event) {
  //   setDescription(event.target.value)
  // }

  // useEffect(() => {

  // }, [description, galleryItem])

  const Gallery = () => {

  return (
    <>
    <div>
      <Pictures />                 
   </div>

      {/* {newImage &&
      <div style={{ border: "1pt solid lightgray", width: "250pt", height: "420pt", marginLeft: "60pt" }}>
        <img src="{galleryItem.url}" alt="new picture" style={{ width: "250pt", height: "250pt" }}></img>
        <div className='desc'>{galleryItem.description}<br />

          <button id="7" style={{ marginBottom: "5px", marginTop: "5px" }} className='btn btn-primary'>
            Like<span className='badge badge-light' style={{ backgroundColor: "white", color: "black", marginLeft: "3px" }}>20</span></button>

          <div className='container1'>
            <textarea></textarea><br />
            <button style={{ marginBottom: "5px", marginTop: "5px" }} className='btn btn-warning'>Add Comment</button>
          </div>

        </div>
      </div>
      } */}

      <br />
      <div className="container" style={{ borderRadius: "10px", backgroundColor: "#cfcfcf", padding: "20px", width: "65%" }}>
        <label for="pictureURL">Enter your image url:</label>
        <input type="text" className="inp" id="pictureURL" /><br />
        <label for="pictureDesc">Enter your image description:</label>
        <input type="text" className="inp" id="pictureDesc" /><br />
        <input type="button" className="sub"  value="Add image" />

          {/* onClick={() => {
          setGalleryItem([...galleryItem, { description: description }])
          console.log(galleryItem)
          addImage()}} */}

      </div>
      </>
  )
 
}

export default Gallery