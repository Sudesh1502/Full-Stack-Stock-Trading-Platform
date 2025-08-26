import React from 'react'

function Hero() {
  return (
    <>
    <div className='container p-5 mb-4'>
        <div className="row text-center">
            <img src="media/images/homeHero.png" alt="Hero Image"  className='mb-5'/>
            <h1 className='mt-5'>Invest in EvryThing</h1>
            <p>Online platfrom to invest in stocks, derivatives, mutual funds and more.</p>
            <button className='btn btn-primary' style={{width: "20%", margin: "0 auto"}}>Signup Now</button>
        </div>
    </div>
    </>
  )
}

export default Hero
