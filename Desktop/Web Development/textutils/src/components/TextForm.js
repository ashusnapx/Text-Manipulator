import React, { useState } from 'react'

export default function TextForm( props ) {
    const handleUpClick = () => {
        console.log( `Uppercase was clicked ⬆️` );
        let newText = text.toUpperCase();
        setText( newText );
        props.showAlert(`Converted to Uppercase ⬆️`,'success')
    }
    const handleLoClick = () => {
        console.log( `Lowercase was clicked ⬇️` );
        let newText = text.toLowerCase();
        setText( newText );
        props.showAlert( `Converted to Lowercase ⬇️`, 'success' )
    }
    const handleReClick = () => {
        console.log( `Text was cleared 🆑` );
        let newText = '';
        setText( newText );
        props.showAlert( `Text Area cleared 🆑`, 'success' )
    }
    const handleCopy = () => {
        console.log( `Copied to clipbaord 🗒️` );
        let text = document.getElementById( "myBox" );
        text.select();
        navigator.clipboard.writeText( text.value );
        props.showAlert( `Copied to clipboard 🗒️`, 'success' )
    }
    const handleRemoveSpaces = () => {
        console.log( `Extra spaces will be removed 👩‍🚀` );
        let newText = text.split( /[ ]+/ );
        setText( newText.join( " " ) );
        props.showAlert( `Irrelevant spaces removed 👩‍🚀`, 'success' )
    }

    const handleOnChange = ( event ) => {
        console.log( `On change` );
        setText( event.target.value );
    }
    const [ text, setText ] = useState( '' );
    return (
        <>
            <div className={`container text-${ props.mode === 'light' ? '#42743' : 'light' }`}>
                <h1><sytong>{props.heading}</sytong></h1>
                <div className="mb-3">
                    <textarea className={`form-control background:${ props.mode === 'light' ? 'grey' : 'white' }`}
                        id="myBox" onChange={handleOnChange} value={text} placeholder="Enter text" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleReClick}>
                    Reset
                </button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>
                    Copy to clipboard
                </button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>
                    Remove extra spaces
                </button>
            </div>

            <div className={`container my-3 text-${ props.mode === 'light' ? '#42743' : 'light' }`}>
                <h1>Your text summary</h1>
                <p>Your text has {text.split( " " ).length} words and {text.length} characters.</p>
                <p>You'll need {0.008 * text.split( " " ).length} minutes to read this text</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:`Enter something in text area to preview!`}</p>
            </div>
        </>
    )
}
