import React, { useState, useEffect } from 'react';
import './Forum.css';
import { db } from '../firebase'; // import your db
import { collection, addDoc, onSnapshot } from 'firebase/firestore'; // Firestore functions

const Forum = () => {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Real-time listener to questions collection
    const unsubscribe = onSnapshot(collection(db, 'questions'), (snapshot) => {
      const fetchedQuestions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setQuestions(fetchedQuestions);
    });

    return () => unsubscribe(); // cleanup listener when component unmounts
  }, []);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (question.trim()) {
      try {
        // Add question to Firestore
        await addDoc(collection(db, 'questions'), {
          title: question,
          tags: "Uncategorized",
          answers: 0
        });
        setQuestion(''); // clear input
        setSubmitted(true); // show thank you message
      } catch (error) {
        console.error("Error adding document: ", error);
        alert('Failed to submit question.');
      }
    } else {
      alert("Please enter a question before submitting.");
    }
  };

  return (
    <div className="forum">
      <h2>Anonymous Help Forum</h2>
      <p>Ask a New Question</p>

      {/* Display the list of questions */}
      <div className="questions-list">
        {questions.map((q, index) => (
          <div className="question" key={q.id || index}>
            <h3>{q.title}</h3>
            <p>Tags: {q.tags}</p>
            <p>{q.answers} Answers</p>
            <button>View Answers</button>
          </div>
        ))}
      </div>

      {/* New question submission form */}
      {submitted ? (
        <p className="thank-you-message">
          Thank you for your submission. A mentor will respond soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={question}
            onChange={handleQuestionChange}
            placeholder="Type your question here..."
            rows="5"
            cols="50"
            required
          />
          <br />
          <button type="submit">Submit Question</button>
        </form>
      )}
    </div>
  );
};

export default Forum;
