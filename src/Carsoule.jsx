import React from 'react'

const Carsoule = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://images.pexels.com/photos/1334602/pexels-photo-1334602.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    style={{width: '40px', height: '500px'}} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    style={{width: '40px', height: '500px'}} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    style={{width: '40px', height: '500px'}} class="d-block w-100" alt="..."/>
            </div>

            <div class="carousel-item">
                <img src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    style={{width: '40px', height: '500px'}} class="d-block w-100" alt="..."/>
            </div>

            <div class="carousel-item">
                <img src="https://images.pexels.com/photos/6373220/pexels-photo-6373220.jpeg?auto=compress&cs=tinysrgb&w=1600"
                   style={{width: '40px', height: '500px'}} class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
  )
}

export default Carsoule
