import React from 'react'
import Post from './Post'
import './blog.css';


const Blog = () => {
 
    function addBlogPost(){

    }


  return (
    <div>
    <br />
        <h3 style={{textAlign: "center"}}>Blog posts</h3><br />
        <div>
        < Post/>
        </div>


        <div className="container" style={{borderRadius: "10px", backgroundColor: "#cfcfcf", padding: "20px", width: "65%"}}>
                <p><b>Here you can write your blog post</b></p>

                <label htmlFor="blogHeading">Enter your blog heading:</label><br/>
                <input type="text" className="inp" id="blogHeading" /><br/>

                <label htmlFor="blogDescription">Enter your blog description:</label><br/>
                <input type="text" className="inp" id="blogDescription" /><br/>

                 <label htmlFor="blogImage">Enter your image url:</label><br/>
                <input type="text" className="inp" id="blogImage" /><br/>

                <label htmlFor="blogText">Enter your blog text:</label><br/>
                <textarea id="blogText" style={{width: "100%", height: "130pt"}}></textarea><br/>

                <input type="button" className="sub" style={{marginTop: "2%"}} onClick={addBlogPost} value="Add Blog Post" />
            </div>
    </div>
  )
}

export default Blog