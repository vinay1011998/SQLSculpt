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
export const queryTableLabel = "Output Data";
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

export const uuidQueryMap = {
  "d85b9e51-53cb-4d6f-bb71-2b5d2e159c8a": "SELECT * FROM employees;",
  "9cf30b1a-ece8-4598-9f3d-aae1fbbca83f": "SELECT * FROM orders WHERE order_date > '2023-01-01';",
  "f02b9824-57c3-41e5-9b55-8123b769c05f":
    "SELECT department_id, AVG(salary) AS avg_salary  FROM employees  GROUP BY department_id HAVING AVG(salary) > 50000;",
  "3b5f6cb4-856c-4ff0-aee3-ec8c835e2e16": "SELECT * FROM customers ORDER BY registration_date DESC;",
  "2b92c112-5413-4a89-8f2e-7db86b23e5c5": "SELECT * FROM orders LIMIT 10;",
  "-1": ""
};

export const queryTableData = {
  "d85b9e51-53cb-4d6f-bb71-2b5d2e159c8a": {
    data: [
      {
        EmployeeID: "Q10000101",
        FirstName: "Brooke",
        LastName: "Heeran",
        Email: "brooke.heeran@example.com",
        JobTitle: "Software Engineer"
      },
      {
        EmployeeID: "Q10000102",
        FirstName: "Frazer",
        LastName: "Cathro",
        Email: "frazer.cathro@example.com",
        JobTitle: "Data Analyst"
      },
      {
        EmployeeID: "Q10000103",
        FirstName: "Alice",
        LastName: "Smith",
        Email: "alice.smith@example.com",
        JobTitle: "Project Manager"
      },
      {
        EmployeeID: "Q10000104",
        FirstName: "John",
        LastName: "Doe",
        Email: "john.doe@example.com",
        JobTitle: "Marketing Specialist"
      },
      {
        EmployeeID: "Q10000105",
        FirstName: "Emily",
        LastName: "Jones",
        Email: "emily.jones@example.com",
        JobTitle: "Human Resources Assistant"
      },
      {
        EmployeeID: "Q10000106",
        FirstName: "Michael",
        LastName: "Johnson",
        Email: "michael.johnson@example.com",
        JobTitle: "Financial Analyst"
      },
      {
        EmployeeID: "Q10000107",
        FirstName: "Emma",
        LastName: "Brown",
        Email: "emma.brown@example.com",
        JobTitle: "Graphic Designer"
      },
      {
        EmployeeID: "Q10000108",
        FirstName: "Daniel",
        LastName: "Wilson",
        Email: "daniel.wilson@example.com",
        JobTitle: "Software Developer"
      },
      {
        EmployeeID: "Q10000109",
        FirstName: "Sophia",
        LastName: "Martinez",
        Email: "sophia.martinez@example.com",
        JobTitle: "Customer Service Representative"
      },
      {
        EmployeeID: "Q10000110",
        FirstName: "James",
        LastName: "Taylor",
        Email: "james.taylor@example.com",
        JobTitle: "Accountant"
      }
    ],
    schema: [
      {
        name: "EmployeeID",
        displayName: "Employee ID",
        width: "20%",
        separator: true
      },
      {
        name: "FirstName",
        displayName: "First Name",
        width: "20%",
        separator: true,
        cellType: "DEFAULT"
      },
      {
        name: "LastName",
        displayName: "Last Name",
        width: "20%",
        separator: true
      },
      {
        name: "Email",
        displayName: "Email",
        width: "20%",
        separator: true
      },
      {
        name: "JobTitle",
        displayName: "Job Title",
        width: "20%",
        separator: true
      }
    ]
  },
  "9cf30b1a-ece8-4598-9f3d-aae1fbbca83f": {
    data: [
      {
        OrderID: 1,
        EmployeeID: "Q10000101",
        OrderDate: "2024-04-01",
        CustomerName: "John Doe",
        TotalAmount: 150.75
      },
      {
        OrderID: 2,
        EmployeeID: "Q10000102",
        OrderDate: "2024-04-02",
        CustomerName: "Alice Smith",
        TotalAmount: 200.5
      },
      {
        OrderID: 3,
        EmployeeID: "Q10000103",
        OrderDate: "2024-04-03",
        CustomerName: "Emma Brown",
        TotalAmount: 75.0
      },
      {
        OrderID: 4,
        EmployeeID: "Q10000104",
        OrderDate: "2024-04-04",
        CustomerName: "James Taylor",
        TotalAmount: 300.25
      },
      {
        OrderID: 5,
        EmployeeID: "Q10000105",
        OrderDate: "2024-04-05",
        CustomerName: "Sophia Martinez",
        TotalAmount: 125.8
      },
      {
        OrderID: 6,
        EmployeeID: "Q10000106",
        OrderDate: "2024-04-06",
        CustomerName: "Michael Johnson",
        TotalAmount: 95.5
      },
      {
        OrderID: 7,
        EmployeeID: "Q10000107",
        OrderDate: "2024-04-07",
        CustomerName: "Daniel Wilson",
        TotalAmount: 175.2
      },
      {
        OrderID: 8,
        EmployeeID: "Q10000108",
        OrderDate: "2024-04-08",
        CustomerName: "Emily Jones",
        TotalAmount: 50.0
      },
      {
        OrderID: 9,
        EmployeeID: "Q10000109",
        OrderDate: "2024-04-09",
        CustomerName: "Frazer Cathro",
        TotalAmount: 220.3
      },
      {
        OrderID: 10,
        EmployeeID: "Q10000110",
        OrderDate: "2024-04-10",
        CustomerName: "Brooke Heeran",
        TotalAmount: 180.9
      }
    ],
    schema: [
      {
        name: "OrderID",
        displayName: "Order ID",
        width: "10%",
        separator: true
      },
      {
        name: "EmployeeID",
        displayName: "Employee ID",
        width: "15%",
        separator: true
      },
      {
        name: "OrderDate",
        displayName: "Order Date",
        width: "20%",
        separator: true
      },
      {
        name: "CustomerName",
        displayName: "Customer Name",
        width: "30%",
        separator: true
      },
      {
        name: "TotalAmount",
        displayName: "Total Amount",
        width: "15%",
        separator: true
      }
    ]
  },
  "f02b9824-57c3-41e5-9b55-8123b769c05f": {
    data: [
      {
        department_id: "D1001",
        salary: 60000,
        employee_name: "John Doe",
        job_title: "Software Engineer",
        hire_date: "2020-05-15",
        email: "john.doe@example.com"
      },
      {
        department_id: "D1002",
        salary: 70000,
        employee_name: "Alice Smith",
        job_title: "Project Manager",
        hire_date: "2018-10-20",
        email: "alice.smith@example.com"
      },
      {
        department_id: "D1001",
        salary: 55000,
        employee_name: "Emily Jones",
        job_title: "HR Specialist",
        hire_date: "2019-02-10",
        email: "emily.jones@example.com"
      },
      {
        department_id: "D1003",
        salary: 80000,
        employee_name: "Michael Johnson",
        job_title: "Financial Analyst",
        hire_date: "2021-04-05",
        email: "michael.johnson@example.com"
      },
      {
        department_id: "D1002",
        salary: 65000,
        employee_name: "Emma Brown",
        job_title: "Graphic Designer",
        hire_date: "2020-08-30",
        email: "emma.brown@example.com"
      },
      {
        department_id: "D1003",
        salary: 72000,
        employee_name: "Daniel Wilson",
        job_title: "Software Developer",
        hire_date: "2019-06-25",
        email: "daniel.wilson@example.com"
      },
      {
        department_id: "D1001",
        salary: 58000,
        employee_name: "Sophia Martinez",
        job_title: "Customer Service Representative",
        hire_date: "2020-03-12",
        email: "sophia.martinez@example.com"
      },
      {
        department_id: "D1002",
        salary: 75000,
        employee_name: "James Taylor",
        job_title: "Account Manager",
        hire_date: "2018-12-18",
        email: "james.taylor@example.com"
      },
      {
        department_id: "D1003",
        salary: 68000,
        employee_name: "Brooke Heeran",
        job_title: "Data Analyst",
        hire_date: "2019-11-05",
        email: "brooke.heeran@example.com"
      },
      {
        department_id: "D1001",
        salary: 62000,
        employee_name: "Frazer Cathro",
        job_title: "Marketing Specialist",
        hire_date: "2021-01-20",
        email: "frazer.cathro@example.com"
      },
      {
        department_id: "D1002",
        salary: 69000,
        employee_name: "Olivia Davis",
        job_title: "Sales Manager",
        hire_date: "2018-09-10",
        email: "olivia.davis@example.com"
      },
      {
        department_id: "D1003",
        salary: 73000,
        employee_name: "William Clark",
        job_title: "Business Analyst",
        hire_date: "2019-04-22",
        email: "william.clark@example.com"
      },
      {
        department_id: "D1001",
        salary: 59000,
        employee_name: "Lily Robinson",
        job_title: "Administrative Assistant",
        hire_date: "2020-07-15",
        email: "lily.robinson@example.com"
      },
      {
        department_id: "D1002",
        salary: 71000,
        employee_name: "Henry Moore",
        job_title: "Product Manager",
        hire_date: "2018-11-28",
        email: "henry.moore@example.com"
      },
      {
        department_id: "D1003",
        salary: 77000,
        employee_name: "Ava White",
        job_title: "Quality Assurance Specialist",
        hire_date: "2019-08-05",
        email: "ava.white@example.com"
      },
      {
        department_id: "D1001",
        salary: 61000,
        employee_name: "Isaac Perez",
        job_title: "Technical Support Engineer",
        hire_date: "2020-04-02",
        email: "isaac.perez@example.com"
      },
      {
        department_id: "D1002",
        salary: 68000,
        employee_name: "Ella Garcia",
        job_title: "Customer Success Manager",
        hire_date: "2018-10-15",
        email: "ella.garcia@example.com"
      },
      {
        department_id: "D1003",
        salary: 74000,
        employee_name: "Benjamin Hernandez",
        job_title: "Systems Analyst",
        hire_date: "2019-05-18",
        email: "benjamin.hernandez@example.com"
      },
      {
        department_id: "D1001",
        salary: 57000,
        employee_name: "Mia Wilson",
        job_title: "Operations Coordinator",
        hire_date: "2020-09-30",
        email: "mia.wilson@example.com"
      },
      {
        department_id: "D1002",
        salary: 70000,
        employee_name: "Lucas Martinez",
        job_title: "Account Executive",
        hire_date: "2018-12-03",
        email: "lucas.martinez@example.com"
      }
    ],
    schema: [
      {
        name: "department_id",
        displayName: "Department ID",
        width: "20%",
        separator: true
      },
      {
        name: "salary",
        displayName: "Salary",
        width: "15%",
        separator: true
      },
      {
        name: "employee_name",
        displayName: "Employee Name",
        width: "20%",
        separator: true
      },
      {
        name: "job_title",
        displayName: "Job Title",
        width: "15%",
        separator: true
      },
      {
        name: "hire_date",
        displayName: "Hire Date",
        width: "15%",
        separator: true
      },
      {
        name: "email",
        displayName: "Email",
        width: "15%",
        separator: true
      }
    ]
  },
  "3b5f6cb4-856c-4ff0-aee3-ec8c835e2e16": {
    data: [
      {
        CustomerID: "C1001",
        FirstName: "John",
        LastName: "Doe",
        Email: "john.doe@example.com",
        PhoneNumber: "123-456-7890",
        Address: "123 Main St, Anytown, USA",
        RegistrationDate: "2023-01-15"
      },
      {
        CustomerID: "C1002",
        FirstName: "Alice",
        LastName: "Smith",
        Email: "alice.smith@example.com",
        PhoneNumber: "987-654-3210",
        Address: "456 Elm St, Othertown, USA",
        RegistrationDate: "2023-02-20"
      },
      {
        CustomerID: "C1003",
        FirstName: "Emma",
        LastName: "Brown",
        Email: "emma.brown@example.com",
        PhoneNumber: "456-789-0123",
        Address: "789 Oak St, Another town, USA",
        RegistrationDate: "2023-03-10"
      },
      {
        CustomerID: "C1004",
        FirstName: "Michael",
        LastName: "Johnson",
        Email: "michael.johnson@example.com",
        PhoneNumber: "789-012-3456",
        Address: "567 Pine St, Somewhere, USA",
        RegistrationDate: "2023-04-05"
      },
      {
        CustomerID: "C1005",
        FirstName: "Sophia",
        LastName: "Martinez",
        Email: "sophia.martinez@example.com",
        PhoneNumber: "234-567-8901",
        Address: "890 Maple St, Nowhere, USA",
        RegistrationDate: "2023-05-12"
      }
    ],

    schema: [
      {
        name: "CustomerID",
        displayName: "Customer ID",
        width: "15%",
        separator: true
      },
      {
        name: "FirstName",
        displayName: "First Name",
        width: "15%",
        separator: true
      },
      {
        name: "LastName",
        displayName: "Last Name",
        width: "15%",
        separator: true
      },
      {
        name: "Email",
        displayName: "Email",
        width: "20%",
        separator: true
      },
      {
        name: "PhoneNumber",
        displayName: "Phone Number",
        width: "15%",
        separator: true
      },
      {
        name: "Address",
        displayName: "Address",
        width: "20%",
        separator: true
      },
      {
        name: "RegistrationDate",
        displayName: "Registration Date",
        width: "15%",
        separator: true
      }
    ]
  },
  "2b92c112-5413-4a89-8f2e-7db86b23e5c5": {
    data: [
      {
        OrderID: "ORD1001",
        CustomerID: "C1001",
        OrderDate: "2023-01-20",
        TotalAmount: 150.75,
        ShippingAddress: "123 Main St, Anytown, USA",
        PaymentMethod: "Credit Card",
        Status: "Shipped",
        ShippingDate: "2023-01-21",
        DeliveryDate: "2023-01-25"
      },
      {
        OrderID: "ORD1002",
        CustomerID: "C1002",
        OrderDate: "2023-02-15",
        TotalAmount: 200.5,
        ShippingAddress: "456 Elm St, Othertown, USA",
        PaymentMethod: "PayPal",
        Status: "Delivered",
        ShippingDate: "2023-02-16",
        DeliveryDate: "2023-02-20"
      },
      {
        OrderID: "ORD1003",
        CustomerID: "C1003",
        OrderDate: "2023-03-10",
        TotalAmount: 75.0,
        ShippingAddress: "789 Oak St, Another town, USA",
        PaymentMethod: "Cash on Delivery",
        Status: "Pending",
        ShippingDate: null,
        DeliveryDate: null
      }
    ],
    schema: [
      {
        name: "OrderID",
        displayName: "Order ID",
        width: "15%",
        separator: true
      },
      {
        name: "CustomerID",
        displayName: "Customer ID",
        width: "15%",
        separator: true
      },
      {
        name: "OrderDate",
        displayName: "Order Date",
        width: "15%",
        separator: true
      },
      {
        name: "TotalAmount",
        displayName: "Total Amount",
        width: "15%",
        separator: true
      },
      {
        name: "ShippingAddress",
        displayName: "Shipping Address",
        width: "20%",
        separator: true
      },
      {
        name: "PaymentMethod",
        displayName: "Payment Method",
        width: "15%",
        separator: true
      },
      {
        name: "Status",
        displayName: "Status",
        width: "10%",
        separator: true
      },
      {
        name: "ShippingDate",
        displayName: "Shipping Date",
        width: "15%",
        separator: true
      },
      {
        name: "DeliveryDate",
        displayName: "Delivery Date",
        width: "15%",
        separator: true
      }
    ]
  }
};
