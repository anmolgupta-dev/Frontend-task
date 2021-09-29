import '../App.css';
import collegeImage from '../assets/images/college_02.jpg';
import { Rating } from './Rating/Rating';
import { NearbyPlaces } from './NearbyPlaces/NearbyPlace';
import { Places } from './Places/Places';
import useOnScreen from '../CustomHook/useOnScreen';

const CollegeDescription = ({ college, count, increaseCount, isLast }) => {
  const lastBookElementRef = useOnScreen(count, increaseCount);
  return (
    <div className="college-card" ref={isLast ? lastBookElementRef : null}>
      <img src={collegeImage} className="college-image" alt="College_Name" />
      {college.promoted && (
        <span className="promoted-tag">
          <span className="promoted-tag-text">PROMOTED</span>
        </span>
      )}
      <span className="rating-tag rating-tag-text">
        <span className="rating">3.9</span>/5 <div>Very Good</div>{' '}
      </span>
      <span className="tag-1">
        <span className="tag-1-text">{college.tags[0]}</span>
      </span>
      <span className="tag-2">
        <span className="tag-2-text">{college.tags[1]}</span>
      </span>
      <span className="tag-3-text">{'#' + college.ranking}</span>
      <div className="college-body">
        <span className="college-name">{college.college_name}</span>
        <Rating rating={college.rating} />
        <NearbyPlaces collegenear={college.nearest_place} />
        <Places nearestplaces={college.famous_nearest_places} />
        <div className="pill-2">
          <span className="pill-2-text">{college.offertext}</span>
        </div>
        <div className="original-price">&#8377;{college.original_fees}</div>
        <span className="discount-tag">20</span>
        <div className="discounted-price">&#8377;{college.discounted_fees}</div>
        <div className="fees">{college.fees_cycle}</div>
        <div className="amenities">
          {college.amenties[0]}
          {' . '}
          {college.amenties[1]}
        </div>
      </div>
    </div>
  );
};

export default CollegeDescription;
