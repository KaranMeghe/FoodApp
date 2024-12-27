import { Accordion, RenderItems } from "../index";


const CategoryAccordion = ({ title, categoryItemCards }) => {
    return (
        <Accordion title={`${title} (${categoryItemCards.length})`}>
            <RenderItems items={categoryItemCards} />
        </Accordion>
    );
};

export default CategoryAccordion;