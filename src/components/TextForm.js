import React, {useState} from 'react'

//React component
export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let uppperCase = text.toUpperCase();
        setText(uppperCase)
    }

    const handleLowClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let lowerCase = text.toLowerCase();
        setText(lowerCase)
    }

    // adding event listener(event in parameter) helps to change the value of text field which we give input
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleClearText = ()=>{
        console.log("The text is cleared");
        let txt = '';
        setText(txt);
    }

    const handleReplaceText = ()=>{
        let txt = text.replaceAll('a','@');
        setText(txt);
    }

    const handleCopy= ()=>{
       // let txt = text.replaceAll('a','@');
       var text = document.getElementById("myBox");
       text.select();
        navigator.clipboard.writeText(text.value);
    }



    // State of a component is defined by "const[text, setText] = useState("Enter text here")" below
    // text is a variable, setText is the function used to change the variable "text" value
    // useState("Enter text here") assigns default value to text variable as "Enter text here"
    const[text, setText] = useState("");
    //setText("new text");
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                {/*one curly brace in 'style' is for javascript and another is for object */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleReplaceText}>Replace Letter 'a'</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
