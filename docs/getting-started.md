# Getting Started with React Testing using React Testing Library

## Introduction

Welcome to this **beginner's guide to React testing** using [React Testing Library](https://testing-library.com/). Whether you're just starting your journey with React or looking to enhance your testing skills, this article is here to provide you with a solid foundation in the world of React testing.

In the realm of web development, testing is not just a good practice that is typically overlooked - **_it's an essential requirement_**. It ensures the reliability and stability of your applications and helps you catch issues early in the development process.

I've chosen to spotlight React Testing Library because of its widespread popularity and its unique approach to testing, which places a strong emphasis on **writing tests from the user's perspective**. Having worked on various React projects in the past few years, I've often found a lack of concise and straightforward guides for using React Testing Library that can be easily digested in a short amount of time. That's why I created the Flower Shop app and wrote this article.

In this guide, I have organised the content in four sections:

- Section 1: Introduction to React Testing Library
- Section 2: Getting started with React Testing Library
- Section 3: Best practices for testing with React Testing Library

## Section 1: Introduction to React Testing Library

[React Testing Library](https://testing-library.com/) is a renowned testing framework for React applications that has taken the world of front-end development by storm. It's gained immense popularity for its unique approach to testing and its **focus on writing tests from the user's perspective**.

Unlike traditional testing libraries that delve into implementation details like [Enzyme](https://enzymejs.github.io/enzyme/), React Testing Library encourages developers to think like users. It places an emphasis on simulating real user interactions, such as clicking buttons, entering text, and navigating the application, rather than just verifying code behavior.

This user-centric philosophy not only leads to more intuitive and reliable tests but also aligns closely with the principles of **accessibility** and **inclusivity**. React Testing Library's accessibility-first approach makes it a powerful tool for creating applications that can be used by a wide range of people, regardless of their abilities.

### Enzyme vs. React Testing Library

You may have heard of other testing libraries like [Enzyme](https://enzymejs.github.io/enzyme/) and wonder how React Testing Library compares to them. In essence, React Testing Library and Enzyme are both well-known testing libraries for React applications, but they each come with distinct approaches and philosophies.

|                   | Enzyme                                                                                                                                                                                                                                                                                | React Testing Library                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Testing approach  | Focus on the **internal implementation details**. It allows you to shallow or mount render components and interact with their state and lifecycle methods directly. It provides tools for asserting the structure of component hierarchies e.g. **child components and their props**. | Focus on **users**. It focuses on testing components as users interact with them and emphasises testing **how the components behave** rather than how they're implemented. It encourages testing for **accessibility**. |
| API complexity    | More extensive API with various methods for querying components, including `find`, `filter`, and `contains`.                                                                                                                                                                          | Simplified and more user-focused API with query methods for selecting elements by their role, label, or text content.                                                                                                   |
| Mocking           | Extensive features for easily mocking components and their dependencies.                                                                                                                                                                                                              | Minimal mocking of components and dependencies.                                                                                                                                                                         |
| Shallow rendering | Shallow rendering allows you to test a component in isolation, excluding its child components.                                                                                                                                                                                        | No concept of shallow rendering. Instead, it renders components in a more integrated way, like how a user would experience them.                                                                                        |

In summary, React Testing Library is more focused on encouraging user-centric testing, simplicity, and accessibility. It's well-suited for those who want to write tests that closely resemble how users interact with their applications.

On the other hand, Enzyme offers greater flexibility and control over testing details, making it a choice for developers who need to test specific implementation aspects of their components.

The choice between Enzyme and React Testing Library often depends on your project's needs, your testing philosophy, and the level of control you require over the testing process. Personally, I prefer React Testing Library because of its simplicity. It makes my test looks so much cleaner and easier to understand. After all, I'm a simple person 😆

## Section 2: Getting started with React Testing Library

### Basic setup for testing with React Testing Library

Before we can start reaping the benefits of React Testing Library, we need to set up our testing environment. Luckily, the process is pretty straightforward. Here's a basic overview of the steps involved:

1. **Create a new React project**: If you don't have an existing project, you can create using one of the [recommended production-grade frameworks](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks). Note: In my **Flower Shop App** I had used **Create React App** (`npx create-react-app some-app`) however my dear colleague **_Anthony Simmons_** pointed me that this was not production-grade 😣
1. **Install dependencies**: To use React Testing Library, you need to install the required dependencies. These typically include `@testing-library/react` and `@testing-library/jest-dom`. Ensure you have `Jest` installed as well, as it serves as the testing framework. Refer to this [package.json](../client/package.json).
1. **Write your first test**: With the setup in place, you're ready to write your first test using React Testing Library. Woo!!!

### Why the use of Jest as the testing framework?

Before writing your first test, I want to quickly touch on the reason why we have to configure `Jest`.

Jest is a widely adopted JavaScript testing framework that pairs seamlessly with React Testing Library. It provides a feature-rich and reliable environment for running tests. In the context of React testing, Jest offers features like **mocking, assertions, and snapshot testing**. You'll often see these two tools used together in the React testing ecosystem.

I found this website to be helpful in listing the common [Jest assertions](https://learntechsystems.com/assertions-in-react-testing-library/) that are often used.

In the next sections, we'll explore how to write tests with React Testing Library and leverage the power of Jest for efficient and comprehensive testing.

### Write your first test

Let's start with the basics. When writing tests with React Testing Library, simplicity is the guiding principle. We aim to keep our tests concise, easy to read, and, most importantly, reflective of how a user interacts with our components.

**Example: Testing the Card Component using queries** ([full code](../client/src/components/Card/Card.js))

```javascript:
import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("should show name of flower", () => {
    const name = "Pink Dahlia";
    render(<Card {...cardProps} name={name} />);

    expect(screen.getByRole("heading", { name: name })).toBeInTheDocument();
  });

```

In this example, we're testing a simple Card component. We render the `Card` then assert the heading of the Card is in the DOM using `screen.getByRole()`. This is one of the query methods that React Testing Library provides to select elements in your components.

### Querying elements

[Queries](https://testing-library.com/docs/queries/about/) are the methods that React Testing Library gives you to find elements on the page. There are several types of queries (`get`, `find`, `query`). The [difference](https://testing-library.com/docs/queries/about/#types-of-queries) between them is whether the query will throw an error if no element is found or if it will return a Promise and retry.

Here are a few essential query methods:

- `getByText`: Find elements by their text content.
- `getByRole`: Locate elements by their ARIA roles, which improves accessibility.
- `getByLabelText`: Select elements by their associated label.
- `getByPlaceholderText`: Find elements by the text within input placeholders.

See the [priority guide](https://testing-library.com/docs/queries/about/#priority) for recommendations on how to make use of **semantic queries** to test your page in the most accessible way.

Typically, after selecting an element using queries, you can simulate user interactions with the page using `user-event` (which is explained in next section), or use `Jest` to make assertions about the element.

### Simulating user interactions

`user-event` is a [companion library](https://testing-library.com/docs/user-event/intro) for React Testing Library that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.

Here are a few essential user events:

- `click`: click an element
- `copy` and `paste`: copy / paste an element
- `selectOptions` and `deselectOptions`: select / deselect an option from a dropdown list
- `type`: type a text into an element
- `tab`: tab to next element

**Example: Testing the Card Component by clicking a button** ([full code](../client/src/components/Card/Card.js))

```javascript:
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";

test("should toggle heart status", async () => {
    const user = userEvent.setup();
    render(<Card {...cardProps} favoured={false} />);

    const buttonElement = screen.getByRole("button");
    await user.click(buttonElement);

    expect(await screen.findByAltText("filled heart")).toBeInTheDocument();
    expect(screen.queryByAltText("outlined heart")).not.toBeInTheDocument();

  });
```

In this example, we render a Card component with the initial `favoured` value of `false` (meaning not favoured) and use `screen.getByRole()` to find the `like` button and click it. This simulates the user clicking to like the Card. It then verifies the component correctly reflects the user's input by displaying the filled heart image. It then also verifies that the outlined heart (meaning not favoured) is not visible using `screen.queryByAltText()`.

## Section 3: Best practices for testing with React Testing Library

In this section, we'll explore best practices that will elevate your React testing game. These principles are designed to make your tests robust, maintainable, and less brittle.

### Practice 1: Avoid testing implementation details

One of the core tenets of React Testing Library is to avoid testing implementation details. Instead, we should **focus on the component's behavior as experienced by the user**. Testing implementation details can lead to brittle tests that break with every minor change in your code.

For example, avoid testing specific component methods or internal state directly. These details are subject to change and can lead to frequent test updates.

### Practice 2: Use Queries, Assertions, and Screen Objects Effectively

React Testing Library provides a wide array of querying methods, and understanding when and how to use them is key to writing effective tests.

- **Use queries effectively**: The library offers various querying methods as explained previously, each serving a unique purpose. For instance, `getByText` helps you find elements by their text content, while `getByRole` is particularly useful for testing accessibility. Select elements by their role, label, or text content, and you'll create tests that are **resilient to UI changes**.

- **Test user interactions**: Emulate user interactions in your tests. Instead of manipulating a component's state directly, simulate how a user would interact with your application. This user-centric approach provides more realistic and reliable tests.

### Practice 3: Writing clean and maintainable tests

Maintainability is a critical aspect of test writing. Well-maintained tests remain stable even as your codebase evolves. Consider the following best practices:

- **Refactoring and maintenance**: Your tests should act as a **safety net when refactoring code**. If a component's behavior doesn't change, the tests should remain stable. This gives you the confidence to make improvements and changes in your codebase without the fear of breaking existing functionality.

- **Avoid hasty abstraction (AHA)**: Sometimes, it's better to prefer duplication over creating the wrong abstraction. Over-abstracting can lead to complex test setups and make it challenging to understand the test's purpose. As [Kent C. Dodds](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing#apply-aha-avoid-hasty-abstractions) aptly puts it, **_"prefer duplication over the wrong abstraction and optimize for change first."_**

By following these best practices, you can ensure that your tests are effective, maintainable, and provide a solid safety net for your React applications 😁

In the next part, we'll delve into more advanced testing scenarios and strategies that will enhance your testing skills further including mock network calls and integration testing.

## Resources

- [The React Testing Library Bootcamp - The Developer Guide](https://www.udemy.com/course/the-react-testing-library-bootcamp/) is an excellent Udemy course that I highly recommend to anyone wanting to learn more about React Testing Library. Throughout the project, I have used a lot of the content I learnt from the course!
- Beautiful photos of flowers were taken from [Unsplash](https://unsplash.com/)
