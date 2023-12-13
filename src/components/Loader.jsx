import { RotatingLines } from "react-loader-spinner";
export const Loader = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="200"
        visible={true}
      />
    </div>
  );
};
