# Pricing Task

This project is a service designed to fetch and store cryptocurrency token data. The service regularly updates token prices via a scheduled job and exposes endpoints to retrieve token data. Here's an overview of the current functionality and future plans.

---

## Features

### Current Features

1. **Scheduled Cron Job**:  
   - A cron job is set up to run every 15 minutes.  
   - It fetches the latest token data and updates the database accordingly.

2. **Endpoints**:  
   - **Get Token by ID**:  
     Endpoint: `GET /tokens/:id`  
     Example: `http://localhost:3000/tokens/1`  
     Use this endpoint to retrieve data for a specific token by its ID.

### Planned Features

1. **Get List of Tokens by Name**:  
   - I plan to add an endpoint to fetch a list of tokens based on a search query by name.  
   - This will be useful for populating dropdowns in the UI.

2. **Dropdown Interaction**:  
   - After selecting a token from the dropdown, the selected token's ID will be used to call the `GET /tokens/:id` endpoint to fetch its details.

3. **Token Price History**:  
   - A new table, `TokenPriceHistory`, will be added to store historical price data for tokens over time.

4. **Database Indexing**:  
   - Indexes will be added to the database to optimize the performance of the "get list of tokens by name" endpoint.

---

## How to Run the Project

1. Clone the repository:
2. Run docker-compose up
3. Test the Token Data Endpoint: GET http://localhost:3000/tokens/1
