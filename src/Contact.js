import React from 'react'

const Contact = () => {
  return (
    <div>
      <div>
        <h1 style={{textalign: 'center'}}>CONTACT INFORMATION</h1>
    </div>

    <div class="container" id="Contact">
        <div class="row" style={{backgroundColor: 'tomato'}}>
            <div class="col-3">
                <b>Contact</b>
                <ul>
                    <li class="list-group-item"><strong>Email:</strong> info@example.com</li>
                    <li class="list-group-item"><strong>Phone:</strong> +1 (123) 456-7890</li>
                </ul>
            </div>
            <div class="col-3">
                <b>Map</b>
                <ul>
                    <p>
                        <span class="glyphicon">&#xe062;</span>
                        <a href="/"><u>Smart Watch Showroom</u></a>
                    </p>
                    <p>
                        Details mentioned and Google link also
                    </p>
                </ul>
            </div>
            <div class="col-3">
                <b>ADDRESS</b>
                <ul>

                    <li class="list-group-item"><strong>Address:</strong> <span style={{color:'black'}}>123 Main
                            St,</span><span style={{color:'blue'}}>Banglore</span>
                        <span style={{color:'black'}}>, Country</span>
                    </li>
                </ul>
            </div>
            <div class="col-3">
                <b>Openings</b>
                <ul>
                    <li class="list-group-item"><strong><span style={{color:'black'}}>Monday</span></strong></li>
                    <li class="list-group-item"><strong><span style={{color:'black'}}>Wednesday</span></strong></li>
                    <li class="list-group-item"><strong><span style={{color:'black'}}>Thrusday</span></strong></li>
                    <li class="list-group-item"><strong><span style={{color:'black'}}>Friday</span></strong></li>
                    <li class="list-group-item"><strong><span style={{color:'black'}}>Saturday</span></strong></li>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
