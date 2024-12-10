# Input Component

The `Input` component is a reusable form input field for text or other input types. It supports dynamic values, styling through `className`, and custom change handlers.

---

## 📝 Description

This component renders an HTML `<input>` element with the following features:

- Supports different types of input (`text`, `password`, etc.).
- Allows customization via `className` for styling.
- Handles value changes through a custom `handleChange` function.

---

## 🔧 Props

| Prop           | Type       | Description                                             |
| -------------- | ---------- | ------------------------------------------------------- |
| `type`         | `string`   | The type of the input field (`text`, `password`, etc.). |
| `value`        | `string`   | The current value of the input field.                   |
| `placeholder`  | `string`   | Placeholder text to display inside the input field.     |
| `className`    | `string`   | Additional CSS classes to style the input.              |
| `handleChange` | `function` | Callback function to handle input change events.        |

---

## 🖥️ Usage

```jsx
import Input from './Input';

const MyForm = () => {
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <form>
            <Input
                type="text"
                value={inputValue}
                placeholder="Enter something..."
                className="border p-2"
                handleChange={handleInputChange}
            />
        </form>
    );
};

## 💡 Notes
 Styling: The component uses className to apply custom styles. You can use Tailwind CSS or other styling libraries with it.
 Value Handling: The value prop is controlled by the parent component, making it easy to manage the form state.

```
