import React, { useState } from 'react'
import './impressions.css'


const Impressions = () => {

    const [showMessage,setShowMessage]=useState(false)

    function reloading(){
        window.location.reload();
    }
    
    function submitImpressions(){
        setShowMessage(true);
        setTimeout(reloading,3000);
    }

  return (
    <>
        <br/>
        <h3 style={{textAlign: "center"}}>Visitors impressions</h3><br/>

        <form id="formImpressions">
        <div className="container" style={{borderRadius: "10px", backgroundColor: "#cfcfcf", padding: "20px", textAlign: "center"}}>
          <div> 
            <p><b>How would you <em>rate</em> this site from 1 to 10?</b></p>
            <select>
                <option value="0">Choose grade </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
          </div> 

          <br />

          <div style={{marginTop: "10px"}}>
            <p><b>How would you <em>describe</em> this site?</b></p>
            <label for="u" style={{marginRight: "0.5%"}}>Interesting</label>
            <input className="pl" type="checkbox" id="u" />

            <label for="i" style={{marginRight: "0.5%"}}>Informative</label>
            <input className="pl" type="checkbox" id="i" />

            <label for="us" style={{marginRight: "0.5%"}}>Useful</label>
            <input className="pl" type="checkbox" id="us" />

            <label for="b" style={{marginRight: "0.5%"}}>Boring</label>
            <input className="pl" type="checkbox" id="b" />
          </div>

          <br />

          <div>
            <p><b>How can I <em>improve</em> this site?</b></p>
            <input type="text" className="inp" id="improvements" placeholder="Enter your suggestion here" />
          </div>
          <div style={{textAlign: "left", marginTop: "0.5%"}}><input type="button"  onClick={submitImpressions} className="sub" value="Submit" /></div>
        </div>
      </form>

      {showMessage &&
        <div>
        <p className="alert alert-success" style={{marginLeft: "13%", marginTop: "1%", width: "74%"}}><strong>Success!</strong> Your impressions have been submited.</p>
        </div>
      } 
    </>
  )
}

export default Impressions