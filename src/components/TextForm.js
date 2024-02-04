import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
      // console.log("Uppercase was clicked")
      // setText("You have clicked on handleUpClick",text)
      let newtext=text.toUpperCase()
      setText(newtext)
      props.showAlert("Converted into Uppercase","success")
    }

    const handleLoClick=()=>{
      let newtext=text.toLowerCase()
      setText(newtext)
      props.showAlert("Converted into Lowercase","success")
    }

    const handleClear=()=>{
      let newtext=""
      setText(newtext)
      props.showAlert("Cleared!","success")
    }

    const handleOnChange=(event)=>{
      // console.log("onChange")
      setText(event.target.value);
    }

    const handleReverse=()=>{
      let newtext=text.split("")
      let Arr_reverse=newtext.reverse()
      let reverse=Arr_reverse.join("")
      setText(reverse)
      props.showAlert("Text have been reversed!","success")
    }

    const [text,setText]=useState("Enter text here")
  
  return (
    <>
    {/* <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}> */}
    <div className="container" style={{color:props.mode2==='success'?'green':'black',backgroundColor:props.mode2==='success'?'#5cdc5c':'white'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label for="myBox" class="form-label">Enter text</label> */}
            {/* <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="10"></textarea> */}
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode2==='success'?'#aae7ae':'white', color: props.mode2==='success'?'cornflowerblue':'black'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" style={{backgroundColor:props.mode2==='success'?'#198754':'blue'}} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" style={{backgroundColor:props.mode2==='success'?'#198754':'blue'}} onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" style={{backgroundColor:props.mode2==='success'?'#198754':'blue'}} onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-2" style={{backgroundColor:props.mode2==='success'?'#198754':'blue'}} onClick={handleReverse}>Reverse</button>
    </div>
    {/* </div> */}

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
    <h2>Your text summary</h2>
    <p>Your text have {text.split(" ").length} words and {text.length} characters </p>
    <p>{0.008 * text.split(" ").length} minutes required to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
    </div>
</>
    
  )
}
