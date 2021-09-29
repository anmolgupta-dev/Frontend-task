import "./places.css";

export const Places = ({ nearestplaces }) => {
  return (
    <span className="nearest-place">
      <span className="badge Text-Style-1">93% Match </span>
      <span className="distance Text-Style-2">2.5kms</span> from GTB Nagar{" "}
      <span className="distance Text-Style-2">7 Kms</span> from Rajiv Chowk
    </span>
  );
};
