const Arrows = ({ direction }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="#fca06a"
      style={{ transform: `rotate(${direction === "up" ? 180 : 0}deg)` }}
    >
      <path d="m12 17.586-7.293-7.293-1.414 1.414L12 20.414l8.707-8.707-1.414-1.414L12 17.586z" />
      <path d="m20.707 5.707-1.414-1.414L12 11.586 4.707 4.293 3.293 5.707 12 14.414l8.707-8.707z" />
    </svg>
  );
};

export default Arrows;
