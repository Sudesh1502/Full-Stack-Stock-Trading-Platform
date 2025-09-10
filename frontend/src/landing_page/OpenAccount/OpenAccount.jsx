import React from 'react'
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
  const navigate = useNavigate();
  
  return (
    <div className='container p-5 mb-4 mt-5'>
        <div className="row text-center">
            <h1 className='mt-5'>Open a Zerodha account</h1>
            <p>Modern platforms and apps, $0 investment, and flat $20 Intraday and F&O trade.</p>
            <button className='btn btn-primary' onClick={()=>{
              navigate("/signup");
            }} style={{width: "20%", margin: "0 auto"}}>Sign up Now</button>
        </div>
    </div>
  )
}

export default OpenAccount
