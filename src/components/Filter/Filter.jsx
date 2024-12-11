import { Button } from "../index";

const Filter = ({ handleClick }) => {
    return (
        <section id="filter">
            <article className="mx-2">
                <Button className="border-2 px-4 py-1 rounded-full" handleClick={handleClick}>🟢 Pure Veg</Button>
            </article>
        </section>
    );
};

export default Filter;