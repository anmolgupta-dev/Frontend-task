import "./rating.css";

export const Rating = ({ rating }) => {
  return (
    <span className="college-rating">
      <span className="material-icons-outlined rated">star</span>
      <span className="material-icons-outlined rated">star</span>
      <span className="material-icons-outlined rated">star</span>
      <span className="material-icons-outlined rated">star</span>
      <span className="material-icons-outlined unrated">star</span>
    </span>
  );
};
