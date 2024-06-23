# Inventory and Manufacturing Management System

This project is a simplified inventory and manufacturing management system focusing on an order system, built using React.js with extensive use of array and object manipulation, filtering, and mapping. It includes features for managing orders, items, and inventory.

## Features

### Order List Page

- Display a list of orders with ID, customer name, status, and item count.
- Filter orders by status (Pending, Completed).
- Sort orders by customer name and item count.
- Pagination for handling large lists of orders.

### Order Details Page

- Detailed view of a specific order.
- Display items in the order, quantities, and stock availability.

### Inventory Management

- List all items with their stock levels.
- Edit and delete items from the inventory.

### Additional Features

- Responsive and user-friendly interface designed with custom CSS.
- Search functionality to quickly find orders or items.
- Modals for confirmation dialogs and notifications for user feedback.
- Accessibility considerations and good UX practices implemented.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**

   ```bash
   [https://github.com/Abhishekkjainn/inventory.git]
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Folder Structure

```
├── components/         # React components
├── pages/              # React.js pages
├── styles/             # Custom CSS styles (if any)
├── data/               # JSON data files
├── public/             # Static assets
├── utils/              # Utility functions
├── README.md           # Project documentation
└── ...                 # Other configuration files
```

## Implementation Details

- **React Components**: Components are modular and reusable, handling both presentation and logic where necessary.
- **State Management**: Uses React hooks and context for managing state across components.
- **Data Handling**: Array and object manipulations (sorting, filtering) are implemented using JavaScript's array methods and custom utility functions where applicable.
- **Styling**: Custom CSS styles are used for styling to ensure a responsive and consistent design.
- **Persistence**: Local storage is used to save and retrieve order and inventory data between sessions.
- **Accessibility**: ARIA roles and attributes are used to enhance accessibility, ensuring the application is usable by everyone.

## Future Improvements

- Implement server-side API endpoints for data operations.
- Enhance UI with animations and transitions.
- Add more robust error handling and validation.
- Improve search and filter functionalities for faster data retrieval.

## Contributors

- https://github.com/Abhishekkjainn/
