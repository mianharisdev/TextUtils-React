import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+ text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success")
    }

    const handleLowClick=()=>{
        console.log("Lowercase was Clicked" + text)
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to lowercase","success")

    }

    const handleClearClick=()=>{
        console.log("Text is Cleared" + text)
        let newtext='';
        setText(newtext)
        props.showAlert("text is cleared","success")

    }
     const handleOnChange=(event)=>{
        console.log("on change") ;
        setText(event.target.value);

     };

     const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("coped to clipboard","success")

     }

     const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("extre spaces have been removed","success")

     }

    const[text,setText]=useState('');

    return (
        <>
        <div className='container' style={{color:props.mode === 'dark' ? 'white':'gray'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'gray':'white' ,color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-4"onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-4"onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-4"onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-4"onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-4"onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color:props.mode === 'dark' ? 'white':'#042743'}}>
            <h1>your Text Summery</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}minutes read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"Enter Something in The Textbox Above To Preview Here"}</p>
        </div>
        </>
  )
}


