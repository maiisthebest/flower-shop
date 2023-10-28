# The Flower App Server

This is the server of the Flower Shop App which is written in NodeJs. This server is super simple and only serves to demonstrate how the front end can talk to the back end to retrieve data for the flowers. The setup and talking to the database is out of scope so mock data for the flowers was used in the form of json.

For instructions on how to setup React Testing Library and write tests check out the [Getting Started Guide](../docs/getting-started.md).

## Available scripts

In the current directory, you can run:

### `node index`

Runs the server in the development mode on `port 4000`. The only endpoint that is currently available is GET `http://localhost:4000/flowers`.
