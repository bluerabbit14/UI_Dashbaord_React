import React from 'react';
import './TopSelling.css';
import basket from '../assets/bag.png';
import plant1 from '../assets/plant01.png';
import plant2 from '../assets/plant02.png';
import plant3 from '../assets/plant03.png';
import plant4 from '../assets/plant04.png';
import plant5 from '../assets/plant05.png';
import plant6 from '../assets/plant06.png';

var topselling= [
  {
    plantImg:plant1,
    plantImgAlt:'Aglaonema plant',
    plantName:'Aglaonema plant',
    plantDescription:'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
    plantPrice:'Rs. 300/-'
  },
   {
    plantImg:plant2,
    plantImgAlt:'Plantain Lilies',
    plantName:'Plantain Lilies',
    plantDescription:'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
    plantPrice:'Rs. 380/-'
  },
  {
    plantImg:plant3,
    plantImgAlt:'Cactus',
    plantName:'Cactus',
    plantDescription:'It is known for their ability to thrive in arid environments',
    plantPrice:'Rs. 259/-'
  },
  {
    plantImg:plant4,
    plantImgAlt:'Swiss cheese Plant',
    plantName:'Swiss cheese Plant',
    plantDescription:'It is a popular tropical houseplant known for its distinctive, perforated leaves',
    plantPrice:'Rs. 400/-'
  },
  {
    plantImg:plant5,
    plantImgAlt:'Sansevieria plant',
    plantName:'Sansevieria plant',
    plantDescription:'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    plantPrice:'Rs. 450/-'
  },
  {
    plantImg:plant6,
    plantImgAlt:'Agave plant',
    plantName:'Agave plant',
    plantDescription:'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
    plantPrice:'Rs. 359/-'
  }  
];

export default function TopSelling() {
  return (
    <div className='TopSelling'>
      <div className='TopSelling-heading'>
        <h2>Our Top Selling Plants</h2>
      </div>
      <div className='TopSelling-displaygrid'>

        {topselling.map((plant,index) =>(
          
          <div className='plantcard' key={index}>
            <img src={plant.plantImg} alt={plant.plantImgAlt}></img>
            <h2>{plant.plantName}</h2>
            <p>{plant.plantDescription}</p>
            <div className='card-footer'>
                <p>{plant.plantPrice}</p>
                <div className='card-addbasket'>
                  <img src={basket} alt='Add to basket'></img>
                </div>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}
