import React, { useState } from 'react'

export default function Textform(props) {
    const [text, settext] = useState("");
    // settext("the new text")
    const [cptext, setcptext] = useState("copy")
    const handleupclick = () => {                   //this function trigged when button clicked
        // console.log("you clicked the upper case button")
        const uptext = text.toUpperCase()
        settext(uptext)
    }
    const handlelwclick = () => {
        // console.log("you clicked the lower case button")
        const lwtext = text.toLowerCase()
        settext(lwtext)
    }
    const handleldllick = () => {
        // console.log("text is deleted")
        settext("")
    }


    const handleonchange = (event) => {  // buy using this function you can change the value in the box
        // console.log("the handle is changed")
        settext(event.target.value)
    }//changing the value of text using settex


    const handlecopy = () => {     //function to copy text using copy button
        if (text === "") {
            alert("Enter the text first to copy")
            setcptext("copy")
        }
        else {

            let cp = document.getElementById("field")
            cp.select()
            navigator.clipboard.writeText(cp.value)
            document.getSelection().removeAllRanges();
              setcptext("copied !")
        }
    }






    return (
        <>
            <div style={props.dkmode} className='mt-5'>


                {/* the heading of website */}
                <div className="heading text-3xl font-bold flex justify-center m-6 my-4">
                    <h1>{props.heading}</h1>
                </div>
                <div>
                    {/* the input box is here  */}
                    <div className="box flex space-x-2 justify-center items-center flex-col mt-4 ">
                        <textarea id='field' className="border-2 w-[20rem] h-[5rem] md:w-[50rem] mdh-[10rem] border-emerald-400" style={{ backgroundColor:props.dkmode==='dark'?'dark':'white',color:props.dkmode==='dark'?'white':'black'}}rows="2" onChange={handleonchange} value={text}></textarea>
                    </div>
                </div>
                {/* the button section is here */}
                <div className="btn flex justify-center flex-wrap mt-4 ">
                    <button className='upperbtn bg-indigo-700 text-white space-y-2 p-2 m-2 rounded-xl' onClick={handleupclick}>convert to uppercase</button>
                    <button className='lowerbtn bg-indigo-700 text-white space-y-2 p-2 m-2 rounded-xl' onClick={handlelwclick}>convert to lowercase</button>
                    <button className='lowerbtn bg-indigo-700 text-white space-y-2 p-2 m-2 rounded-xl' onClick={handleldllick}>delete all text</button>

                    <button className='lowerbtn bg-indigo-700 text-white space-y-2 p-2 m-2 rounded-xl' onClick={handlecopy}>{cptext}</button>
                </div>
                <div className="container flex flex-col justify-center items-center">
                    <h1 className=' text-3xl my-2'>Your Text Summary</h1>
                    <p> words : {text.split(" ").filter((el)=>{return el.length!==0}).length} and charactors : {text.length}</p>
                </div>
                {/* <h1>previwe</h1>// prevewie function to get preview as output
                <p>{text}</p> */}
            </div>
        </>
    )
}

// 1=> add differenrt functionality to this app
