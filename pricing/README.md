# Testing Guide

This project includes a test suite to validate its functionality. Follow the steps below to set up and run tests:

## Setting Up the Test Database

To run the tests, you need a PostgreSQL database running on your local machine or in a Docker container. Use the following command to start a test database instance:

```bash
docker run --name test-postgres \
  -e POSTGRES_USER=username \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=pricing_db \
  -p 5435:5432 \
  -d postgres
```

Then you should run `npm run test`
