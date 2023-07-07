import React , {Suspense,lazy} from "react";

//dynamic import
const Cat= lazy(() => import ("../../components/Cat"));

const GeneralApp = () => {

  return (
    <>
      <Suspense fallback="Loading...">
        <Cat />
      </Suspense>
    </>
  );
};

export default GeneralApp;
