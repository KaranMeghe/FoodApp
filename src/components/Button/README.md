# Button Component

The `Button` component is a reusable and customizable button element. It supports dynamic content, styling, and click handling.

---

## 📝 Description

This component renders an HTML `<button>` element with the following features:

- Displays custom content (text, icons, or both) inside the button.
- Allows custom styles through the `className` prop.
- Executes a callback function when clicked using the `handleClick` prop.

---

## 🔧 Props

| Prop          | Type        | Description                                            |
| ------------- | ----------- | ------------------------------------------------------ |
| `children`    | `ReactNode` | The content inside the button (text, icon, etc.).      |
| `className`   | `string`    | Additional CSS classes to style the button.            |
| `handleClick` | `function`  | Callback function executed when the button is clicked. |

---

## 🖥️ Usage

```jsx
import Button from './Button';

const MyComponent = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      {/* Basic Button */}
      <Button className='primary-btn' handleClick={handleButtonClick}>
        Click Me
      </Button>

      {/* Button with an Icon */}
      <Button className='icon-btn' handleClick={handleButtonClick}>
        <SaveIcon /> Save
      </Button>

      {/* Button Without a Click Event */}
      <Button className='secondary-btn'>Cancel</Button>
    </div>
  );
};
```
