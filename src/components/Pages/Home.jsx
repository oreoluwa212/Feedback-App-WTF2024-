import React, { useEffect } from 'react';
import Button from '../layout/Button';
import { useNavigate, Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';
import data from '../../data/reviewData';

function Home() {
  const navigate = useNavigate();

  // Function to load data and store in localStorage
  const loadData = async () => {
    try {
      let review = localStorage.getItem('review');
      if (!review) {
        localStorage.setItem('review', JSON.stringify(data)); // Store in localStorage
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []); // Empty dependency array ensures loadData runs only once on mount

  return (
    <>
      <div className="container">
        <div className="card">
          <h1 className="head">Welcome to Group B Company</h1>
          <p>Thank you for using our product</p>
          <p>
            We would like you to give a review about your last experience using
            our product
          </p>
          <br />
          <br />
          <Button
            type="button"
            variant="secondary"
            onClick={() => navigate('/review')}
          >
            Review
          </Button>
        </div>
        <div className="about-link">
          <Link to="/about">
            <FaQuestionCircle size={40} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
