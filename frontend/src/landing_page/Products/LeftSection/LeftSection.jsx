import React from 'react'

function LeftSection({imageUrl, title, description, tryDemo, googlePlay, appStore, learnMore}) {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageUrl} alt={title + "Image"} />
        </div>
        <div className="col-6">
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={tryDemo}>Try Demp</a>
          <a href={learnMore}>Learn More</a>
          <a href={googlePlay}><img src="/media/images/googlePlayBadge.svg" alt="" /></a>
          <a href={appStore}><img src="/media/images/appstoreBadge.svg" alt="" /></a>
        </div>
      </div>
      
    </div>
  )
}

export default LeftSection
