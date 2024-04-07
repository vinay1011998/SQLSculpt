## [SQL Sculpt](https://661243f846501d820739b70b--dashing-sherbet-a8e103.netlify.app/) - The Interactive SQL Query Application

### Overview

This project aims to create a web-based application capable of executing SQL queries and displaying the results within the application interface. Users can select SQL queries, and the application will run them against the predefined dataset, providing the query results directly on the web page.

### Underlying Problem

The main challenge addressed by this project is the design and implementation of a user-friendly web interface. 

#### Key Features:

- Accepts SQL queries from predefined query list.
- Executes the provided SQL queries.
- Displays the results of the executed queries within the application.

### Third-Party Apps Used

1. **Masala Design System**: Utilizing the open-source design system for React components from Innovaccer, ensuring a consistent and aesthetically pleasing user interface.

2. **OpenAI**: Incorporating OpenAI APIs for AI features to enhance the application's functionality.

3. **Prettier**: Integrated for code formatting, ensuring clean and consistent codebase, and configured as a commit hook for automatic code formatting.

4. **Lodash**: Utilized for handling error states when accessing objects, improving code reliability and maintainability.

### Module Bundler

- **Vite**: Chosen as the module bundler for efficient and fast development, providing a streamlined development experience for the React application.

### Framework

- **React**: Leveraged as the primary framework for building the web-based application, facilitating the creation of interactive user interfaces and efficient component management.

### Usage

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/vinay1011998/SQLSculpt
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Access the application in your web browser at `http://localhost:5173`.

## Ideation

### Features Enhancement
- **Running Selected Query**: Users can select a specific query to run, enhancing the usability of the application.
- **Tabular Format**: Displaying query results in a tabular format for easy interpretation.
- **Pagination**: Implementing pagination for large datasets, allowing users to navigate through data efficiently.
- **AI Integration**: Utilizing Kong AI for additional features:
  - **Query Explanation**: Providing explanations for selected queries to aid understanding.
  - **Query Optimization**: Optimizing queries using AI to improve performance.

### Design Focus
- **User Accessibility**: Prioritizing user accessibility in design, ensuring ease of use and navigation.
- **Query Visibility**: Ensuring queries are easily visible and searchable, possibly incorporating a sidebar for quick access.
- **AI Integration**: Incorporating AI features in a separate sidebar for seamless interaction.

### AI Features
- **Explain Query**: Enabling users to understand complex queries better by providing detailed explanations.
- **Optimize Query**: Offering AI-driven optimization for queries, enhancing data analyst productivity and efficiency.

These enhancements aim to improve user experience, streamline query execution, and leverage AI capabilities to aid data analysis processes effectively.

### Optimization

Through meticulous optimization efforts, significant enhancements have been achieved, notably increasing the Lighthouse performance score from 55% to over 80%. Key techniques employed include:

1. **Performance Analysis**: Utilizing Chrome Lighthouse, the performance section was scrutinized, initially yielding a score of 55%.

2. **Lazy Loading**: By implementing lazy loading, resources are deferred until necessary, resulting in reduced initial page load times. Extraneous imports, such as the KONG AI API, were omitted, mitigating the inclusion of unused JavaScript.

3. **Immediate Rendering**: Prioritizing swift page rendering, core components like the main editor and queries are promptly displayed without additional overhead.

4. **Error Boundaries**: Robust error handling mechanisms, in the form of error boundaries, have been integrated to ensure graceful handling of runtime errors, thereby enhancing stability and user experience.

These optimization endeavors have significantly boosted performance metrics, resulting in a more responsive and efficient application.


[Optimization Screenshot](https://drive.google.com/file/d/1WyAx8aBIqQejdOM0VEV05hysVM0QTae_/view?usp=sharing)
[Video Link](https://drive.google.com/file/d/1gFfiLBLZZEPdZ3eSXcSOctX71tGE0PNQ/view?usp=drive_link)

### Contributions

Contributions are welcome! If you have any suggestions, improvements, or feature requests, please open an issue or submit a pull request.
