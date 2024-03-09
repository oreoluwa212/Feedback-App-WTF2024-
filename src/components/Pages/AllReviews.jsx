import React, { useState } from "react";
import data from "../../data/reviewData"

import { Link, useParams } from "react-router-dom";
import ReviewList from "../ReviewList";
import ReviewForm from "../ReviewForm";
import ReviewStats from "../ReviewStats";
import { FaHouseDamage } from "react-icons/fa";

const AllReviews = () => {

   const [review, setReview] = useState(data);


  return (
    <div className="all-reviews-container">
      <Link to={"/review"}>
        <button className="go-to">Go to Review Page</button>
      </Link>
      <div className="container1">
        <ReviewList reviews={review} />
        <ReviewList reviews={review} />
        <ReviewList reviews={review} />
      </div>

      <div className="about-link">
        <Link to="/">
          <FaHouseDamage size={40} />
        </Link>
      </div>
    </div>
  );
};

export default AllReviews;
