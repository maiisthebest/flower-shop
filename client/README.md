# The Flower App Client

This is the front end of the Flower Shop App which is written in React.

For instructions on how to setup React Testing Library and write tests check out the [Getting Started Guide](../docs/getting-started.md).

## Available scripts

In the current directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. The app is now ready to be deployed!

## Structure of the React components

When working with React apps, my typical approach involves **breaking down the page into smaller components**. Subsequently, I determine how these components should interact and integrate with one another. This approach helps me figure out how I should write the tests for them first. I'm a fan of test-driven development (TDD), remember? 😆

Below is the component structure of the app.

- Typically, the `Card` component includes a single flower card.
- This card is then wrapped inside a collection of `Cards`
- `Filter` component includes the two dropdown lists that allow the user to select different filtering options.
- Wrapping both `Filter` and `Cards` is the overarching `Flowers` component. I refer to this component as the parent component of `Filter` and `Cards` because it has the responsibility of liaising or connecting the two components e.g. The user selects to filter by favourite, the cards should be updated accordingly. This is also the place where we should write **Integration Tests** to verify the integration between `Filter` and `Cards` are working properly.

![Structure of the React components](../client/componentStructure.png "Structure of the React components")
