import React, { useState, useEffect } from 'react';
import './ChronosScheduler.css';

const images = ["/C1.png", "/C2.png", "/C3.png"];

const ChronosScheduler = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chronos-container">
      <div className="image-tile">
        <img src={images[currentImageIndex]} alt="Chronos App" className="tile-image" />
      </div>
      <div className="content-section">
        <h1>
          <a href="https://chronos-lums.vercel.app" target="_blank" rel="noopener noreferrer" className="chronos-link"> Try Chronos App!</a>
        </h1>
        <h2>Course Scheduler</h2>
        <p>
          Every semester, as enrollment approaches, a palpable atmosphere of anxiety descends upon the student body. The lack of up-to-date and user-friendly tools for course planning often leaves students struggling to organize their academic schedules effectively.
          Recognizing this challenge, I took the initiative to develop Chronos - a streamlined course scheduler designed to alleviate the stress of enrollment. It incorporates the latest class schedule updates and features an intuitive select-and-drop interface, significantly simplifying the course selection process for students.
        </p>
        <p>
          The impact of Chronos was immediate and substantial. Within the first three days of its launch, the app garnered over 1,000 site visits from my university alone, demonstrating its value and filling a critical need in our academic community.
          In the coming days I plan to implement a schedule sync functionality, allowing students to effortlessly add their course schedules to their device's calendar app with just one click. 
        </p>
      </div>
      <hr className="separator" />
      <div className="content-section">
        <div className="stack-github">
          <div className="stack">
            <h2>Stack</h2>
            <p>Next.js, Tailwind.css, MongoDB, Express.js, React.js, Node.js</p>
          </div>
          <div className="github">
            <h2>Repository</h2>
            <p>
              <a href="https://github.com/AhmadUmar6/chronosapp" target="_blank" rel="noopener noreferrer" className="github-link">Github Repository</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChronosScheduler;
