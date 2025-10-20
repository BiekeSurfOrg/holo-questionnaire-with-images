// import { useRef, useEffect } from "react";
// import Results from "./Results";
// import { useRouteChange } from "./navigation";
const ScanYourCard = ({ direction = "left", result, restartGame }) => {
  // const routeChange = useRouteChange();

  // const timeoutRef = useRef(null);

  // useEffect(() => {
  //   timeoutRef.current = setTimeout(() => routeChange("/"), 5000);
  //   return () => {
  //     timeoutRef.current && clearTimeout(timeoutRef.current);
  //   };
  // }, []); // eslint-disable-line

  // const handleRedirect = () => {
  //   timeoutRef.current && clearTimeout(timeoutRef.current);
  //   routeChange("/");
  // };

  return (
    <div className="scan-your-card">
      {/* <Results result={result} /> */}
      {result === 5 ? (
        <div className="result">
          <h2>Score: {result}/5</h2>
          <div>
            {/* {splitSentence.map((sentence, index) => <p key={`${score}-${index}`}>{sentence}</p>)} */}
            <h4>You won!</h4>
            <p>Great skills...</p>
            <p>Scan the QR code and fill in your name!</p>
            <p>QR code.</p>
          </div>
          <img
            src="../assets/QRcode.jpeg"
            alt="scan your card"
            // className={`direction-${direction}`}
            // onClick={() => restartGame()}
          />
        </div>
      ) : (
        <div className="result">
          <h2>Score: {result}/5</h2>
          <div>
            <h4>Too bad...</h4>
            <p>You made some mistakes!</p>
            <p>Do better next time.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanYourCard;
