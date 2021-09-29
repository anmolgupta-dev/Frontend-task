import './App.css';
import { useState } from 'react';
import { data } from './dummyData/data';
import CollegeDescription from './Components/CollegeDescription';
import { resolveAfterFewSeconds } from './Components/util';
import Loader from './Components/Loader/Loader';

export default function App() {
  const [count, setCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const increaseCount = async () => {
    if (count < data.colleges.length) {
      setIsLoading(true);
      await resolveAfterFewSeconds(2000);
      setCount((prevState) => prevState + 10);
      setIsLoading(false);
    }
  };
  return (
    <div className="home">
      {isLoading && <Loader />}
      <span className="heading Text-Style-5">Colleges in North India</span>
      <div className="college-cards">
        {data.colleges.slice(0, count).map((college, idx) => (
          <CollegeDescription
            key={idx}
            college={college}
            count={count}
            isLast={count - 1 === idx}
            increaseCount={increaseCount}
          />
        ))}
      </div>
    </div>
  );
}
