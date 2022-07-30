import React from 'react';
import './style.scss';
import images from '../../../img';

export default function MktTop() {
  return (
    <div className="mktTop"> 
      <img src={ images.mkt } alt="mkt-top" />
    </div>
  )
}
