import React, { useState }  from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Feedback from '../Feedback/Feedback';


const Feedbacks = () => {
  const [review , setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReview(data)
        })
    },[])
  return (
    <section>
      <h1 className="text-center mt-5 pt-5">Clients <span style={{color: '#7AB259'}}>Feedback</span></h1>
      
      <div className="row container ml-auto mr-auto p-5 mb-5">
        {
          review.map(feedback => <Feedback key={review._id} feedback={feedback}></Feedback>)
        }
      </div>
    </section>
  );
};

export default Feedbacks;