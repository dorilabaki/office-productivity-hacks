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
  }
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map(guide => guide.slug);
}
