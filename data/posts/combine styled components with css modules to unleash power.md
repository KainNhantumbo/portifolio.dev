---
topic: 'Styling'
createdAt: '2023-10-07'
title: 'Combine Styled Components with CSS Modules to Unleash Power'
excerpt: 'Styled components and CSS modules offer powerful features for managing and scaling CSS in modern web applications so  you can create a robust and maintainable CSS architecture that is both flexible and efficient. Get ready to learn more about them together.'
---

I am pretty confident that styled components and CSS modules are two powerful tools for managing and scaling CSS in modern web applications, since I have been using them in my personal projects. In this follow-up, we will explore some advanced techniques and best practices for using styled components and CSS modules to create a robust and maintainable CSS architecture.

Let's dive in already.

## Theming with Styled Components

One of the most powerful features of styled components is the feature that let us create a theme for the entire application with a few lines of code. This allows you to maintain a consistent design and make global changes easily. To use theming, you’ll need to wrap your application in a ThemeProvider component from the styled-components library and pass your theme object as a prop:

```jsx
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: 'orange',
  secondaryColor: 'yellow'
  // ...some other theme properties
};

const App = () => (
  <ThemeProvider theme={theme}>
    {/* Your application components */}
  </ThemeProvider>
);
```

Now, you can access your theme properties in your styled components by using the props theme object like this:

```jsx
const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.secondaryColor};
  // ...some other styles
`;
```

This allows you to maintain a consistent design system throughout your application and make global changes easily.

## Combining both Styled Components and CSS Modules

Styled components and CSS modules each have their own unique advantages, you can also combine them for even more powerful and flexible styling. For example, you can use CSS modules for the base styles of your components and styled components for dynamic styles based on props or themes:

```css
/* Button.module.css */
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

```jsx
// CustomButton.jsx
import styles from './Button.module.css';

const Button = styled.button`
  color: white;
  background-color: ${(props) =>
    props.primary ? props.theme.primaryColor : props.theme.secondaryColor};

  &:hover {
    background-color: ${(props) => (props.primary ? 'darkblue' : 'darkred')};
  }
`;

const CustomButton = (props) => (
  <Button className={styles.button}>{props.buttonText}</Button>
);
```

With this combination, you can leverage the strengths of both styled components and CSS modules, creating a more maintainable and scalable CSS architecture.

## Best Practices for Styled Components and CSS Modules

To get the most of styled components and CSS modules powers, we should consider the following best practices:

- Consistent naming conventions: Use a consistent naming convention for your styled components and CSS modules, such as PascalCase for styled components and camelCase for CSS modules.

- Organize your components: Organize your components and their styles in a logical folder structure, making it easier to find and maintain your code.

- Use linters and format your code: Use tools such as ESLint and Prettier to maintain consistent code style and enforce best practices across your project.

- Separate styles from components: Keep your styles separate from your component logic by creating a separate file for each styled component or CSS module.

- Optimize your components for performance: Be mindful of performance when using styled components and CSS modules. Avoid unnecessary re-renders and excessive use of props or theme variables, which lead to performance issues.

When you follow the best practices, you can ensure that your CSS codebase remains performant, maintainable, scalable and easy to understand.

Thanks for reading!
