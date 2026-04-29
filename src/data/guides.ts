export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: 'excel' | 'sheets' | 'word' | 'general';
  readTime: string;
  publishedAt: string;
  tableOfContents: { id: string; title: string; level: number }[];
  content: string;
}

export const guides: Guide[] = [
  {
    slug: "ultimate-excel-formulas-reference",
    title: "The Ultimate Excel Formulas Reference Guide",
    description: "A comprehensive guide covering every essential Excel formula category. From basic calculations to advanced array formulas, this is your complete reference for mastering Excel functions.",
    category: "excel",
    readTime: "25 min read",
    publishedAt: "2024-12-01",
    tableOfContents: [
      { id: "introduction", title: "Introduction", level: 1 },
      { id: "math-functions", title: "Mathematical Functions", level: 1 },
      { id: "text-functions", title: "Text Functions", level: 1 },
      { id: "lookup-functions", title: "Lookup & Reference Functions", level: 1 },
      { id: "date-functions", title: "Date & Time Functions", level: 1 },
      { id: "logical-functions", title: "Logical Functions", level: 1 },
      { id: "statistical-functions", title: "Statistical Functions", level: 1 },
      { id: "array-formulas", title: "Array Formulas", level: 1 },
      { id: "error-handling", title: "Error Handling", level: 1 },
      { id: "best-practices", title: "Formula Best Practices", level: 1 }
    ],
    content: `# The Ultimate Excel Formulas Reference Guide

Excel's true power lies in its formulas. With over 400 built-in functions, Excel can handle almost any calculation you throw at it. This comprehensive guide covers the essential formulas every professional should know, organized by category for easy reference.

<section id="introduction">

## Introduction: Formula Fundamentals

Before diving into specific functions, let's cover the basics that apply to all formulas.

### Formula Structure

Every formula starts with an equals sign (\`=\`). After that, you can use:

- **Values**: Numbers (\`=5+3\`), text (\`="Hello"\`)
- **Cell References**: \`=A1+B1\`
- **Functions**: \`=SUM(A1:A10)\`
- **Operators**: \`+\`, \`-\`, \`*\`, \`/\`, \`^\`, \`&\`

### Reference Types

- **Relative**: \`A1\` – Changes when copied
- **Absolute**: \`$A$1\` – Stays fixed when copied
- **Mixed**: \`$A1\` or \`A$1\` – Partially fixed

Use **F4** to toggle between reference types while editing.

</section>

<section id="math-functions">

## Mathematical Functions

These functions perform calculations on numbers.

### SUM – Add Numbers

\`\`\`
=SUM(A1:A10)           // Sum a range
=SUM(A1,B1,C1)         // Sum specific cells
=SUM(A:A)              // Sum entire column
\`\`\`

### SUMIF / SUMIFS – Conditional Sum

\`\`\`
=SUMIF(range, criteria, sum_range)
=SUMIF(A:A, "North", B:B)          // Sum B where A is "North"
=SUMIF(A:A, ">100")                // Sum values > 100

=SUMIFS(sum_range, range1, criteria1, range2, criteria2, ...)
=SUMIFS(C:C, A:A, "North", B:B, ">1000")  // Multiple conditions
\`\`\`

### AVERAGE – Calculate Mean

\`\`\`
=AVERAGE(A1:A10)
=AVERAGEIF(A:A, ">0", B:B)         // Average with condition
=AVERAGEIFS(C:C, A:A, "North", B:B, ">0")  // Multiple conditions
\`\`\`

### COUNT Functions

\`\`\`
=COUNT(A:A)            // Count numbers
=COUNTA(A:A)           // Count non-empty cells
=COUNTBLANK(A:A)       // Count empty cells
=COUNTIF(A:A, "Apple") // Count specific value
=COUNTIFS(A:A, "North", B:B, ">1000")  // Multiple conditions
\`\`\`

### ROUND Functions

\`\`\`
=ROUND(A1, 2)          // Round to 2 decimal places
=ROUNDUP(A1, 0)        // Always round up
=ROUNDDOWN(A1, 0)      // Always round down
=MROUND(A1, 5)         // Round to nearest 5
=CEILING(A1, 10)       // Round up to nearest 10
=FLOOR(A1, 10)         // Round down to nearest 10
\`\`\`

### Other Math Functions

\`\`\`
=ABS(A1)               // Absolute value
=MOD(A1, 3)            // Remainder (A1 divided by 3)
=POWER(A1, 2)          // Or =A1^2 for square
=SQRT(A1)              // Square root
=PRODUCT(A1:A5)        // Multiply all values
=QUOTIENT(A1, B1)      // Integer division
\`\`\`

</section>

<section id="text-functions">

## Text Functions

Functions for manipulating and extracting text.

### Combining Text

\`\`\`
=CONCAT(A1, " ", B1)         // Join text
=TEXTJOIN(", ", TRUE, A1:A5) // Join with delimiter, skip blanks
=A1 & " " & B1               // Concatenate with &
\`\`\`

### Extracting Text

\`\`\`
=LEFT(A1, 5)           // First 5 characters
=RIGHT(A1, 3)          // Last 3 characters
=MID(A1, 3, 5)         // 5 characters starting at position 3
\`\`\`

### Finding and Replacing

\`\`\`
=FIND("@", A1)         // Position of @ (case-sensitive)
=SEARCH("apple", A1)   // Position (case-insensitive)
=SUBSTITUTE(A1, "old", "new")        // Replace text
=REPLACE(A1, 3, 5, "NEW")            // Replace by position
\`\`\`

### Text Transformation

\`\`\`
=UPPER(A1)             // UPPERCASE
=LOWER(A1)             // lowercase
=PROPER(A1)            // Title Case
=TRIM(A1)              // Remove extra spaces
=CLEAN(A1)             // Remove non-printable characters
\`\`\`

### Text Information

\`\`\`
=LEN(A1)               // Character count
=EXACT(A1, B1)         // Case-sensitive comparison
=REPT(A1, 3)           // Repeat text 3 times
\`\`\`

### Number Formatting

\`\`\`
=TEXT(A1, "0.00")                    // Format as text
=TEXT(A1, "$#,##0.00")               // Currency format
=TEXT(A1, "MM/DD/YYYY")              // Date format
=VALUE(A1)                           // Text to number
\`\`\`

</section>

<section id="lookup-functions">

## Lookup & Reference Functions

The workhorses of data retrieval.

### XLOOKUP (Recommended)

\`\`\`
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode])

=XLOOKUP(A1, B:B, C:C)                    // Basic lookup
=XLOOKUP(A1, B:B, C:C, "Not found")       // With error handling
=XLOOKUP(A1, B:B, C:E)                    // Return multiple columns
\`\`\`

### VLOOKUP (Legacy)

\`\`\`
=VLOOKUP(lookup_value, table_array, col_index, [range_lookup])

=VLOOKUP(A1, B:D, 3, FALSE)              // Exact match
=VLOOKUP(A1, B:D, 3, TRUE)               // Approximate match
\`\`\`

### INDEX + MATCH (Flexible)

\`\`\`
=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))

=INDEX(C:C, MATCH(A1, B:B, 0))           // Basic lookup
=INDEX(C:C, MATCH(A1&B1, A:A&B:B, 0))    // Multiple criteria
\`\`\`

### Other Reference Functions

\`\`\`
=INDIRECT("A" & B1)           // Create reference from text
=OFFSET(A1, 2, 3)             // Reference 2 rows down, 3 columns right
=CHOOSE(A1, "Mon", "Tue", "Wed")  // Choose from list by index
=ROW(A1)                      // Return row number
=COLUMN(A1)                   // Return column number
\`\`\`

</section>

<section id="date-functions">

## Date & Time Functions

Working with dates and times.

### Current Date/Time

\`\`\`
=TODAY()               // Current date
=NOW()                 // Current date and time
\`\`\`

### Extracting Components

\`\`\`
=YEAR(A1)              // Year from date
=MONTH(A1)             // Month (1-12)
=DAY(A1)               // Day of month
=WEEKDAY(A1)           // Day of week (1-7)
=WEEKNUM(A1)           // Week number
=HOUR(A1)              // Hour from time
=MINUTE(A1)            // Minute from time
=SECOND(A1)            // Second from time
\`\`\`

### Creating Dates

\`\`\`
=DATE(2024, 12, 25)    // Create date from parts
=TIME(14, 30, 0)       // Create time (2:30 PM)
=DATEVALUE("1/15/2024")  // Text to date
=TIMEVALUE("2:30 PM")    // Text to time
\`\`\`

### Date Calculations

\`\`\`
=EDATE(A1, 3)          // Add 3 months
=EOMONTH(A1, 0)        // End of current month
=EOMONTH(A1, 1)        // End of next month
=WORKDAY(A1, 10)       // Add 10 working days
=NETWORKDAYS(A1, B1)   // Working days between dates
=DATEDIF(A1, B1, "Y")  // Years between dates
=DATEDIF(A1, B1, "M")  // Months between dates
=DATEDIF(A1, B1, "D")  // Days between dates
\`\`\`

</section>

<section id="logical-functions">

## Logical Functions

Decision-making formulas.

### IF – Basic Condition

\`\`\`
=IF(condition, value_if_true, value_if_false)

=IF(A1>100, "High", "Low")
=IF(A1="", "Empty", A1)
\`\`\`

### Nested IF

\`\`\`
=IF(A1>100, "High", IF(A1>50, "Medium", "Low"))
\`\`\`

### IFS – Multiple Conditions (Excel 2019+)

\`\`\`
=IFS(A1>100, "High", A1>50, "Medium", TRUE, "Low")
\`\`\`

### AND, OR, NOT

\`\`\`
=AND(A1>0, B1>0)       // Both conditions true
=OR(A1>100, B1>100)    // Either condition true
=NOT(A1>100)           // Inverts TRUE/FALSE

=IF(AND(A1>0, B1>0), "Both positive", "Not both positive")
\`\`\`

### SWITCH (Excel 2019+)

\`\`\`
=SWITCH(A1, 1, "One", 2, "Two", 3, "Three", "Other")
\`\`\`

### XOR – Exclusive OR

\`\`\`
=XOR(A1>10, B1>10)     // TRUE if exactly one is true
\`\`\`

</section>

<section id="statistical-functions">

## Statistical Functions

For data analysis.

### Central Tendency

\`\`\`
=AVERAGE(A:A)          // Mean
=MEDIAN(A:A)           // Median (middle value)
=MODE.SNGL(A:A)        // Most common value
=MODE.MULT(A:A)        // All modes (array formula)
\`\`\`

### Dispersion

\`\`\`
=STDEV.S(A:A)          // Sample standard deviation
=STDEV.P(A:A)          // Population standard deviation
=VAR.S(A:A)            // Sample variance
=VAR.P(A:A)            // Population variance
\`\`\`

### Ranking

\`\`\`
=MAX(A:A)              // Largest value
=MIN(A:A)              // Smallest value
=LARGE(A:A, 2)         // 2nd largest
=SMALL(A:A, 3)         // 3rd smallest
=RANK.EQ(A1, A:A)      // Rank of value
=PERCENTILE.INC(A:A, 0.9)  // 90th percentile
=QUARTILE.INC(A:A, 1)      // 1st quartile
\`\`\`

</section>

<section id="array-formulas">

## Array Formulas

Work with multiple values at once.

### Dynamic Arrays (Excel 365)

\`\`\`
=UNIQUE(A:A)                   // Unique values
=SORT(A:A)                     // Sort ascending
=SORT(A:A, 1, -1)              // Sort descending
=FILTER(A:D, B:B="North")      // Filter rows
=SEQUENCE(10)                  // Numbers 1-10
=SEQUENCE(5, 3)                // 5 rows × 3 columns
=RANDARRAY(5, 3)               // Random numbers
\`\`\`

### FILTER Examples

\`\`\`
=FILTER(A:D, B:B>1000)         // Single condition
=FILTER(A:D, (B:B="North")*(C:C>1000))  // AND (multiply)
=FILTER(A:D, (B:B="North")+(B:B="South"))  // OR (add)
=FILTER(A:D, B:B>1000, "No results")  // With fallback
\`\`\`

### Legacy Array Formulas (Ctrl+Shift+Enter)

\`\`\`
{=SUM(A:A*B:B)}               // Sum of products
{=AVERAGE(IF(A:A>0, B:B))}    // Conditional average
\`\`\`

</section>

<section id="error-handling">

## Error Handling

Manage formula errors gracefully.

### IFERROR

\`\`\`
=IFERROR(A1/B1, 0)             // Return 0 if error
=IFERROR(VLOOKUP(...), "Not found")
\`\`\`

### IFNA

\`\`\`
=IFNA(XLOOKUP(...), "No match")  // Handle #N/A only
\`\`\`

### Error Checking

\`\`\`
=ISERROR(A1)           // TRUE if any error
=ISNA(A1)              // TRUE if #N/A
=ISNUMBER(A1)          // TRUE if number
=ISTEXT(A1)            // TRUE if text
=ISBLANK(A1)           // TRUE if empty
\`\`\`

### Common Errors

| Error | Meaning | Common Cause |
|-------|---------|--------------|
| #VALUE! | Wrong type | Text where number expected |
| #REF! | Invalid reference | Deleted cells |
| #NAME? | Unrecognized | Typo in function name |
| #DIV/0! | Division by zero | Denominator is 0 |
| #N/A | Not found | Lookup found no match |
| #NUM! | Invalid number | Number too large/small |

</section>

<section id="best-practices">

## Formula Best Practices

### 1. Use Named Ranges

Instead of:
\`\`\`
=SUMIF($A$2:$A$1000, "North", $C$2:$C$1000)
\`\`\`

Create named ranges and use:
\`\`\`
=SUMIF(Region, "North", Sales)
\`\`\`

### 2. Break Complex Formulas

Instead of one massive formula, use helper columns:
- Easier to debug
- Easier to understand
- Better performance

### 3. Avoid Volatile Functions When Possible

These recalculate every time anything changes:
- NOW(), TODAY()
- RAND(), RANDBETWEEN()
- OFFSET(), INDIRECT()

### 4. Use Tables

Convert ranges to Tables (Ctrl + T):
- Structured references (\`[@Column]\`)
- Auto-expanding ranges
- Easier maintenance

### 5. Document Your Formulas

Use cell comments or a documentation sheet to explain complex logic.

### 6. Test Edge Cases

Always test with:
- Empty cells
- Zero values
- Negative numbers
- Text where numbers expected
- Very large numbers

</section>

## Conclusion

This reference covers the essential Excel formulas for professional use. Bookmark it and return when you need a quick syntax reminder or want to learn a new function.

The key to mastery is practice. Pick one new function per week, find a real use case, and implement it. Soon, you'll be combining these functions in creative ways to solve complex problems.

Remember: the best formula is the one that's correct, readable, and maintainable. Don't optimize for cleverness—optimize for clarity.`
  },
  {
    slug: "google-sheets-mastery-beginner-to-advanced",
    title: "Google Sheets Mastery: From Beginner to Advanced",
    description: "Your complete journey from Sheets novice to power user. This comprehensive guide covers everything from basic navigation to advanced QUERY functions and automation.",
    category: "sheets",
    readTime: "30 min read",
    publishedAt: "2024-11-15",
    tableOfContents: [
      { id: "getting-started", title: "Getting Started", level: 1 },
      { id: "essential-functions", title: "Essential Functions", level: 1 },
      { id: "data-organization", title: "Data Organization", level: 1 },
      { id: "conditional-formatting", title: "Conditional Formatting", level: 1 },
      { id: "query-function", title: "Mastering QUERY", level: 1 },
      { id: "array-formulas", title: "Array Formulas", level: 1 },
      { id: "data-validation", title: "Data Validation", level: 1 },
      { id: "pivot-tables", title: "Pivot Tables", level: 1 },
      { id: "charts-visualization", title: "Charts & Visualization", level: 1 },
      { id: "automation", title: "Automation with Apps Script", level: 1 }
    ],
    content: `# Google Sheets Mastery: From Beginner to Advanced

Google Sheets has transformed from a simple online spreadsheet into a powerful data analysis platform. Whether you're tracking personal finances or managing business operations, this guide will take you from basic competency to advanced mastery.

<section id="getting-started">

## Getting Started with Google Sheets

### Creating Your First Spreadsheet

1. Go to sheets.google.com
2. Click the **+** button or "Blank" template
3. Your new spreadsheet opens instantly

### The Interface

**Menu Bar**: File, Edit, View, Insert, Format, Data, Tools, Extensions, Help

**Toolbar**: Quick access to common formatting and functions

**Formula Bar**: Shows the contents of the active cell

**Sheet Tabs**: Navigate between sheets (bottom of screen)

### Essential Navigation

| Action | Shortcut |
|--------|----------|
| Go to cell A1 | Ctrl + Home |
| Go to last cell | Ctrl + End |
| Jump to edge of data | Ctrl + Arrow |
| Select column | Ctrl + Space |
| Select row | Shift + Space |
| Select all | Ctrl + A |

### Your First Formula

Click a cell and type:
\`\`\`
=SUM(A1:A10)
\`\`\`

Sheets auto-completes function names as you type. Press Tab to accept suggestions.

</section>

<section id="essential-functions">

## Essential Functions

### Mathematical Functions

\`\`\`
=SUM(A1:A10)           // Add values
=AVERAGE(A1:A10)       // Calculate mean
=COUNT(A1:A10)         // Count numbers
=COUNTA(A1:A10)        // Count non-empty cells
=MAX(A1:A10)           // Largest value
=MIN(A1:A10)           // Smallest value
=ROUND(A1, 2)          // Round to 2 decimals
\`\`\`

### Text Functions

\`\`\`
=CONCATENATE(A1, " ", B1)  // Join text (or use &)
=LEFT(A1, 5)               // First 5 characters
=RIGHT(A1, 3)              // Last 3 characters
=MID(A1, 3, 5)             // 5 chars from position 3
=UPPER(A1)                 // UPPERCASE
=LOWER(A1)                 // lowercase
=PROPER(A1)                // Title Case
=TRIM(A1)                  // Remove extra spaces
=LEN(A1)                   // Character count
\`\`\`

### Logical Functions

\`\`\`
=IF(A1>100, "High", "Low")
=IF(AND(A1>50, B1>50), "Pass", "Fail")
=IF(OR(A1>100, B1>100), "At least one high", "Both low")
=IFS(A1>90, "A", A1>80, "B", A1>70, "C", TRUE, "F")
\`\`\`

### Lookup Functions

\`\`\`
=VLOOKUP(A1, B:D, 3, FALSE)    // Look up and return 3rd column
=HLOOKUP(A1, 1:3, 3, FALSE)    // Horizontal lookup
=INDEX(C:C, MATCH(A1, B:B, 0)) // Flexible lookup
=XLOOKUP(A1, B:B, C:C)         // Modern lookup (available in Sheets)
\`\`\`

### Date Functions

\`\`\`
=TODAY()                   // Current date
=NOW()                     // Current date and time
=DATE(2024, 12, 25)        // Create a date
=YEAR(A1)                  // Extract year
=MONTH(A1)                 // Extract month
=DAY(A1)                   // Extract day
=DATEDIF(A1, B1, "D")      // Days between dates
=EDATE(A1, 3)              // Add 3 months
=EOMONTH(A1, 0)            // End of month
\`\`\`

</section>

<section id="data-organization">

## Data Organization

### Sorting Data

**Simple Sort:**
1. Click any cell in your data
2. Data → Sort range
3. Choose column and direction

**Advanced Sort (Multiple Columns):**
1. Data → Sort range → Advanced range sorting options
2. Add multiple sort conditions

### Filtering Data

**Create Filter:**
1. Select your data range
2. Data → Create a filter
3. Click filter dropdowns in headers

**Filter Views:**

Create saved filter views that don't affect other users:
1. Data → Filter views → Create new filter view
2. Apply your filters
3. Name and save the view

### Freezing Rows and Columns

Keep headers visible while scrolling:

**Freeze Top Row:**
View → Freeze → 1 row

**Freeze First Column:**
View → Freeze → 1 column

**Custom Freeze:**
1. Click the cell below and to the right of where you want to freeze
2. View → Freeze → Up to current row/column

### Grouping Data

Collapse and expand sections:
1. Select rows or columns to group
2. Data → Group rows/columns
3. Click the +/- to expand/collapse

</section>

<section id="conditional-formatting">

## Conditional Formatting

Automatically format cells based on their values.

### Basic Rules

1. Select your range
2. Format → Conditional formatting
3. Choose a rule type

**Common Rules:**
- Greater than / Less than
- Text contains
- Date is before/after
- Cell is empty

### Color Scales

Visualize data ranges with gradients:
1. Format → Conditional formatting
2. Format rules → Color scale
3. Choose a preset or customize

### Icon Sets

Not native to Sheets, but you can simulate with formulas:
\`\`\`
=IF(A1>100, "🟢", IF(A1>50, "🟡", "🔴"))
\`\`\`

### Custom Formulas

Use any formula that returns TRUE/FALSE:
\`\`\`
=A1>AVERAGE($A:$A)        // Above average
=ISEVEN(ROW())            // Even rows
=REGEXMATCH(A1, "urgent") // Contains "urgent" (case insensitive)
\`\`\`

</section>

<section id="query-function">

## Mastering the QUERY Function

QUERY is Google Sheets' superpower—SQL-like queries on spreadsheet data.

### Basic Syntax

\`\`\`
=QUERY(data, query, [headers])
\`\`\`

- **data**: Range to query
- **query**: SQL-like query string
- **headers**: Number of header rows (optional, usually 1)

### SELECT - Choose Columns

\`\`\`
=QUERY(A:E, "SELECT A, C, E")        // Specific columns
=QUERY(A:E, "SELECT *")              // All columns
\`\`\`

### WHERE - Filter Rows

\`\`\`
=QUERY(A:E, "SELECT * WHERE B = 'North'")
=QUERY(A:E, "SELECT * WHERE C > 1000")
=QUERY(A:E, "SELECT * WHERE B = 'North' AND C > 1000")
=QUERY(A:E, "SELECT * WHERE B = 'North' OR B = 'South'")
=QUERY(A:E, "SELECT * WHERE B CONTAINS 'North'")
=QUERY(A:E, "SELECT * WHERE A > date '2024-01-01'")
\`\`\`

### ORDER BY - Sort Results

\`\`\`
=QUERY(A:E, "SELECT * ORDER BY C DESC")          // Descending
=QUERY(A:E, "SELECT * ORDER BY B ASC, C DESC")   // Multiple columns
\`\`\`

### GROUP BY - Aggregate Data

\`\`\`
=QUERY(A:E, "SELECT B, SUM(C) GROUP BY B")
=QUERY(A:E, "SELECT B, COUNT(A), AVG(C) GROUP BY B")
\`\`\`

Available aggregations: SUM, COUNT, AVG, MAX, MIN

### LIMIT - Restrict Results

\`\`\`
=QUERY(A:E, "SELECT * ORDER BY C DESC LIMIT 10")  // Top 10
\`\`\`

### LABEL - Rename Columns

\`\`\`
=QUERY(A:E, "SELECT B, SUM(C) GROUP BY B LABEL SUM(C) 'Total Sales'")
\`\`\`

### PIVOT - Create Crosstabs

\`\`\`
=QUERY(A:E, "SELECT A, SUM(D) PIVOT B")
\`\`\`

### Using Cell References in QUERY

Use ampersand (&) to insert cell values:
\`\`\`
=QUERY(A:E, "SELECT * WHERE B = '"&G1&"'")
\`\`\`

For numbers (no quotes):
\`\`\`
=QUERY(A:E, "SELECT * WHERE C > "&G1)
\`\`\`

</section>

<section id="array-formulas">

## Array Formulas

Process multiple values in a single formula.

### ARRAYFORMULA

Apply a formula to an entire column:

Instead of copying \`=A2*B2\` down 1000 rows:
\`\`\`
=ARRAYFORMULA(A2:A*B2:B)
\`\`\`

With IF to handle empty cells:
\`\`\`
=ARRAYFORMULA(IF(A2:A="", "", A2:A*B2:B))
\`\`\`

### UNIQUE

Get unique values:
\`\`\`
=UNIQUE(A2:A)
\`\`\`

Unique combinations:
\`\`\`
=UNIQUE(A2:B)
\`\`\`

### FILTER

Return rows matching criteria:
\`\`\`
=FILTER(A2:E, B2:B="North")                    // Single condition
=FILTER(A2:E, B2:B="North", C2:C>1000)         // Multiple conditions (AND)
=FILTER(A2:E, (B2:B="North")+(B2:B="South"))   // OR condition
\`\`\`

### SORT

Sort a range:
\`\`\`
=SORT(A2:E, 3, FALSE)                          // Sort by column 3, descending
=SORT(A2:E, 1, TRUE, 3, FALSE)                 // Multiple columns
\`\`\`

### SORTN

Sort and limit:
\`\`\`
=SORTN(A2:E, 10, 0, 3, FALSE)                  // Top 10 by column 3
\`\`\`

### Combining Array Functions

Get top 5 sales in North region:
\`\`\`
=SORTN(FILTER(A2:E, B2:B="North"), 5, 0, 4, FALSE)
\`\`\`

</section>

<section id="data-validation">

## Data Validation

Control what users can enter.

### Creating Dropdown Lists

1. Select target cells
2. Data → Data validation
3. Criteria: "List from a range" or "List of items"
4. Enter your options

### Dynamic Dropdowns

Reference a range that can change:
\`\`\`
=UNIQUE(FILTER(Products!A:A, Products!A:A<>""))
\`\`\`

### Dependent Dropdowns

Create cascading dropdowns where the second depends on the first:

1. First dropdown: Categories (A1)
2. Second dropdown validation formula:
\`\`\`
=FILTER(B:B, A:A=A1)
\`\`\`

### Validation Rules

- **Number**: Within range, whole number, etc.
- **Text**: Specific length, contains certain text
- **Date**: Before, after, between
- **Checkbox**: Simple true/false input
- **Custom formula**: Any formula returning TRUE/FALSE

</section>

<section id="pivot-tables">

## Pivot Tables

Summarize large datasets without formulas.

### Creating a Pivot Table

1. Select your data
2. Insert → Pivot table
3. Choose: New sheet (recommended)
4. Click Create

### Pivot Table Editor

**Rows**: Categories to group by (e.g., Region, Product)
**Columns**: Cross-tabulate categories
**Values**: Numbers to calculate (Sum, Count, Average, etc.)
**Filters**: Filter the entire pivot table

### Example: Sales by Region and Product

1. Drag "Region" to Rows
2. Drag "Product" to Columns
3. Drag "Sales" to Values

Instant summary table!

### Calculated Fields

Add custom calculations:
1. Click "Add" next to Values
2. Choose "Calculated Field"
3. Create formula using field names

### Pivot Table Tips

- **Refresh**: Data changes require manual refresh (right-click → Refresh)
- **Formatting**: Right-click cells to format numbers
- **Show details**: Double-click a value to see underlying data
- **Sort**: Use dropdown arrows to sort

</section>

<section id="charts-visualization">

## Charts & Visualization

Turn data into insights.

### Creating Charts

1. Select your data (including headers)
2. Insert → Chart
3. Chart editor opens automatically

### Chart Types

- **Column/Bar**: Compare categories
- **Line**: Show trends over time
- **Pie**: Show proportions
- **Scatter**: Show correlation
- **Combo**: Mix chart types
- **Geo**: Map-based visualization

### Chart Customization

**Chart Editor - Setup Tab:**
- Change chart type
- Modify data range
- Switch rows/columns

**Chart Editor - Customize Tab:**
- Chart title and style
- Axis titles and formatting
- Legend position
- Colors and fonts
- Data labels

### Sparklines

Miniature charts in cells:
\`\`\`
=SPARKLINE(A1:G1)                             // Line
=SPARKLINE(A1, {"charttype","bar"})           // Bar
=SPARKLINE(A1, {"charttype","column"})        // Column
\`\`\`

With options:
\`\`\`
=SPARKLINE(A1:G1, {"color","blue"; "linewidth",2})
=SPARKLINE(A1/B1, {"charttype","bar"; "max",1; "color1","green"})
\`\`\`

</section>

<section id="automation">

## Automation with Apps Script

Take Sheets to the next level with custom scripts.

### Opening the Script Editor

Extensions → Apps Script

### Your First Script

\`\`\`javascript
function myFirstFunction() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getRange("A1");
  range.setValue("Hello, Sheets!");
}
\`\`\`

Run it: Click ▶ button

### Common Script Tasks

**Read and Write Data:**
\`\`\`javascript
function processData() {
  const sheet = SpreadsheetApp.getActiveSheet();

  // Read
  const value = sheet.getRange("A1").getValue();
  const values = sheet.getRange("A1:C10").getValues();

  // Write
  sheet.getRange("D1").setValue("Processed");
  sheet.getRange("D1:D10").setValues(newValues);
}
\`\`\`

**Create Custom Functions:**
\`\`\`javascript
function DOUBLE(value) {
  return value * 2;
}
// Use in sheet: =DOUBLE(A1)
\`\`\`

**Send Email:**
\`\`\`javascript
function sendEmail() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getRange("A2:C2").getValues()[0];

  GmailApp.sendEmail(
    data[0],  // email
    "Subject",
    \`Hello \${data[1]}, your order \${data[2]} shipped.\`
  );
}
\`\`\`

### Triggers

Automate script execution:

1. Open Script Editor
2. Click clock icon (Triggers)
3. Create trigger:
   - **Time-driven**: Run every hour/day/week
   - **On edit**: Run when sheet changes
   - **On form submit**: Run when form submitted

### Example: Auto-Archive

\`\`\`javascript
function archiveCompleted() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const source = ss.getSheetByName("Tasks");
  const archive = ss.getSheetByName("Archive");

  const data = source.getDataRange().getValues();

  for (let i = data.length - 1; i >= 1; i--) {
    if (data[i][3] === "Complete") {
      archive.appendRow(data[i]);
      source.deleteRow(i + 1);
    }
  }
}
\`\`\`

</section>

## Next Steps

You've now covered everything from basic navigation to advanced automation. Here's how to continue your mastery:

1. **Practice daily**: Use Sheets for personal projects
2. **Learn shortcuts**: Speed comes from muscle memory
3. **Explore templates**: Gallery → Template gallery
4. **Join communities**: Reddit, Stack Overflow, Google Sheets forums
5. **Build projects**: Create a budget tracker, CRM, or inventory system

The best way to learn is by doing. Pick a real problem and solve it with Sheets.`
  },
  {
    slug: "google-sheets-query-function-guide",
    title: "The Complete Guide to the Google Sheets QUERY Function",
    description: "QUERY is the single most powerful function in Google Sheets. This guide walks through SELECT, WHERE, GROUP BY, ORDER BY, PIVOT, and the edge cases that trip up beginners, with copy-paste examples throughout.",
    category: "sheets",
    readTime: "28 min read",
    publishedAt: "2026-04-20",
    tableOfContents: [
      { id: "introduction", title: "Why QUERY Matters", level: 1 },
      { id: "basic-syntax", title: "Basic Syntax", level: 1 },
      { id: "select-clause", title: "The SELECT Clause", level: 1 },
      { id: "where-clause", title: "The WHERE Clause", level: 1 },
      { id: "group-by", title: "GROUP BY and Aggregation", level: 1 },
      { id: "order-by-limit", title: "ORDER BY and LIMIT", level: 1 },
      { id: "pivot-clause", title: "PIVOT: Two-Dimensional Summaries", level: 1 },
      { id: "labels-formats", title: "LABEL and FORMAT", level: 1 },
      { id: "dynamic-queries", title: "Building Dynamic Queries", level: 1 },
      { id: "common-errors", title: "Common Errors and Fixes", level: 1 },
      { id: "real-world-patterns", title: "Real-World Patterns", level: 1 }
    ],
    content: `# The Complete Guide to the Google Sheets QUERY Function

Google Sheets has around five hundred functions. You can get by knowing twenty of them. Of those twenty, one function does more work than any other: QUERY.

QUERY lets you run a SQL-like query against a range of cells. Once you understand it, most of the elaborate combinations of FILTER, SORT, SUMIFS, and array formulas you were reaching for collapse into a single readable expression. This guide walks through the function from basic syntax to the patterns experienced users rely on every day.

<section id="introduction">

## Why QUERY Matters

Here is the promise. Any reporting problem that involves filtering, grouping, sorting, or reshaping tabular data — and most of them do — can be solved with one QUERY formula. The alternatives are almost always longer, harder to read, and more fragile.

Three examples of what you can do with a single QUERY:

- Filter a table by multiple conditions and sort the output
- Summarise a transaction log by month and category with totals
- Pivot a long-format table into a wide-format report

QUERY is not the fastest function on very large datasets, and it has a handful of quirks that trip up beginners. But for the problems it is designed for, it is closer to a dedicated analytics language than any other spreadsheet function.

</section>

<section id="basic-syntax">

## Basic Syntax

The function takes three arguments:

\`\`\`
=QUERY(data, query, headers)
\`\`\`

- **data** — the range to query, which must be rectangular and contain consistent data types per column
- **query** — a string written in Google Visualization API Query Language (a SQL subset)
- **headers** — the number of header rows in the data, usually 1

A minimal example:

\`\`\`
=QUERY(A1:D100, "SELECT A, B, D WHERE C > 100", 1)
\`\`\`

That returns columns A, B, and D from the first hundred rows where column C is greater than 100.

**Column references in the query string are letters, not names.** Even if your header says "Revenue," you refer to it as column C (or whatever its position is). This is the most common source of confusion for new users.

</section>

<section id="select-clause">

## The SELECT Clause

The SELECT clause picks which columns come out. It supports several patterns.

**Select specific columns:**

\`\`\`
=QUERY(A1:E, "SELECT A, C, E", 1)
\`\`\`

**Select all columns:**

\`\`\`
=QUERY(A1:E, "SELECT *", 1)
\`\`\`

**Aggregates:**

\`\`\`
=QUERY(A1:E, "SELECT COUNT(A), SUM(C), AVG(D)", 1)
\`\`\`

**Arithmetic in the SELECT:**

\`\`\`
=QUERY(A1:E, "SELECT A, B, C, D, B*C", 1)
\`\`\`

This returns columns A-D and a fifth column computed as the product of B and C. The computed column has no header by default. We'll cover LABEL for renaming it further down.

**String manipulation** is limited in QUERY. There is no CONCAT or SUBSTRING inside QUERY. If you need derived text columns, usually it's better to compute them in a helper column and reference that column in your QUERY.

</section>

<section id="where-clause">

## The WHERE Clause

WHERE filters rows. It supports standard comparison operators, logical operators, and a handful of useful string functions.

**Comparison operators:**

\`\`\`
=QUERY(A1:E, "SELECT * WHERE C > 1000", 1)
=QUERY(A1:E, "SELECT * WHERE C >= 500 AND C <= 2000", 1)
=QUERY(A1:E, "SELECT * WHERE C != 0", 1)
\`\`\`

**Text matching:**

\`\`\`
=QUERY(A1:E, "SELECT * WHERE B = 'North'", 1)
=QUERY(A1:E, "SELECT * WHERE B CONTAINS 'north'", 1)
=QUERY(A1:E, "SELECT * WHERE B STARTS WITH 'N'", 1)
=QUERY(A1:E, "SELECT * WHERE B ENDS WITH 'region'", 1)
=QUERY(A1:E, "SELECT * WHERE B MATCHES '^[A-C].*'", 1)
\`\`\`

Text values use single quotes inside the query string. If you need to include a literal apostrophe in a value, escape it or use a cell reference (covered below).

**CONTAINS is case-sensitive.** Use LOWER() in the WHERE clause to normalise: \`WHERE LOWER(B) CONTAINS 'north'\`.

**Date comparisons** require the literal \`date\` keyword and ISO format:

\`\`\`
=QUERY(A1:E, "SELECT * WHERE A > date '2025-01-01'", 1)
=QUERY(A1:E, "SELECT * WHERE A >= date '2025-01-01' AND A < date '2026-01-01'", 1)
\`\`\`

**NULL handling:**

\`\`\`
=QUERY(A1:E, "SELECT * WHERE B IS NOT NULL", 1)
=QUERY(A1:E, "SELECT * WHERE B IS NULL", 1)
\`\`\`

Empty cells in Sheets are treated as NULL for QUERY purposes.

**Combining conditions** uses AND, OR, and parentheses:

\`\`\`
=QUERY(A1:E, "SELECT * WHERE (B = 'North' OR B = 'South') AND C > 1000", 1)
\`\`\`

</section>

<section id="group-by">

## GROUP BY and Aggregation

GROUP BY collapses rows by a column value and applies aggregates from the SELECT.

**Simple grouping with a sum:**

\`\`\`
=QUERY(A1:E, "SELECT B, SUM(C) GROUP BY B", 1)
\`\`\`

Returns one row per unique value in B, with the total of C.

**Multiple group fields:**

\`\`\`
=QUERY(A1:E, "SELECT B, D, SUM(C), COUNT(A) GROUP BY B, D", 1)
\`\`\`

**Every non-aggregate column in the SELECT must appear in the GROUP BY.** This is a SQL rule and QUERY enforces it strictly.

**Aggregate functions supported:**

- SUM
- AVG
- MIN
- MAX
- COUNT

**Filter before grouping** with WHERE:

\`\`\`
=QUERY(A1:E, "SELECT B, SUM(C) WHERE A > date '2025-01-01' GROUP BY B", 1)
\`\`\`

**Filter after grouping** with HAVING (less commonly needed but useful):

Note: HAVING is not supported in Google Sheets QUERY. To filter after grouping, wrap the query in another QUERY, or filter in the WHERE clause where possible.

</section>

<section id="order-by-limit">

## ORDER BY and LIMIT

**Sort ascending (default):**

\`\`\`
=QUERY(A1:E, "SELECT B, C ORDER BY C", 1)
\`\`\`

**Sort descending:**

\`\`\`
=QUERY(A1:E, "SELECT B, C ORDER BY C DESC", 1)
\`\`\`

**Multiple sort keys:**

\`\`\`
=QUERY(A1:E, "SELECT B, C, D ORDER BY B ASC, C DESC", 1)
\`\`\`

**Sort by aggregate:**

\`\`\`
=QUERY(A1:E, "SELECT B, SUM(C) GROUP BY B ORDER BY SUM(C) DESC", 1)
\`\`\`

**LIMIT for top N:**

\`\`\`
=QUERY(A1:E, "SELECT B, SUM(C) GROUP BY B ORDER BY SUM(C) DESC LIMIT 10", 1)
\`\`\`

Returns the top ten groups by total. Classic "top 10 customers" pattern.

**OFFSET for pagination:**

\`\`\`
=QUERY(A1:E, "SELECT * ORDER BY A LIMIT 20 OFFSET 40", 1)
\`\`\`

Skips the first 40 rows and returns the next 20.

</section>

<section id="pivot-clause">

## PIVOT: Two-Dimensional Summaries

PIVOT is where QUERY pulls ahead of most alternatives. It turns a long-format table into a wide-format pivot without a single extra formula.

Given a transactions table with columns Date, Region, Product, Amount, pivoting Region across columns and summing Amount by Product:

\`\`\`
=QUERY(A1:D, "SELECT C, SUM(D) GROUP BY C PIVOT B", 1)
\`\`\`

This produces a table with Product rows, Region columns, and total Amount in each cell.

**Pivot with filter:**

\`\`\`
=QUERY(A1:D, "SELECT C, SUM(D) WHERE A > date '2025-01-01' GROUP BY C PIVOT B", 1)
\`\`\`

**Pivot with sort:**

\`\`\`
=QUERY(A1:D, "SELECT C, SUM(D) GROUP BY C PIVOT B ORDER BY SUM(D) DESC", 1)
\`\`\`

The columns in a PIVOT output are the unique values of the pivoted column. This is dynamic: if a new region appears in your data, a new column appears in the output without changing the formula.

**The catch:** rows and columns in a pivot are always sorted alphabetically in the output, regardless of ORDER BY. This is a known limitation. For sort control, wrap the pivot in another QUERY.

</section>

<section id="labels-formats">

## LABEL and FORMAT

By default, computed columns in a QUERY have unhelpful headers like "sum amount" or "B*C". LABEL renames them.

\`\`\`
=QUERY(A1:D, "SELECT B, SUM(C) GROUP BY B LABEL SUM(C) 'Total Revenue'", 1)
\`\`\`

**Label multiple columns in one query:**

\`\`\`
=QUERY(A1:D, "SELECT B, SUM(C), COUNT(A) GROUP BY B LABEL SUM(C) 'Revenue', COUNT(A) 'Orders'", 1)
\`\`\`

**Hide a header** with an empty label:

\`\`\`
=QUERY(A1:D, "SELECT B, SUM(C) GROUP BY B LABEL SUM(C) ''", 1)
\`\`\`

**FORMAT controls how values are displayed.** This does not change the underlying value, only the display. Standard number and date format strings work.

\`\`\`
=QUERY(A1:D, "SELECT A, B, C FORMAT A 'dd-MMM-yyyy', C '$#,##0.00'", 1)
\`\`\`

</section>

<section id="dynamic-queries">

## Building Dynamic Queries

The power of QUERY multiplies when the query string itself is built from cell references. This lets you build interactive dashboards where users change a filter cell and the query responds.

**Using a cell as a filter value:**

\`\`\`
=QUERY(A1:E, "SELECT * WHERE B = '" & G1 & "'", 1)
\`\`\`

If G1 contains "North", the query filters for region North.

**Caution with quotes:** single quotes go inside the query string to wrap text values. The & operator concatenates the cell reference in between. This is fiddly; test carefully.

**Using a cell for a date:**

\`\`\`
=QUERY(A1:E, "SELECT * WHERE A > date '" & TEXT(G1,"yyyy-MM-dd") & "'", 1)
\`\`\`

**Using a cell for a numeric threshold:**

\`\`\`
=QUERY(A1:E, "SELECT * WHERE C > " & G1, 1)
\`\`\`

Numeric values do not need quotes.

**Multiple dynamic filters:**

\`\`\`
=QUERY(A1:E, "SELECT * WHERE B = '" & G1 & "' AND C > " & G2, 1)
\`\`\`

**Conditional filter logic.** If a filter cell is empty, you may want to show all rows. IFERROR or IF patterns can toggle between queries.

\`\`\`
=IF(G1="", QUERY(A1:E, "SELECT *", 1), QUERY(A1:E, "SELECT * WHERE B = '" & G1 & "'", 1))
\`\`\`

For complex dashboards, drop-downs from Data Validation feeding into these cells give you a filterable report in under five minutes of setup.

</section>

<section id="common-errors">

## Common Errors and Fixes

**#VALUE! - "Unable to parse query string"**

The query string has a syntax error. Most common causes: missing or unmatched quotes, wrong column letter (referring to a column that doesn't exist in the data range), misspelled keyword (e.g. "GROUPBY" instead of "GROUP BY").

Read the error message fully. Sheets tells you which column name was unrecognised or where the parser gave up.

**#N/A - "No column"**

You referred to a column by a letter that is outside the data range. If your range is A1:E, the only valid references are Col1 through Col5 (or A-E). Referring to F will fail.

**Column letter vs Col1 vs header name.**

- When the range starts at A1, you use column letters: A, B, C.
- When the range starts elsewhere, use Col1, Col2, Col3 referring to position within the range.
- Header names in quotes also work: \`SELECT A WHERE "Region" = 'North'\` — but this is fragile if the header text changes.

For portable formulas, the letter convention is usually safest.

**Mixed data types break aggregation.**

If column C contains both numbers and text (e.g., "N/A"), SUM(C) will fail or produce zero. QUERY treats each column as a single data type; mixed columns fall back to the majority type.

Fix by cleaning the source data, or wrap the column with IFERROR in a helper column before querying.

**Empty output from a PIVOT.**

Often caused by having null values in the pivoted column. Filter them out with \`WHERE X IS NOT NULL\` before pivoting.

**Dates not filtering.**

Usually a format mismatch. The WHERE clause requires \`date 'YYYY-MM-DD'\` format. If your date cells are text, they won't compare properly. Convert text dates to real dates with DATEVALUE before querying.

**QUERY is slow on very large ranges.**

Above about 50,000 rows, QUERY performance degrades. For large datasets, consider importing to BigQuery or using a dedicated pivot table (Data > Pivot Table). QUERY is optimised for reporting-scale data, not analytics-scale.

</section>

<section id="real-world-patterns">

## Real-World Patterns

A handful of QUERY patterns cover most reporting needs. These are the ones experienced users reach for without thinking.

**Top N by group:**

\`\`\`
=QUERY(A1:E, "SELECT B, SUM(C) GROUP BY B ORDER BY SUM(C) DESC LIMIT 10 LABEL SUM(C) 'Total'", 1)
\`\`\`

**Month-over-month summary:**

Add a helper column containing \`=TEXT(A2,"yyyy-MM")\`, then query grouped by that helper column. QUERY doesn't have a DATE_TRUNC function, so this helper-column approach is standard.

**Running total:**

QUERY doesn't support window functions. For running totals, use a SUMIF approach outside the QUERY, or transform the data in a helper column.

**Filter by list of values:**

Put your list in a range (say G1:G10). Use a MATCH-based helper column in the source, or iterate with OR conditions:

\`\`\`
=QUERY(A1:E, "SELECT * WHERE B = '" & G1 & "' OR B = '" & G2 & "'", 1)
\`\`\`

For long lists, QUERY's string length becomes unwieldy. Consider FILTER with MATCH instead.

**Deduplicating with latest record:**

To get one row per category with the most recent date, sort descending by date and wrap in UNIQUE on the grouping column. Or use a helper approach with MAX(date) GROUP BY category, then look up the full row.

**Combining tables:**

To query across two ranges, stack them with \`{A1:E100; G1:K100}\` and query the union. Both ranges must have the same column structure.

\`\`\`
=QUERY({Sheet1!A2:D; Sheet2!A2:D}, "SELECT Col1, SUM(Col4) GROUP BY Col1", 0)
\`\`\`

Note: stacked ranges use Col1, Col2 syntax (not letters) and headers: 0 because the stacked range has no single header row.

**Cross-sheet references:**

QUERY works with cross-sheet ranges natively:

\`\`\`
=QUERY(Transactions!A:E, "SELECT B, SUM(C) GROUP BY B", 1)
\`\`\`

Combined with IMPORTRANGE for cross-workbook queries, QUERY becomes the engine behind multi-source dashboards.

## Putting It Together: A Dashboard in Twelve Lines

Imagine a transactions sheet with columns Date, Region, Product, Rep, Amount. A full filterable dashboard can be built with six QUERY formulas:

**Monthly totals (chart-ready):**
\`\`\`
=QUERY(A1:E, "SELECT TEXT(A,'yyyy-MM'), SUM(E) GROUP BY TEXT(A,'yyyy-MM') LABEL SUM(E) 'Revenue'", 1)
\`\`\`
(Note: TEXT inside QUERY works in Google Sheets but not in SQL. Alternative: use a helper column.)

**Top 10 customers:**
\`\`\`
=QUERY(A1:E, "SELECT B, SUM(E) GROUP BY B ORDER BY SUM(E) DESC LIMIT 10", 1)
\`\`\`

**Region x Product pivot:**
\`\`\`
=QUERY(A1:E, "SELECT B, SUM(E) GROUP BY B PIVOT C", 1)
\`\`\`

**Filtered detail view (uses cells G1 and G2 as filter controls):**
\`\`\`
=QUERY(A1:E, "SELECT * WHERE B = '" & G1 & "' AND A > date '" & TEXT(G2,"yyyy-MM-dd") & "' ORDER BY A DESC", 1)
\`\`\`

**Rep leaderboard:**
\`\`\`
=QUERY(A1:E, "SELECT D, COUNT(A), SUM(E) GROUP BY D ORDER BY SUM(E) DESC LIMIT 20 LABEL COUNT(A) 'Deals', SUM(E) 'Revenue'", 1)
\`\`\`

Each formula reads like a sentence. Each updates instantly when the source data changes. No pivot table refresh. No manual drag-down. This is what QUERY is for.

## Where to Go from Here

The fastest way to become fluent in QUERY is to replace existing formulas with QUERY versions. Take a report you build regularly with SUMIFS, FILTER, or pivot tables, and rewrite it as one or two QUERY calls. The first few rewrites are slow. By the fifth, the function has become second nature.

For pairing this with advanced Excel data techniques, see our [guide to Excel GROUPBY and PIVOTBY functions](/resources/excel-groupby-pivotby-functions). And if you're building AI-assisted workflows on top of Sheets, [How Do I Use AI](https://howdoiuse.ai) has patterns for combining QUERY outputs with language models for automated reporting.

## Closing

QUERY is not a new function. It has been in Google Sheets for over a decade. What it lacks in novelty it makes up for in reach. Half of the advanced formula combinations in a typical reporting workbook can be replaced by a single QUERY that is shorter, clearer, and more maintainable.

The learning curve is real — the SQL-flavoured syntax, the column-letter conventions, the quote escaping. A few hours of practice puts you past the initial friction. Past that, it is the most productive hour you will spend in Sheets.`
  },
  {
    slug: "mastering-conditional-formatting",
    title: "Mastering Conditional Formatting: A Complete Guide for Excel and Google Sheets",
    description: "Conditional formatting is the most under-used feature in spreadsheets. This guide walks through the seven categories of rules, the formula-based patterns that unlock the rest, the performance pitfalls that slow large workbooks, and a practical playbook for using formatting as a quality-control tool, not just decoration.",
    category: "general",
    readTime: "26 min read",
    publishedAt: "2026-04-27",
    tableOfContents: [
      { id: "introduction", title: "Why Conditional Formatting Is the Most Under-Used Feature", level: 1 },
      { id: "rule-categories", title: "The Seven Categories of Rules", level: 1 },
      { id: "formula-rules", title: "Formula-Based Rules: Where the Real Power Lives", level: 1 },
      { id: "patterns", title: "Twelve Patterns Worth Knowing by Heart", level: 1 },
      { id: "managing-rules", title: "Managing Rules in Real Workbooks", level: 1 },
      { id: "performance", title: "Performance: What Slows a Workbook and Why", level: 1 },
      { id: "google-sheets-differences", title: "Google Sheets: What Is the Same, What Is Different", level: 1 },
      { id: "data-quality", title: "Conditional Formatting as a Data Quality Tool", level: 1 },
      { id: "common-mistakes", title: "Common Mistakes and How to Avoid Them", level: 1 },
      { id: "next-steps", title: "Where to Go from Here", level: 1 }
    ],
    content: `# Mastering Conditional Formatting: A Complete Guide for Excel and Google Sheets

Conditional formatting is the feature most users have heard of, used a few times, and never invested in. It is also the feature that, used well, prevents more spreadsheet errors than any other single tool.

This guide is the version I wish I had when I started using spreadsheets seriously. It covers the rule categories, the formula patterns that account for ninety percent of advanced use, the performance pitfalls that punish large workbooks, the differences between Excel and Google Sheets, and the strategy of using conditional formatting as a quality-control instrument rather than as decoration.

<section id="introduction">

## Why Conditional Formatting Is the Most Under-Used Feature

A spreadsheet's value comes from two things. The accuracy of its data and the user's ability to read it correctly. Conditional formatting addresses both. It surfaces errors automatically. It draws the eye to outliers. It makes structural problems visible without anyone having to look for them.

The reason it is under-used is that the introductory features, highlight cells greater than 100, are unimpressive in isolation. The real value lives in formula-based rules and in the strategic use of formatting as a system rather than a decoration. Most users never make that transition.

Once you do, several things change. You catch errors you would otherwise miss. Your workbooks become faster to audit because the rules do part of the audit for you. The reports you produce become readable at a glance because the eye is guided to what matters. The cumulative effect across a year of work is substantial.

</section>

<section id="rule-categories">

## The Seven Categories of Rules

Both Excel and Google Sheets organise conditional formatting into rule categories. Knowing the categories is the foundation. The list below covers the seven that account for almost all real-world use.

Highlight cell rules. The basic comparisons. Greater than, less than, between, equal to, text contains, date occurring. These are the entry-level rules and where most users stop. Useful but limited.

Top and bottom rules. Highlight the top ten items, the top ten percent, the bottom five, above average, below average. Quick way to see distributions without sorting.

Data bars. Coloured bars inside cells whose length is proportional to the cell value. Most useful for comparing values across a column at a glance.

Colour scales. Two-colour or three-colour gradients applied to a range. The classic red-yellow-green heat map for performance data, financial variance, or any value that has a meaningful low and high.

Icon sets. Arrows, circles, flags, or other small icons placed inside cells based on value thresholds. Excellent for status dashboards. Limited to the icon sets the application provides.

Formula-based rules. The category that does almost everything the other six cannot. Any rule that needs to look at multiple cells, compare across rows, reference another sheet, or apply complex logic is a formula-based rule.

Duplicate values. Highlight cells whose value already appears elsewhere in the range. Useful for data quality but worth understanding the limits of, particularly across columns.

</section>

<section id="formula-rules">

## Formula-Based Rules: Where the Real Power Lives

Formula-based rules are the difference between someone who has used conditional formatting and someone who has mastered it. They follow a single pattern.

Select the range you want the rule to apply to. Open conditional formatting, choose new rule, and pick the option called use a formula to determine which cells to format. Enter a formula that returns TRUE or FALSE. The cell is formatted when the formula returns TRUE.

The most important detail is reference behaviour. The formula is evaluated as if it were placed in the top-left cell of the selected range. References inside the formula are then adjusted relative to each cell in the range, the same way they would be if you copied the formula. Master this and the rest of formula-based formatting falls into place.

A simple example. Suppose you select A1:A100 and want to highlight rows where the value is greater than the average of the column.

\`=A1 > AVERAGE($A$1:$A$100)\`

The reference to A1 is relative, so it adjusts as the rule is evaluated for each cell. The reference to the average range is absolute, so it stays anchored. As the rule walks down the column, it evaluates A1 > AVG, then A2 > AVG, then A3 > AVG, and so on.

Two common mistakes. Forgetting to anchor the absolute references and getting unexpected behaviour as the rule walks. And selecting the wrong starting range, so the formula evaluates relative to a cell other than the one you intended.

Once the reference behaviour is internalised, the rest is creativity.

</section>

<section id="patterns">

## Twelve Patterns Worth Knowing by Heart

The patterns below cover the conditional formatting rules I reach for repeatedly across financial models, dashboards, and operational trackers. Each is described with the problem it solves and the formula that solves it.

### 1. Highlight an Entire Row Based on One Cell

Problem. You want every row where the status column equals overdue to be coloured red.

Select the entire data range, including the status column and all others. Use a formula like:

\`=$E1="Overdue"\`

The dollar sign locks the column, so the rule evaluates the same column for every cell in the row. The row reference is relative, so it walks down. Every cell in the row gets the formatting when E says overdue.

### 2. Highlight Weekend Dates

Problem. In a date column, you want Saturdays and Sundays to be visually distinct.

\`=WEEKDAY(A1, 2) > 5\`

WEEKDAY with the second argument 2 returns 1 for Monday through 7 for Sunday. Anything above 5 is a weekend.

### 3. Highlight Dates in the Past

Problem. Show overdue items by date.

\`=A1 < TODAY()\`

Combine with a non-blank check to avoid colouring empty cells.

\`=AND(A1 <> "", A1 < TODAY())\`

### 4. Highlight Cells That Differ from Their Row Neighbour

Problem. In a comparison column, show where this period differs from last period.

\`=A1 <> B1\`

For numerical comparison with a tolerance:

\`=ABS(A1 - B1) > 0.01\`

### 5. Highlight Duplicates in a Cross-Column Pair

The built-in duplicate rule operates on a single range. To find duplicates of a key across two columns:

\`=COUNTIF($B:$B, $A1) > 0\`

Format the cells in column A whose values also appear in column B.

### 6. Highlight Top Five Without the Top-N Rule

Top and bottom rules work but have limitations. The formula version is more flexible.

\`=A1 >= LARGE($A$1:$A$100, 5)\`

Highlights the cells whose value is at least the fifth-largest in the range.

### 7. Highlight Cells That Are Outliers

Statistical outliers, defined as more than two standard deviations from the mean:

\`=ABS(A1 - AVERAGE($A$1:$A$100)) > 2 * STDEV($A$1:$A$100)\`

Useful for spotting anomalies in numerical datasets.

### 8. Highlight a Cell Based on Another Sheet

The same pattern works with cross-sheet references:

\`=A1 = Reference!$A$1\`

Conditional formatting can read from any sheet in the workbook.

### 9. Highlight the Active Row or Column

Problem. Make it easier to read large tables by lighting up the row or column the cursor is in.

In Excel, you can pair conditional formatting with a tiny VBA helper or a CELL("col") trick. The simplest version:

\`=CELL("row") = ROW()\`

Combined with a worksheet calculate event to refresh, this produces a moving highlight on the active row.

### 10. Highlight Values That Are Missing

Empty cells are usually invisible. Make them visible.

\`=ISBLANK(A1)\`

For a row where any required field is missing:

\`=COUNTBLANK($A1:$E1) > 0\`

### 11. Highlight Values That Should Be Numbers but Are Text

A common data quality issue. The fix:

\`=AND(A1 <> "", NOT(ISNUMBER(A1)))\`

Catches text that has snuck into a numeric column.

### 12. Highlight Cells Where a Formula Has Been Overwritten with a Hard-Coded Value

In an audit-critical model, you want to see when someone has typed over a formula.

\`=NOT(ISFORMULA(A1))\`

Apply to the range that should always contain formulas. Hard-coded values stand out immediately.

</section>

<section id="managing-rules">

## Managing Rules in Real Workbooks

A workbook with five rules is easy. A workbook with fifty rules is a maintenance problem unless you organise.

Use the Manage Rules dialog as your control centre. In Excel, Home then Conditional Formatting then Manage Rules. The dialog shows every rule, the range it applies to, and the order in which they are evaluated.

Order matters. Rules are evaluated top to bottom. The Stop If True option lets you short-circuit lower rules when a higher rule matches. This is essential when rules overlap.

Apply rules at the broadest sensible scope. A single rule on A:A is easier to maintain than separate rules on A1:A100, A101:A200, and so on. Spreadsheets handle the column-wide scope efficiently in most cases.

Name your rules informally by purpose. Excel does not have a native rule-naming feature, but a workbook with a comment cell or a hidden sheet that lists what each rule does saves enormous time when you return six months later.

Avoid duplicate rules from copy-paste. Copying cells with conditional formatting tends to create new rule entries rather than extending existing ones. Periodically clean up the rules dialog to consolidate.

</section>

<section id="performance">

## Performance: What Slows a Workbook and Why

Heavy conditional formatting is one of the leading causes of slow Excel workbooks. The cost is not in the formatting itself but in the formula evaluation that drives it. A workbook with thousands of formula-based rules across many sheets has to evaluate every rule on every recalculation.

Three rules of thumb avoid the worst pain.

Prefer scope-wide rules over row-by-row rules. One rule applied to A1:A10000 is faster than ten thousand rules applied to individual cells, even though the rule fires the same number of times.

Avoid volatile functions in conditional formatting formulas. NOW, TODAY, RAND, INDIRECT, and OFFSET are volatile, meaning they recalculate on every change anywhere in the workbook. A volatile function inside a conditional formatting rule means every cell touched by that rule re-evaluates whenever anything changes. The performance impact compounds quickly.

Use ISFORMULA, ISBLANK, ISNUMBER, and other non-volatile checks instead of building them out of arithmetic. They are faster.

For workbooks that have grown slow, the Conditional Formatting Manager is also where to look first. Often the problem is duplicate rules accumulated over years. A few minutes consolidating them can produce a measurable speedup.

</section>

<section id="google-sheets-differences">

## Google Sheets: What Is the Same, What Is Different

The conceptual model is identical. Categories of rules, formula-based rules, the same reference behaviour. The differences are at the edges.

Google Sheets has fewer built-in rule types. The icon sets and data bars common in Excel are not available natively. Substitute with formula-based rules and creative formatting.

Google Sheets evaluates formula rules slightly differently in shared cells. The performance is generally better for very large datasets because of the cloud architecture, but absolute reference behaviour is identical.

Custom formulas in Google Sheets are written without the leading equals sign in some dialogs. The application then prefixes it. Watch the dialog hint to avoid the trap of double equals.

Google Sheets supports more flexible colour scales out of the box, with explicit minimum, midpoint, and maximum colours.

Both applications support copying and pasting conditional formatting via paste special. Useful when extending a rule structure to new sheets.

</section>

<section id="data-quality">

## Conditional Formatting as a Data Quality Tool

The most powerful use of conditional formatting is not visual at all. It is data quality.

A well-designed workbook has rules that make errors visible automatically. Required fields that are blank turn red. Formulas that have been overwritten turn yellow. Values outside expected ranges glow. Dates in the past in a forward-looking schedule are flagged.

This is a different mindset from formatting for prettiness. The rules are designed to surface problems. When the workbook is clean, no formatting is visible. When something is wrong, the wrong thing is the only thing visible.

A reasonable starter checklist for any workbook that matters.

A rule that highlights cells in numeric columns that are not numbers.

A rule that highlights formula cells that have been overwritten with hard-coded values, where this is structurally wrong.

A rule that highlights blank cells in required fields.

A rule that highlights values outside the expected range, defined by a sensible formula.

A rule that highlights duplicate IDs or keys where uniqueness is required.

These five rules, applied consistently, prevent more errors than any amount of post-hoc auditing. They run continuously in the background and surface problems as they appear, not after the fact.

</section>

<section id="common-mistakes">

## Common Mistakes and How to Avoid Them

A short catalogue of the failures I see most often.

Forgetting reference anchoring. The most common single error. The rule walks differently from intended because the formula was written without proper attention to absolute and relative references.

Overlapping rules without ordering them. Two rules that could both fire on the same cell, with no Stop If True, produce unpredictable behaviour. Order rules deliberately.

Using volatile functions and complaining about performance. The cost of NOW or INDIRECT inside a heavily applied rule is invisible until you scale the workbook, then it dominates. Use non-volatile alternatives.

Highlighting cells with similar colours. The point of conditional formatting is to draw the eye. Two pastel shades that the eye cannot distinguish defeats the purpose. Use bold colours sparingly and consistently.

Layering too many rules. A workbook with seven kinds of formatting on every cell becomes harder to read, not easier. Aim for a small set of high-signal rules.

Not extending rules to new rows. When a workbook grows, the conditional formatting often does not. Apply rules to entire columns where appropriate, or remember to extend the range when adding rows.

</section>

<section id="next-steps">

## Where to Go from Here

The fastest way to internalise conditional formatting is to apply it to a workbook you use daily. Pick one. Add three rules. The first should highlight blank cells in a required field. The second should highlight values outside a sensible range. The third should highlight a row based on a status column.

Use those rules for a week. Notice when they fire and what they catch. Add three more.

Within a month, the practice becomes automatic. Within a quarter, your workbooks are visibly cleaner and your error rate drops in ways you can feel. The investment is small and the payoff compounds.

For pairing this with the formula techniques that often power conditional formatting rules, see our [ultimate Excel formulas reference guide](/guides/ultimate-excel-formulas-reference). For the underlying QUERY function that powers many advanced Sheets dashboards, see the [complete guide to the Google Sheets QUERY function](/guides/google-sheets-query-function-guide).

Conditional formatting is a small feature with a long reach. Treated as a serious tool rather than a cosmetic one, it changes how you build and how you read spreadsheets. The change is worth the investment.`
  }
];

// Helper function to check if content is published
// In development mode, show all articles (including scheduled) for preview
function isPublished(publishedAt: string): boolean {
  if (process.env.NODE_ENV === 'development') {
    return true; // Show all articles in dev mode for preview
  }
  const publishDate = new Date(publishedAt);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return publishDate <= today;
}

// Get only published guides
export function getPublishedGuides(): Guide[] {
  return guides.filter(guide => isPublished(guide.publishedAt));
}

// Get guide by slug (only if published)
export function getGuideBySlug(slug: string): Guide | undefined {
  const guide = guides.find(g => g.slug === slug);
  if (guide && isPublished(guide.publishedAt)) {
    return guide;
  }
  return undefined;
}

// Get all published guide slugs
export function getAllGuideSlugs(): string[] {
  return getPublishedGuides().map(guide => guide.slug);
}
