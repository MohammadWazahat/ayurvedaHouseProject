
import './PopUp.css'
import PraiseButton from './praiseButton/PraiseButton';
import StarRating from './star-rating/StarRating'
import ToggleLikeButton from './toggleButton/ToggleLikeButton'
import { ImCross } from "react-icons/im";

function PopUp() {


  return (
    <>
    <div className='px-10 py-20 bg-slate-700'>
    <div className='outerBox flex flex-col border-2 border-red-500 rounded-3xl bg-slate-100 p-4'>
      <div><ImCross /></div>
      <div className='text-3xl font-bold'>Leave a Review</div>
      <div>
        <div className='headings'>Safety</div>
        <div>Lorem ipsum dolor sit amet,</div>
        <StarRating noOfStars={5}/>
      </div>
      <div>
        <div className='headings'>Communication</div>
        <div>Lorem ipsum dolor sit amet,</div>
        <StarRating noOfStars={5}/>
      </div>
      <div>
        <div className='headings'>Would you recommend Trausti ?</div>
        <div>Lorem ipsum dolor sit amet,</div>
        <ToggleLikeButton/>
      </div>
      <div>
        <div className='headings'>Praise</div>
        <div>Lorem ipsum dolor sit amet,</div>
        <PraiseButton/>
      </div>
 
 
    </div>
    </div>


    </>
  )
}

export default PopUp


