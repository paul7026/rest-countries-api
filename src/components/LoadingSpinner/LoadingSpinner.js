import { TailSpin } from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <>
      <TailSpin
        height='80'
        width='80'
        color='#4fa94d'
        ariaLabel='tail-spin-loading'
        radius='1'
        wrapperStyle={{ position: "absolute", top: "50%", left: "50%" }}
        visible={true}
      />
    </>
  );
}

export default LoadingSpinner;
