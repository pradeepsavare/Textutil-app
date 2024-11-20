import React, { useState } from 'react'

export default function Main(props) {
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Convert to Uppercase","success")
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Convert to Lowercase","success")
    }
    const handleClearClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Clear","success")
    }
    const handleGmailClick = () => {
        let n = Math.floor(Math.random() * 10)
        let str = n  + "@gmail.com"
        let newText = text.concat(str)
        setText(newText)
        props.showAlert("Convert to Gmail","success")
    }
   

    const [text, setText] = useState(' ')
    return (
        <><div className="container " style={{color:props.mode==="dark" ? "white":"#042743"}}>
            <h1>Enter The Text To Analyze Below</h1>
            <div className="container">
                <div className="m-3">
                    <textarea  className="form-control" value={text} onChange={handleOnChange} id="floatingTextarea2" rows="8" style={{backgroundColor:props.mode==="dark" ? "gray":"white",color:props.mode==="dark" ? "white":"#042743"}}></textarea>
                </div>
                <div className="d-flex justify-content-evenly" id="myBox">
                    <button type="submit" disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
                    <button type="submit" disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert To LowerCase</button>
                    <button type="submit" disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleGmailClick}>Generate Gmail</button>
                    <button type="submit" disabled={text.length===0} className="btn btn-success mx-1" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className="container my-3" style={{color:props.mode==="dark" ? "white":"#042743"}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the textBox to Preview here..."}</p>
            </div>
            </div>
        </>
    )
}
