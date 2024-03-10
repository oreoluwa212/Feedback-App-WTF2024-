import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import data from '../../data/reviewData';
import ReviewList from '../ReviewList';
import ReviewStats from '../ReviewStats';
import ReviewForm from '../ReviewForm';
import { FaHouseDamage } from 'react-icons/fa';

function Review() {
  const [review, setReview] = useState(data);

  const fetchData = async () => {
    try {
      let fetchedReview = localStorage.getItem('review'); // Get Review from localStorage
      setReview(JSON.parse(fetchedReview));
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // function to delete a review
  const deleteReview = (id) => {
    if (window.confirm('Are you sure, you want to delete this review?')) {
      let filteredReview = review.filter((item) => item.id !== id);
      setReview(filteredReview);
      localStorage.setItem('review', JSON.stringify(filteredReview));
    }
  };

  //  function to add a review
  const AddReview = (newReview) => {
    newReview.id = uuid();
    let newReviewArray = [newReview, ...review];
    setReview(newReviewArray);
    localStorage.setItem('review', JSON.stringify(newReviewArray));
  };

  return (
    <div className="all-reviews-container">
      <Link to={'/all-reviews'}>
        <button className="go-to">Go to All Reviews Page</button>
      </Link>
      <ReviewForm handleAdd={AddReview} />
      <div className="container">
        <ReviewStats reviews={review} />
        <ReviewList reviews={review} deleteReview={deleteReview} />
      </div>

      <div className="about-link">
        <Link to="/">
          <FaHouseDamage size={40} />
        </Link>
      </div>
    </div>
  );
}

export default Review;
