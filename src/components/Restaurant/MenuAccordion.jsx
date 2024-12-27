import { Accordion, CategoryAccordion, RenderItems } from '../index';

const MenuAccordion = ({ title, itemCards, categories }) => {
    return (
        <Accordion key={title} title={`${title} ${itemCards.length ? `(${itemCards.length})` : ""}`}>
            {categories.length > 0 ?
                categories.map((cat, idx) => (
                    <CategoryAccordion key={`${title}-${idx}`} title={cat.title} categoryItemCards={cat.itemCards || []} />
                )) : (
                    <RenderItems items={itemCards} />
                )}
        </Accordion>
    );
};

export default MenuAccordion;;;