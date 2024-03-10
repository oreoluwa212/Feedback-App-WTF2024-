import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReviewList from '../ReviewList';
import { FaHouseDamage } from 'react-icons/fa';

const AllReviews = () => {
  const [review, setReview] = useState(null);

  const fetchData = async () => {
    try {
      let fetchedReview = localStorage.getItem('review'); // Get Review from localStorage
      setReview(JSON.parse(fetchedReview));
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  // function to delete a review
  const deleteReview = (id) => {
    if (window.confirm('Are you sure, you want to delete this review?')) {
      let filteredReview = review.filter((item) => item.id !== id);
      console.log(filteredReview);
      setReview(filteredReview);
      localStorage.setItem('review', JSON.stringify(filteredReview));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="all-reviews-container">
      <Link to={'/review'}>
        <button className="go-to">Go to Review Page</button>
      </Link>
      <div className="container1">
        <ReviewList reviews={review} deleteReview={deleteReview} />
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
