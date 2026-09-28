import React,{useState} from 'react'

export default function About(props) {
    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
        // border:'1px solid',
        // borderColor:props.mode==='dark'?'white':'#042743',
    }
  
    // const [myStyle,setMyStyle]=useState({
    //         color:'black',
    //         backgroundColor:'white'
            
    // });
    // const[btntext,setBtnText]=useState("Enable Dark Mode")

    // const toggleStyle=()=>{
    //     if( myStyle.color==='black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         });
    //         setBtnText("Enable Light Mode")
    //         }
    //         else {
    //             setMyStyle({
    //                 color:'black',
    //                 backgroundColor:'white'
    //             })
    //             setBtnText("Enable Dark Mode")
    //         }
    //     }
        
    return(
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='my-3'>About us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item"style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <strong>Analyize Your Text</strong> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample"style={myStyle}>
                <div className="accordion-body"style={myStyle}>
                    <strong>This is (analyize your text) body.</strong>Textutils gives you a way to analyize your text quickly and efficiently.be it word count,character count or
                </div>
                </div>
            </div>
            <div className="accordion-item"style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong>Free To Use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle}style={myStyle}>
                    <strong>This is the (Free to use) body.</strong> Textutils is a free to use tool used to count text characters&word count for a static text textutils reports the number of words and characters.thus it is useful for writing text with word/character limits.
                </div>
                </div>
            </div>
            <div className="accordion-item"style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong>Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle}>
                    <strong>This is the third (browser compatible) body.</strong> this word counter software works in any  web browser such as chrome,internet/n explorer,opera , firefox. it suits to count words on blogs facebook books  excel document pdf document etc.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggleStyle}type="button" className="btn btn-primary">{btntext}</button>
        </div> */}
    </div>
  )
}
