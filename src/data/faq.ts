export interface FAQItem {
  question: string;
  answer: string;
  category: 'excel' | 'sheets' | 'word' | 'general';
}

export const faqItems: FAQItem[] = [
  {
    question: "What is the difference between VLOOKUP and XLOOKUP?",
    answer: "XLOOKUP is the modern replacement for VLOOKUP with several advantages: it can search in any direction (not just right), defaults to exact match, has built-in error handling, and can return multiple columns. VLOOKUP only searches the leftmost column and returns values to the right. Use XLOOKUP if you have Excel 365 or 2021; use VLOOKUP for compatibility with older Excel versions.",
    category: "excel"
  },
  {
    question: "How do I freeze rows and columns in Excel?",
    answer: "To freeze rows: Click the row below where you want to freeze, then go to View → Freeze Panes → Freeze Panes. To freeze the top row only: View → Freeze Panes → Freeze Top Row. To freeze the first column: View → Freeze Panes → Freeze First Column. To freeze both rows and columns, click the cell below and to the right of where you want the freeze, then select Freeze Panes.",
    category: "excel"
  },
  {
    question: "What's the keyboard shortcut to insert the current date in Excel?",
    answer: "Press Ctrl + ; (semicolon) to insert the current date as a static value. For the current time, use Ctrl + Shift + ; (semicolon). These insert fixed values that won't change. If you want a date that updates automatically, use the =TODAY() function for the date or =NOW() for date and time.",
    category: "excel"
  },
  {
    question: "How do I use SUMIF with multiple criteria?",
    answer: "Use SUMIFS (note the 'S') for multiple criteria. The syntax is: =SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2, ...). For example, =SUMIFS(D:D, A:A, \"North\", B:B, \">1000\") sums column D where column A equals 'North' AND column B is greater than 1000. You can add up to 127 criteria pairs.",
    category: "excel"
  },
  {
    question: "Why won't Excel recognize my dates?",
    answer: "Excel may not recognize dates if: 1) They're formatted as text (check for green triangle or left-alignment), 2) The date format doesn't match your regional settings (e.g., DD/MM vs MM/DD), 3) There are extra spaces or hidden characters. Solutions: Use Text to Columns (Data menu) and specify the date format, multiply the cell by 1 (=A1*1), or use DATEVALUE() function. Always ensure your regional date settings match your data format.",
    category: "excel"
  },
  {
    question: "How do I use QUERY function in Google Sheets?",
    answer: "The QUERY function uses SQL-like syntax to filter, sort, and aggregate data. Basic syntax: =QUERY(data_range, query_string, headers). Example: =QUERY(A:D, \"SELECT A, C WHERE B = 'North' ORDER BY C DESC\", 1). Key clauses: SELECT (columns to return), WHERE (filter conditions), ORDER BY (sorting), GROUP BY (aggregation), LIMIT (row count). Use double quotes for the query and single quotes for text values within it.",
    category: "sheets"
  },
  {
    question: "What is ARRAYFORMULA in Google Sheets and when should I use it?",
    answer: "ARRAYFORMULA applies a formula to an entire range, producing multiple results from a single formula. Instead of copying =A2*B2 down 1000 rows, use =ARRAYFORMULA(A2:A*B2:B). Benefits: one formula to maintain, automatically extends to new data, better performance. Use with IF to handle empty cells: =ARRAYFORMULA(IF(A2:A=\"\", \"\", A2:A*B2:B)). It's essential for efficient Sheets usage.",
    category: "sheets"
  },
  {
    question: "How do I remove duplicate values in Excel?",
    answer: "Select your data range (including headers), then go to Data → Remove Duplicates. Check the columns that should be considered when identifying duplicates. Excel will tell you how many duplicates were removed and how many unique values remain. For Google Sheets: Data → Data cleanup → Remove duplicates. To keep duplicates but just identify them, use =COUNTIF($A$2:$A$1000,A2)>1 which returns TRUE for duplicates.",
    category: "excel"
  },
  {
    question: "How do I create a dropdown list in a cell?",
    answer: "In Excel: Select cells → Data → Data Validation → Allow: List → Enter values separated by commas or select a range. In Google Sheets: Select cells → Data → Data validation → Criteria: Dropdown (from a range) or Dropdown (manual list). For dependent dropdowns (where second list depends on first), use INDIRECT in Excel or FILTER in Sheets to reference different lists based on the first selection.",
    category: "general"
  },
  {
    question: "What's the best way to learn Excel formulas?",
    answer: "Start with these high-impact formulas: SUM, AVERAGE, COUNT, IF, VLOOKUP/XLOOKUP, SUMIF/SUMIFS, CONCATENATE. Practice with real data from your work. Use F1 or hover over functions to see syntax help. Learn keyboard shortcuts alongside formulas. Key tip: break complex problems into steps using helper columns first, then combine into one formula once you understand each part. Consistent daily practice beats occasional cramming.",
    category: "general"
  }
];
