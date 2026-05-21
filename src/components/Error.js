import { useRouteError } from "react-router-dom";

const Error = () => {

 const err = useRouteError();
  

    return (
        <div> 
            <h1> OOPS!!!!!!!!</h1>
            <h2> Seems like you are LOST!</h2>
            <h1> {err.status}</h1>
            <h4>{err.statusText}</h4>
        </div>
    );
};

export default Error;