import React,{useState} from 'react'

export default function Kidda() {
    const [ myStyle, setMyStyle ] = useState( {
        color: 'white',
        backgroundColor:'black'
    } )
    const [ btnText, setBtnText ] = useState( 'Enable light mode 2' )
    const [headingText, setHeadingText] = useState('Ayush Yadav Light Mode On')
    
    let onC = () => {
        if ( myStyle.color === 'white' )
        {
            setMyStyle( {
                color: 'black',
                backgroundColor: 'white'
            } )
            setBtnText( 'Enable dark mode' )
            setHeadingText( 'Ayush Yadav Light Mode On' )
        }
        else
        {
            setMyStyle( {
                color: 'white',
                backgroundColor: 'black'
            } )
            setBtnText( 'Enable light mode' )
            setHeadingText('Yogendra Manawat Dark Mode On')
            }
    }
  return (
      <>
          <div className='container my-3' style={myStyle}>
              <h1>{headingText}</h1>
              <div class="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
                  <div class="accordion-item" style={myStyle}>
                      <h2 class="accordion-header" id="flush-headingOne">
                          <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              Accordion Item #1
                          </button>
                      </h2>
                      <div id="flush-collapseOne" style={myStyle} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                      </div>
                  </div>
                  <div class="accordion-item" style={myStyle}>
                      <h2 class="accordion-header" id="flush-headingTwo">
                          <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                              Accordion Item #2
                          </button>
                      </h2>
                      <div id="flush-collapseTwo" style={myStyle} class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                      </div>
                  </div>
                  <div class="accordion-item" style={myStyle}>
                      <h2 class="accordion-header" id="flush-headingThree">
                          <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                              Accordion Item #3
                          </button>
                      </h2>
                      <div id="flush-collapseThree" style={myStyle} class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                      </div>
                  </div>
              </div>
              <button type='button' className='btn btn-primary my-2' onClick={onC}>{btnText}</button>
          </div>
      </>
  )
}
