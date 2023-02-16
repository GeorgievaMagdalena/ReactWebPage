import React from 'react'
import Post from './Post'
import './blog.css';

const Blog = () => {

  function addBlogPost() {
    var headingText, descriptionText, text, urlImage;

    headingText = document.getElementById("blogHeading").value;
    document.getElementById("blogHeading").value = " ";

    descriptionText = document.getElementById("blogDescription").value;
    document.getElementById("blogDescription").value = " ";

    text = document.getElementById("blogText").value;
    document.getElementById("blogText").value = " ";

    urlImage = document.getElementById("blogImage").value;
    document.getElementById("blogImage").value = " ";

    var head = document.createElement("h4");
    head.innerHTML = headingText;
    head.setAttribute("class", "titleH");
    var descr = document.createElement("h6");
    descr.innerHTML = descriptionText;
    var blogPost = document.createElement("p");
    blogPost.innerHTML = text;
    var img = document.createElement("img");
    img.src = urlImage;
    img.setAttribute("class", "blogImages");
    img.setAttribute("width", "100%");
    img.setAttribute("height", "150pt");

    var place = document.createElement("div");
    place.setAttribute("className", "container");
    place.setAttribute("style", "border-radius: 10px; background-color: #cfcfcf; padding: 20px; width: 65%;");
    place.appendChild(head);
    place.appendChild(descr);
    place.appendChild(img);
    place.appendChild(blogPost);

    var breaK = document.createElement("br");

    var originalplace = document.getElementById("newBlog");
    originalplace.appendChild(place);
    originalplace.appendChild(breaK);

    //https://picsum.photos/1000/130
  }


  return (
    <div>
      <br />
      <h3 style={{ textAlign: "center" }}>Blog posts</h3><br />
      <div>
        < Post />

        <div style={{display: 'flex', justifyContent: 'center'}} id="newBlog" ></div>
        <br />
      </div>

      <div className="container" style={{ borderRadius: "10px", backgroundColor: "#cfcfcf", padding: "20px", width: "65%" }}>
        <p><b>Here you can write your blog post</b></p>

        <label htmlFor="blogHeading">Enter your blog heading:</label><br />
        <input type="text" className="inp" id="blogHeading" /><br />

        <label htmlFor="blogDescription">Enter your blog description:</label><br />
        <input type="text" className="inp" id="blogDescription" /><br />

        <label htmlFor="blogImage">Enter your image url:</label><br />
        <input type="text" className="inp" id="blogImage" /><br />

        <label htmlFor="blogText">Enter your blog text:</label><br />
        <textarea id="blogText" style={{ width: "100%", height: "130pt" }}></textarea><br />

        <input type="button" className="sub" style={{ marginTop: "2%"}} onClick={addBlogPost} value="Add Blog Post" />
      </div>
    </div>
  )
}

export default Blog