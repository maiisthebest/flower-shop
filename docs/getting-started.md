# Getting Started with React Testing using React Testing Library

## Introduction

Welcome to this beginner's guide to React testing using React Testing Library. Whether you're just starting your journey with React or looking to enhance your testing skills, this article is here to provide you with a solid foundation in the world of React testing.

In the realm of web development, testing is not merely a good practice – it's a necessity. It ensures the reliability and stability of your applications and helps you catch issues early in the development process.

In this guide, we'll shine a spotlight on React Testing Library, an invaluable tool that empowers developers to write tests from the user's perspective. By focusing on how users interact with your application, React Testing Library encourages the creation of meaningful and robust tests.

### Enzyme vs. React Testing Library

You may have heard of other testing libraries like Enzyme. In a nutshell, both React Testing Library and Enzyme are two popular testing libraries for React applications, but they have different approaches and philosophies. Here's a comparison of the two:

#### React Testing Library:

- User-centric testing: React Testing Library is designed to encourage testing from the user's perspective. It focuses on testing how users interact with your components rather than internal implementation details. This approach often results in more meaningful and reliable tests.
- Querying by accessibility: React Testing Library promotes querying elements by their accessibility attributes, such as getByText, getByRole, and getByLabelText. This makes the tests more robust to changes in the UI and improves accessibility.
- Lightweight API: It has a minimal and straightforward API, which is easy to learn and use. This simplicity is well-suited for beginners and encourages writing cleaner and more maintainable tests.
- Less mocking: React Testing Library encourages minimal mocking of components and dependencies. It favors testing components in their natural state, allowing for more realistic testing.
- Officially recommended by React team: The React team officially recommends using React Testing Library for testing React applications, adding to its credibility.

#### Enzyme:

- Implementation detail testing: Enzyme allows developers to test the internal implementation details of components, such as component state and methods. This can be useful for very fine-grained control over testing but may lead to brittle tests.
- Shallow rendering: Enzyme provides the option to perform shallow rendering, which only renders the component being tested without its child components. This can be beneficial for isolating the component under test but may miss certain interactions.
- Various APIs: Enzyme offers several APIs, including mount and shallow, for rendering and interacting with components. This flexibility can be useful for different testing scenarios.
- Custom matchers and assertions: Enzyme allows you to create custom matchers and assertions, giving you the ability to fine-tune your tests.
- Wide Adoption: Enzyme has been widely adopted and has a well-established user base. It has been around for a longer time, and many developers are familiar with it.

In summary, React Testing Library is more focused on encouraging user-centric testing, simplicity, and accessibility. It's well-suited for those who want to write tests that closely resemble how users interact with their applications. On the other hand, Enzyme offers greater flexibility and control over testing details, making it a choice for developers who need to test specific implementation aspects of their components. The choice between the two often depends on your testing philosophy and the specific requirements of your project.

So, let's not wait further and kick off this journey of React testing using React Testing Library. By the end of this article, you'll have the knowledge and tools to confidently begin testing your React applications. Let's get started!

## Section 1: Getting Started with React Testing Library

In this section, we'll take our first steps into the philosophy and practical aspects of this powerful testing tool.

### Introduction to React Testing Library and Its Philosophy

React Testing Library is more than just another testing tool; it's a philosophy that encourages us to write tests from the user's perspective. This philosophy is deeply rooted in the belief that tests should not only verify that our components work but also how they work for the end user.

Instead of diving into intricate implementation details, React Testing Library asks us to think about our components in terms of their actual use cases. This shift in mindset can lead to tests that are more meaningful and resilient to UI changes.

In essence, we're not merely testing lines of code; we're validating that our application behaves as expected, which is the ultimate goal of testing.

### Basic Setup for Testing with React Testing Library

Before we can start reaping the benefits of React Testing Library, we need to set up our testing environment. Fortunately, the process is straightforward. Here's a basic overview of the steps involved:

1. Create a new React project: If you don't have an existing project, you can create one using Create React App or your preferred setup. React Testing Library works seamlessly with various React configurations.
1. Install dependencies: To use React Testing Library, you need to install the required dependencies. These typically include `@testing-library/react` and `@testing-library/jest-dom`. Ensure you have Jest installed as well, as it serves as the testing framework.
1. Configure Jest: Make sure your `Jest` configuration is set up to work with React and React Testing Library. This often involves setting up specific test environment settings in your `package.json` or `jest.config.js` file.
1. Write Your First Test: With the setup in place, you're ready to write your first test using React Testing Library.

### Why the Use of Jest as the Testing Framework?

Before writing our first test, I want to quickly touch on the reason why we have to configure `Jest`. Jest is a widely adopted JavaScript testing framework that pairs seamlessly with React Testing Library. It provides a feature-rich and reliable environment for running tests. In the context of React testing, Jest offers features like mocking, assertions, and snapshot testing.

React Testing Library integrates with Jest to make the testing process smoother and more effective. You'll often see these two tools used together in the React testing ecosystem.

In the next sections, we'll explore how to write tests with React Testing Library and leverage the power of Jest for efficient and comprehensive testing.

## Section 2: Writing Effective Tests with React Testing Library

Now that we've set up our testing environment, it's time to dive into the heart of React Testing Library and learn how to write effective tests.

### How to Write Simple Component Tests

Let's start with the basics. When writing tests with React Testing Library, simplicity is a guiding principle. We aim to keep our tests concise, easy to read, and, most importantly, reflective of how a user interacts with our components.

**Example: Testing a Card Component**

```javascript:
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import userEvent from "@testing-library/user-event";

test("should show name of flower", () => {
    const name = "Pink Dahlia";
    render(<Card {...cardProps} name={name} />);

    expect(screen.getByRole("heading", { name: name })).toBeInTheDocument();
  });

```

In this example, we're testing a simple Card component. We render the `Card` then assert the heading of the Card is in the DOM using `screen.getByRole`.

### Querying and Interacting with Components

React Testing Library provides a set of query methods to select elements in your components. These queries are based on user interactions, which is what sets this library apart. Here are a few essential query methods:

- `getByText`: Find elements by their text content.
- `getByRole`: Locate elements by their ARIA roles, which improves accessibility.
- `getByLabelText`: Select elements by their associated label.
- `getByPlaceholderText`: Find elements by the text within input placeholders.

**Example: Testing a Card Component**

```javascript:
test("should toggle heart status", async () => {
    const user = userEvent.setup();
    render(<Card {...cardProps} favoured={false} />);

    const buttonElement = screen.getByRole("button");
    await user.click(buttonElement);

    expect(await screen.findByAltText("filled heart")).toBeInTheDocument();
    expect(screen.queryByAltText("outlined heart")).not.toBeInTheDocument();

  });
```

In this example, we render a Card component with the initial `favoured` value of `false` (meaning not favoured) and use `screen.getByRole` to find the `like` button and click it. This simulates the user clicking to like / favour the Card. It then verifies that the component correctly reflects the user's input by displaying the filled heart image.

### Emphasising the "Testing from the User's Perspective" Approach

The hallmark of React Testing Library is its philosophy of testing from the user's perspective. We're not concerned with the internal implementation details of our components but rather how they work for the end user. This perspective shift leads to more meaningful and robust tests, as they focus on real use cases.

As you write tests, keep the following principles in mind:

- Prioritise User Interactions: Focus on testing how users interact with your components. Simulate user actions such as clicks, typing, and form submissions.
- Query Elements as Users Would: Use query methods that reflect how users identify and interact with elements on your page, such as buttons, links, and form elements.
- Keep Tests Resilient: Write tests that remain stable even as your component's internal implementation evolves. This helps prevent false negatives in your test suite.

In the upcoming sections, we'll explore more advanced testing scenarios and best practices. But for now, start with these foundational concepts and get comfortable writing tests from the user's perspective.

## Section 3: Best Practices for Testing with React Testing Library

In this section, we'll explore best practices that will elevate your React testing game. These principles are designed to make your tests robust, maintainable, and less brittle.

### Avoid Testing Implementation Details

One of the core tenets of React Testing Library is to avoid testing implementation details. Instead, we should focus on the component's behavior as experienced by the user. Testing implementation details can lead to brittle tests that break with every minor change in your code.

For example, avoid testing specific component methods or internal state directly. These details are subject to change and can lead to frequent test updates.

### Use Queries, Assertions, and Screen Objects Effectively

React Testing Library provides a wide array of querying methods, and understanding when and how to use them is key to writing effective tests.

- Use queries effectively: The library offers various querying methods, such as getBy, findBy, and queryBy, each serving a unique purpose. For instance, getByText helps you find elements by their text content, while getByRole is particularly useful for testing accessibility. Select elements by their role, label, or text content, and you'll create tests that are resilient to UI changes.

- Test user interactions: Emulate user interactions in your tests. Instead of manipulating a component's state directly, simulate how a user would interact with your application. This user-centric approach provides more realistic and reliable tests.

### Writing Clean and Maintainable Tests

Maintainability is a critical aspect of test writing. Well-maintained tests remain stable even as your codebase evolves. Consider the following best practices:

- Refactoring and maintenance: Your tests should act as a safety net when refactoring code. If a component's behavior doesn't change, the tests should remain stable. This gives you the confidence to make improvements and changes in your codebase without the fear of breaking existing functionality.

- Avoid over-abstraction: Sometimes, it's better to prefer duplication over creating the wrong abstraction. Over-abstracting can lead to complex test setups and make it challenging to understand the test's purpose. As Kent C. Dodds aptly puts it, "prefer duplication over the wrong abstraction and optimize for change first."

By following these best practices, you can ensure that your tests are effective, maintainable, and provide a solid safety net for your React applications. In the next part, we'll delve into more advanced testing scenarios and strategies that will enhance your testing skills further.

## Resources

- [The React Testing Library Bootcamp - The Developer Guide](https://www.udemy.com/course/the-react-testing-library-bootcamp/) is an excellent Udemy course that I highly recommend to anyone wanting to learn more about React Testing Library. Throughout the project, I have used a lot of the content I learnt from the course!
- Beautiful photos of flowers were taken from [Unsplash](https://unsplash.com/)
