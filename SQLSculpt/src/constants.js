export const projectName = "SQL Sculpt";
export const editorName = "SQL Query Editor";
export const runQueryButtonName = "Run your Query";
export const textareaPlaceholder = "Enter your SQL Queries here !!";
export const predefinedQueryList = [
  { label: "SELECT * FROM employees;", id: "d85b9e51-53cb-4d6f-bb71-2b5d2e159c8a" },
  { label: "SELECT * FROM orders WHERE order_date > '2023-01-01';", id: "9cf30b1a-ece8-4598-9f3d-aae1fbbca83f" },
  {
    label:
      "SELECT department_id, AVG(salary) AS avg_salary  FROM employees  GROUP BY department_id HAVING AVG(salary) > 50000;",
    id: "f02b9824-57c3-41e5-9b55-8123b769c05f"
  },
  { label: "SELECT * FROM customers ORDER BY registration_date DESC;", id: "3b5f6cb4-856c-4ff0-aee3-ec8c835e2e16" },
  { label: "SELECT * FROM orders LIMIT 10;", id: "2b92c112-5413-4a89-8f2e-7db86b23e5c5" }
];
export const noLabelFound = "SELECT * FROM products WHERE price < 50;";
export const querySectionLabel = "Predefined Queries";
export const useQueryButton = "Use this Query";
export const expandableButton = "show queries";
export const hideExpandableButton = "hide queries";
export const sideSheetHeading = "The Kong AI";
export const sideSheetSubHeading = "SQL Query Explanation and Optimization with ChatGPT: The Kong AI Project";
export const selectedQueryLabel = "Selected Query";
export const sideSheetTriggerButton = "Try out The Kong AI";
export const promptexplainLabel = "Explain this query";
export const promptOptimizeLabel = "Optimize this query";
export const chipGroupRenderer = [
  {
    label: promptexplainLabel,
    icon: "school",
    value: "explain"
  },
  {
    label: promptOptimizeLabel,
    icon: "bolt",
    value: "optimize"
  }
];
