import React, { createContext, useContext, useState } from "react";

const ReviewsContext = createContext();

export const useReviews = () => {
  return useContext(ReviewsContext);
};

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      setReviews((prevReviews) => prevReviews.filter((item) => item.id !== id));
    }
  };

  const addReview = (newReview) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
  };

  return (
    <ReviewsContext.Provider value={{ reviews, deleteReview, addReview }}>
      {children}
    </ReviewsContext.Provider>
  );
};
