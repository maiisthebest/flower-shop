# Flower Shop Frontend

This is the frontend for the Flower Shop web application. It is built using **React**, **TypeScript**, and **Vite**.

## Features

- Displays a list of flowers fetched from the backend (very minimal feature for now!)
- Deployed using AWS S3

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [AWS CLI](https://aws.amazon.com/cli/)
- [Terraform](https://developer.hashicorp.com/terraform/cli)

## Running

Create a `.env` file in the root of the project and add the API URL:

```
VITE_API_URL=http://localhost:3000
```

Start the Flower Shop API server following the ReadMe in that directory then:

```
npm run dev
```

The app will be available at http://localhost:5173.

## Building for production

To build the frontend for production:

```
npm run build
```

The output will be in the `dist/` directory.

## Deploying

The frontend is deployed to AWS S3. To deploy:

Build the project:

```
npm run build
```

Sync the `dist/` folder to S3. Remember to configure your `awscli` first.

```
aws s3 sync flower-shop-frontend/dist/ s3://flower-shop-frontend --delete
```

## Running tests

To run tests:

```
npm test
```
