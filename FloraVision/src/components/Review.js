import React from 'react';
import './Review.css';
import userImage1 from '../assets/profile1.png'
import userImage2 from '../assets/profile3.jpg'
import userImage3 from '../assets/profile4.png'

var reviewlist=[
  {
    userProfileImg:userImage1,
    userProfileImgAlt:'Shelly Russel',
    UserName:'Shelly Russel',
    ReviewRating:'4.5',
    ReviewDescription:'Just got my hands on some absolutely awesome plants, and I couldn’t be happier!'
  },
  {
    userProfileImg:userImage2,
    userProfileImgAlt:'Lula Rolfson',
    UserName:'Lula Rolfson',
    ReviewRating:'4.5',
    ReviewDescription:'Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.'
  },
  {
    userProfileImg:userImage3,
    userProfileImgAlt:'Carol Huels',
    UserName:'Carol Huels',
    ReviewRating:'4.5',
    ReviewDescription:"It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
  }  
];

export default function Review() {
  return (
    <div className='Review'>
       <div className='review-heading'>
          <h2>Customer Review</h2>
        </div>
      <div className='Review-displaygrid'>
        {reviewlist.map((review,index) =>(
          <div className='reviewcard' key={index}>

            <div className='review-header'>
               <img src={review.userProfileImg} alt={review.userProfileImgAlt}></img>
               <div className='review-user'>
                  <h2>{review.UserName}</h2>
                  <p>{review.ReviewRating}</p>
               </div> 
            </div>
            
            <div className='review-footer'>
              <p>{review.ReviewDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
