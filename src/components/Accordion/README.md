## Accordion Component

The `Accordion` component is a reusable and customizable UI element for displaying collapsible content. It is ideal for implementing features like FAQs, expandable menus, or hidden content sections.

---

## Features

- **Collapsible Content**: Allows users to toggle content visibility by clicking on the accordion header.
- **Default State**: Supports an initial open or closed state using the `isOpenDefault` prop.
- **Smooth Transitions**: Includes animation for toggling and an arrow rotation indicator.
- **Styling Flexibility**: Easily customizable using the provided class names or additional styles.

---

## Props

| Prop            | Type        | Default Value | Description                                                           |
| --------------- | ----------- | ------------- | --------------------------------------------------------------------- |
| `title`         | `string`    | **Required**  | The heading displayed on the accordion button.                        |
| `children`      | `ReactNode` | **Required**  | The content displayed inside the accordion.                           |
| `isOpenDefault` | `boolean`   | `false`       | Determines if the accordion starts open (`true`) or closed (`false`). |

---

## Installation

1. Copy the `Accordion` component into your project.
2. Ensure you have a CSS framework or styles to match your project's design system.

---

## Usage

### Basic Example

```jsx
import Accordion from './Accordion';

const App = () => {
  return (
    <div>
      {/* Simple Accordion */}
      <Accordion title='What is React?'>
        <p>React is a JavaScript library for building user interfaces.</p>
      </Accordion>

      {/* Accordion with Default Open State */}
      <Accordion title='Why use React?' isOpenDefault={true}>
        <p>
          React is declarative, efficient, and flexible for building modern
          applications.
        </p>
      </Accordion>
    </div>
  );
};

export default App;
```

---

## Code Example

Here’s the complete implementation of the `Accordion` component:

```jsx
import { useState } from 'react';

const Accordion = ({ title, children, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='border rounded-lg shadow mb-4'>
      <button
        onClick={toggleAccordion}
        className='w-full flex justify-between items-center px-4 py-3 bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300'>
        <span className='font-medium'>{title}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className='px-4 py-3 bg-white text-gray-700 border-t'>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
```

---

## Customization

- **Styling**: You can update the styles by modifying the class names used in the component or by passing additional CSS classes.
- **Behavior**: Extend the functionality by introducing additional props or event handlers.

---
