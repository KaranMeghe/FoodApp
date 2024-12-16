import { Button } from "../index";

const Filter = ({ handleVegClick, handleTopRatedClick }) => {
    return (
        <section id="filter">
            <article className="mx-2 flex gap-4">
                <Button className="border-2 px-4 py-1 rounded-full" handleClick={() => handleVegClick()}>🟢 Pure Veg</Button>
                <Button className={"border-2 px-4 py-1 rounded-full"} handleClick={() => handleTopRatedClick()}>⭐️ Top Reated</Button>
            </article>
        </section>
    );
};

export default Filter;