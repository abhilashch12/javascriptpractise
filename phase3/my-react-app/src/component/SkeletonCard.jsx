import "../App.css";
function SkeletonCard() {
  return (
    <div
      style={{
        height: "60px",
        background:
          "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
        borderRadius: "8px",
        marginBottom: "10px"
      }}
    />
  );
}
export default SkeletonCard;