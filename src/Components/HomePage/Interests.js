import React from 'react'
import salsa from './imagesHome/salsa.png'
import coffee from './imagesHome/coffee.jpg'
import ogi from './imagesHome/Ogi.jpg'
import viski from './imagesHome/img6.jpg'

const Interests = () => {

    const INTERESTS = [

        {
            id: 1,
            title: "My Favourites",
            firstDescription: "- My favourite (animated) movie is: 'Up' by Pixar Animation Studios and Walt Disney Pictures",
            secondDescription: "- My favourite song is: 'There Must Be A Song Like You' (Live) by Helado Negro",
            thirdDescription: "- My favourite book is: 'Fahrenheit 451' by Ray Bradbury",
            firstSrc: "https://www.imdb.com/title/tt1049413/",
            secondSrc: "https://www.youtube.com/watch?v=5-q6qWOs3fE",
            thirdSrc: "https://en.wikipedia.org/wiki/Fahrenheit_451",
            firstSrcText: "Click here to learn more!",
            isMyFavs: true
        },
        {
            id: 2,
            title: "My Free Time",
            firstDescription: " - One of my favourite past time activities is attending salsa cubana dance classes",
            firstSrc: salsa,
            secondDescription: "- Other than that, I usually spend my free time hanging out with friends. Nothing beats the satisfaction of good conversation, a batch of delicious food, a warm cup of coffee with great company.",
            secondSrc: coffee,
            isMyFavs: false,
            firstAlt: "salsa.png",
            secondAlt: "coffee.png",
            isMyFT: true
        },

        {
            id: 3,
            title: "My Pets",
            firstDescription: "- This is my pet dog Ogi!",
            firstSrc: ogi,
            secondDescription: "- And this is my cat Viski!",
            secondSrc: viski,
            isMyFavs: false,
            firstAlt: "ogi.png",
            secondAlt: "viski.png", 
            isMyFT: false
        }

    ];


    return (

        <div>
            <h2 style={{ textAlign: "center", color: "white", paddingTop: "1%" }}>Interests</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>

                {
                    INTERESTS.map((interest) => {
                        return (
                            <div style={{ flex: 1, textAlign: "center", margin: "1.5%", borderRadius: "10px", backgroundColor: "#035dbd", padding: "22px", color: "white" }}>
                                <h4 style={{ textAlign: "center", marginBottom: interest.isMyFavs ? "60pt" : "1.5%" }}>{interest.title}</h4>
                                <p>{interest.firstDescription}</p>
                                {interest.isMyFavs &&
                                    <p><a href={interest.firstSrc} className="clickLinks" style={{ textDecoration: "none", target: "_blank" }}>
                                        {interest.firstSrcText}</a></p>
                                }
                                {interest.isMyFavs===false &&
                                    <img src={interest.firstSrc} alt={interest.firstAlt} style={{marginBottom: "2%", height: interest.isMyFT ? "130pt" : "150pt", width: interest.isMyFT ? "130pt":"150pt"}}></img>
                                }
                                <p>{interest.secondDescription}</p>
                                {interest.isMyFavs &&
                                    <p><a href={interest.secondSrc} className="clickLinks" style={{ textDecoration: "none", target: "_blank" }}>
                                        {interest.firstSrcText}</a></p>
                                }
                                {interest.isMyFavs===false &&
                                    <img src={interest.secondSrc} alt={interest.secondAlt} style={{marginBottom: "2%", height: interest.isMyFT ? "130pt" : "150pt", width: interest.isMyFT ? "130pt":"150pt"}}></img>
                                }

                                {interest.isMyFavs &&
                                <>
                                <p>{interest.thirdDescription}</p>
                                <p>
                                 <a href={interest.thirdSrc} className="clickLinks" style={{ textDecoration: "none", target: "_blank" }}>
                                    {interest.firstSrcText}</a></p>
                                </>
                                }

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Interests