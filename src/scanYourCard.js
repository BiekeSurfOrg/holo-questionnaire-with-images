import { useRef, useEffect } from "react";
import Results from "./Results";
import { useRouteChange } from "./navigation";
const ScanYourCard = ({ direction = "left", result }) => {
  const routeChange = useRouteChange();

  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => routeChange("/"), 5000);
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []); // eslint-disable-line

  const handleRedirect = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    routeChange("/");
  };

  return (
    <div className="scan-your-card">
      <Results result={result} />
      <img
        src="../assets/blue_arrow.webp"
        alt="scan your card"
        className={`direction-${direction}`}
        onClick={() => handleRedirect()}
      />
    </div>
  );
};

export default ScanYourCard;
