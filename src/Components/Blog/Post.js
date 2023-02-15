import React from 'react'
import space from './imagesBlog/spaceb2.jpg'
import struga from './imagesBlog/struga.jpg'

const POST = [

    {
        id: 1,
        picSrc: space,
        alt: "space",
        heading: "What's the real reason you can't go faster than the speed of light?",
        decription: "There's the textbook answer, then there's the real answer.  Dec 8, 2022",
        text: "    This ultimate speed limit is a curious fact and one that runs quite against our common intuition. After all, if you are zooming along in your car and step on the gas, you'll go faster. And while your car has a top speed, we know of faster things like fighter jets and bullets. However, speeding up eventually stops working. No matter how hard you try, you cannot go faster than ~186,000 miles per second (~300,000 km/sec). The most common explanation for this cosmic speed limit is that as an object goes faster and faster, its mass increases. And this explanation makes some sense. After all, it's harder to push a mountain than a pebble. If the mass of objects become infinite as they get closer to the speed of light, it makes sense that you cannot break that speed barrier — it would take infinite energy to accomplish. Instead of space and time, there is a single thing, called spacetime. Individuals can move through time or space, just as travelers can decide to move east/west vs. north/south. When Einstein's theory was pushed harder, what was revealed was that every object travels through spacetime at a single speed — the speed of light. And it's identical in spacetime. Objects move in spacetime at the speed of light. A stationary object isn't moving through space at all, so the object is moving through time at the speed of light. Furthermore, an object moving through space at the speed of light has no speed left over to move through time."
    },
    {
        id: 2,
        picSrc: struga,
        alt: "struga",
        heading: "Things to Do in Struga",
        decription: "All the things you can do in the city nicknamed 'City of Poetry and World's Poetry City'.  Jan 19, 2020",
        text: "    Lying on Lake Ohrid, but without the hustle and bustle of its main town, Struga enjoys the picturesque lakeside scenery without the crowds. With its mild climate and relatively quiet beaches, holidaying in Struga feels magically like a seaside retreat within a country that doesn't have a coastline. With a number of lake watersports on offer as well as a good choice of inexpensive hotels in the pleasant town center, this is a place in which to sit back, relax and enjoy the surrounding forest and mountain scenery within the comfort of a typical Macedonian town. The Black Drin river divides the city and thus provides the perfect setting for a number of little cafes and restaurants which border its banks. Aside the lake shore and beach bars and restaurants, you can take a walk around and see the old bazar. Everything in Struga is within walking distance, so you will also cover the city center, and the beautiful river flow. Also visit the church of Saint George that is built on top of Samuel's church dating back as far as the 14th century. You can also find Magdalena and Teodora in a random cafe."
    }
];



const Post = () => {
    return (
        <div>
            {
                POST.map((post) => {
                    return (
                        <div>
                        <div className='container' style={{ borderRadius: "10px", backgroundColor: "#cfcfcf", padding: "20px", width: "65%" }}>
                            <h4 className='titleH'>{post.heading}</h4>
                            <h6>{post.decription}</h6>
                         
                            <img src={post.picSrc} className='blogImages' alt={post.alt} width="100%" height="150pt"></img>
                          
                            <p>&emsp;{post.text}</p>
                            
                        </div>
                        <br/>
                        </div>
                    )

                })
            }

        </div>
    )
}

export default Post
