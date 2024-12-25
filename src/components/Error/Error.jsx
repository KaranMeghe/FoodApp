import Button from "../Button/Button";
import { Link, useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();

    return <>
        <section className="flex flex-col justify-center items-center h-96 gap-4">
            <div className="text-center">
                <p>{error.data}</p>
                <p>{error.status} {error.statusText}</p>
            </div>
            <Button className="border-2 p-2 shadow-xl"> <Link to="/">Go Home</Link> </Button>
        </section>
    </>;
};
export default Error;