import Button from "../Button/Button";


const Modal = ({ children, className, setIsOpen }) => {
    return (
        <div className={`${className} static`}>
            <div className="absolute right-2 top-2">
                <Button handleClick={() => setIsOpen(false)} className="py-2 px-4 bg-white rounded-full">X</Button>
            </div>
            {children}
            Modal</div>
    );
};

export default Modal;