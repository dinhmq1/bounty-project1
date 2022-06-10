import ClipLoader from 'react-spinners/ClipLoader'
import React from 'react'

const Loader = () => 
  <div className='full-page-loader'>
    <ClipLoader
      sizeUnit={"px"}
      size={150}
      color={'blue'}
      loading={true}
    />
  </div> 

export default Loader
