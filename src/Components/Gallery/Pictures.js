import forest from './imagesGallery/img1.jpg'
import mak from './imagesGallery/img2.jpg'
import twilight from './imagesGallery/img3.jpg'
import galeb from './imagesGallery/img4.jpg'
import dubrovnik from './imagesGallery/img5.jpg'
import art from './imagesGallery/art.jpg'
import React, { useState } from 'react'


    const PICTURES = [

        {
            id: 0,
            picSrc: forest,
            description: "Banderishka meadow, Pirin Mountain",
            alt: "Banderishka meadow, Pirin Mountain",
            likes: 20,
            comID: 0
        },
        {
            id: 1,
            picSrc: mak,
            description: "Makedonium - Ilinden Monument",
            alt: "Makedonium - Ilinden Monument",
            likes: 20,
            comID: 1
        },
    
        {
            id: 2,
            picSrc: twilight,
            description: "Twilight, Struga",
            alt: "Twilight, Struga",
            likes: 20,
            comID: 2
        },
    
        {
            id: 3,
            picSrc: galeb,
            description: "'Galeb' café, Struga",
            alt: "'Galeb' café, Struga",
            likes: 20,
            comID: 3
        },
    
        {
            id: 4,
            picSrc: dubrovnik,
            description: "Dubrovnik, Croatia",
            alt: "Dubrovnik, Croatia",
            likes: 20,
            comID: 4
        },
    
        {
            id: 5,
            picSrc: art,
            description: "Art, café 'Che' Skopje",
            alt: "Art, café 'Che' Skopje",
            likes: 20,
            comID: 5
        }
    ];

    const Pictures = () => {
        const [pictures, setPictures] = useState(PICTURES);
        const [liked, setLiked]=useState(false)
      
        const addLike = id => {
          const updatedPictures = pictures.map(picture => {
            if ( picture.id === id) {
              return {
                ...picture,
                likes: picture.likes + 1
              }; 
            }
            return picture;
          });
          setPictures(updatedPictures);
          setLiked(true)
        };

        const removeLike = id => {
          const updatedPictures = pictures.map(picture => {
            if ( picture.id === id) {
              return {
                ...picture,
                likes: picture.likes - 1
              };
            }
            return picture;
          });
          setPictures(updatedPictures);
          setLiked(false)
        };

        const toggleLikes = id => {
          liked ? removeLike(id) : addLike(id)
        }

      //   function addComment(id, comID){
      //     var commentText=document.getElementById(id).value;
      //     document.getElementById(id).value=" ";
      
      //     const element=document.createElement("div");
      //     element.innerHTML=commentText;
    
      //     var place=document.getElementById(comID);
      //     place.appendChild(element);
      //     element.setAttribute("class","comments");
      // }

        
        
    return (
        <>
            <br />
            <h3 style={{ textAlign: "center" }}>Some of my favourite pictures</h3>
            <br />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "10px", textAlign: "center" }}>
            {pictures.map( picture => {
        return (
          <div style={{ border: "1pt solid lightgray", width: "250pt", height: "420pt", marginLeft: "60pt" }}>
            <img src={picture.picSrc} alt={ picture.alt} style={{ width: "250pt", height: "250pt" }}></img>
            <div className='desc'>{ picture.desc}<br />
              <button style={{ marginBottom: "5px", marginTop: "5px" }} onClick={() => toggleLikes(picture.id)} className='btn btn-primary'>
                Like<span className='badge badge-light' style={{ backgroundColor: "white", color: "black", marginLeft: "3px" }}>{picture.likes}</span></button>
              <div className='container+{picture.id}'>
                <textarea id={picture.id}></textarea><br />
                <button style={{ marginBottom: "5px", marginTop: "5px" }}    className='btn btn-warning'>Add Comment</button>

                {/* onClick={() => addComment(picture.id, picture.comID)} */}
                <div id={picture.comID}></div>
              </div>
            </div>
          </div>
        );
      })}
            </div>
        </>
    )
}

export default Pictures