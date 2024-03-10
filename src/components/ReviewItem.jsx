import { FaTimes } from "react-icons/fa"

function ReviewItem({review, deleteReview}) {



  return (
    <div >
      <div className="review-card">
        <div className="num-display">{review.rating}</div>
        <div className="review-text">{review.text}</div>
        <button className="close" onClick={()=>deleteReview(review.id)}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default ReviewItem
