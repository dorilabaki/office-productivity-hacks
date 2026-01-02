export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  category: 'excel' | 'sheets' | 'general';
  relatedTerms: string[];
  examples: string[];
  content: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "vlookup",
    term: "VLOOKUP",
    definition: "A lookup function that searches for a value in the first column of a range and returns a value from a specified column in the same row.",
    category: "excel",
    relatedTerms: ["XLOOKUP", "HLOOKUP", "INDEX", "MATCH"],
    examples: [
      "=VLOOKUP(A2, Products!A:C, 3, FALSE)",
      "=VLOOKUP(\"SKU-001\", $B$2:$D$100, 2, FALSE)"
    ],
    content: `# VLOOKUP

**VLOOKUP** (Vertical Lookup) is one of Excel's most widely used functions. It searches for a value in the leftmost column of a table and returns a value from a specified column in the same row.

## Syntax

\`\`\`
=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
\`\`\`

### Parameters

| Parameter | Description |
|-----------|-------------|
| lookup_value | The value to search for |
| table_array | The table range containing the data |
| col_index_num | The column number to return (1 = first column) |
| range_lookup | FALSE for exact match, TRUE for approximate |

## How It Works

1. VLOOKUP searches the **first column** of table_array for lookup_value
2. When found, it moves right to the column specified by col_index_num
3. It returns that value

## Examples

### Basic Product Lookup

\`\`\`
=VLOOKUP("Widget A", A:C, 3, FALSE)
\`\`\`

This searches for "Widget A" in column A and returns the value from column C (the 3rd column).

### Employee Salary Lookup

\`\`\`
=VLOOKUP(E2, $A$2:$D$100, 4, FALSE)
\`\`\`

Looks up employee ID in E2 against the employee table and returns their salary (column 4).

## Common Mistakes

1. **Lookup column not first**: VLOOKUP can only search the leftmost column
2. **Forgetting FALSE**: Without FALSE, VLOOKUP may return incorrect approximate matches
3. **Column index wrong**: Count from the first column of table_array, not the sheet
4. **Not locking ranges**: Use $ to make references absolute when copying formulas

## VLOOKUP vs XLOOKUP

XLOOKUP (Excel 2021+/365) is the modern replacement:

| Feature | VLOOKUP | XLOOKUP |
|---------|---------|---------|
| Search direction | Right only | Any direction |
| Default match | Approximate | Exact |
| Error handling | Needs IFERROR | Built-in |
| Return multiple columns | No | Yes |

## When to Use VLOOKUP

- Sharing files with users on older Excel versions
- Simple, right-direction lookups
- Legacy workbooks that already use VLOOKUP

## Best Practices

1. Always use FALSE for exact matches
2. Lock your table range with absolute references ($)
3. Consider switching to XLOOKUP for new workbooks
4. Use named ranges for cleaner formulas`
  },
  {
    slug: "pivot-table",
    term: "Pivot Table",
    definition: "An interactive tool that summarizes large datasets by reorganizing and aggregating data based on selected fields, allowing users to analyze information without writing formulas.",
    category: "excel",
    relatedTerms: ["Pivot Chart", "Slicer", "Data Aggregation", "Cross-tabulation"],
    examples: [
      "Summarizing total sales by region and product category",
      "Counting orders by month and customer segment",
      "Calculating average order value by sales representative"
    ],
    content: `# Pivot Table

A **Pivot Table** is a powerful data summarization tool in Excel and Google Sheets that allows you to reorganize and aggregate data without writing formulas. It's one of the most important features for data analysis.

## What Pivot Tables Do

Pivot tables take large, detailed datasets and summarize them by:
- Grouping data by categories (rows and columns)
- Calculating totals, averages, counts, and other aggregations
- Allowing interactive filtering and drilling down
- Reorganizing data views on the fly

## Anatomy of a Pivot Table

### Four Field Areas

| Area | Purpose | Example |
|------|---------|---------|
| **Rows** | Categories down the left side | Regions, Products, Dates |
| **Columns** | Categories across the top | Months, Departments |
| **Values** | Numbers being calculated | Sum of Sales, Count of Orders |
| **Filters** | Filter the entire report | Year, Status |

## Creating a Pivot Table

### Excel
1. Select your data (including headers)
2. Insert → PivotTable
3. Choose where to place it
4. Drag fields to the areas

### Google Sheets
1. Select your data
2. Insert → Pivot table
3. Choose new sheet or existing
4. Use the Pivot table editor panel

## Common Operations

### Change Calculation Type
Right-click a value → Value Field Settings → Choose Sum, Count, Average, Max, Min, etc.

### Group Dates
Right-click a date field → Group → Choose Months, Quarters, Years

### Sort and Filter
Use the dropdown arrows on row/column labels

### Show Values As
Display as % of total, difference from, running total, etc.

## Example Use Cases

1. **Sales Analysis**: Total sales by region, broken down by product category
2. **HR Reporting**: Employee count by department and job level
3. **Financial Summary**: Monthly expenses by category
4. **Customer Analysis**: Average order value by customer segment

## Pivot Table Tips

1. **Source data requirements**: Headers in first row, no blank rows/columns
2. **Refresh**: Right-click → Refresh when source data changes
3. **Slicers**: Add visual filters for easier interaction
4. **Pivot Charts**: Visualize pivot table data automatically
5. **Calculated fields**: Create custom calculations within the pivot

## Limitations

- Cannot directly edit values (they're calculated)
- Source data must be clean and structured
- Large datasets may be slow to refresh
- Requires re-creation if source structure changes significantly

## Best Practices

1. Use Tables (Ctrl+T) as your source—they auto-expand
2. Name your pivot tables descriptively
3. Create on a new sheet for cleaner layouts
4. Use slicers instead of filters for dashboards
5. Document your pivot table settings`
  },
  {
    slug: "conditional-formatting",
    term: "Conditional Formatting",
    definition: "A feature that automatically applies formatting (colors, icons, data bars) to cells based on their values or specified conditions, making patterns and outliers visually apparent.",
    category: "excel",
    relatedTerms: ["Data Bars", "Color Scales", "Icon Sets", "Cell Formatting"],
    examples: [
      "Highlighting cells with values above average in green",
      "Adding red background to overdue dates",
      "Showing progress bars for percentage completion"
    ],
    content: `# Conditional Formatting

**Conditional Formatting** automatically changes cell appearance based on the cell's value or a formula you specify. It's essential for making data visually meaningful at a glance.

## Why Use Conditional Formatting

- Instantly spot trends, patterns, and outliers
- Highlight important data without manual formatting
- Create visual dashboards
- Make data self-explanatory

## Types of Conditional Formatting

### 1. Highlight Cells Rules

Format cells based on their value:
- Greater than / Less than
- Between values
- Equal to
- Text that contains
- Dates (today, last week, etc.)
- Duplicate values

### 2. Top/Bottom Rules

Highlight based on ranking:
- Top 10 items
- Top 10%
- Bottom 10 items
- Above/Below average

### 3. Data Bars

Show values as horizontal bars within cells, like inline bar charts.

### 4. Color Scales

Apply gradient colors based on value—great for heat maps.
- 2-color scale (low to high)
- 3-color scale (low, mid, high)

### 5. Icon Sets

Display icons based on value thresholds:
- Traffic lights (red, yellow, green)
- Arrows (up, sideways, down)
- Stars, checkmarks, flags

## Creating Conditional Formatting

### Excel
1. Select your range
2. Home → Conditional Formatting
3. Choose rule type
4. Set conditions and formatting
5. Click OK

### Google Sheets
1. Select your range
2. Format → Conditional formatting
3. Set up rule in the panel
4. Click Done

## Using Custom Formulas

The most powerful option—any formula returning TRUE applies the format.

### Examples

**Highlight entire row if column A is "Urgent":**
\`\`\`
=$A1="Urgent"
\`\`\`

**Highlight weekends:**
\`\`\`
=OR(WEEKDAY(A1)=1, WEEKDAY(A1)=7)
\`\`\`

**Alternating row colors:**
\`\`\`
=MOD(ROW(),2)=0
\`\`\`

**Above average values:**
\`\`\`
=A1>AVERAGE($A:$A)
\`\`\`

**Highlight duplicates:**
\`\`\`
=COUNTIF($A:$A, A1)>1
\`\`\`

## Managing Rules

### Priority Order
Rules are applied in order. Earlier rules take precedence.

### Stop If True
In Excel, check "Stop If True" to prevent later rules from applying.

### Clear Rules
Home → Conditional Formatting → Clear Rules

## Best Practices

1. **Less is more**: Don't over-format—it becomes noise
2. **Be consistent**: Use the same colors for the same meanings
3. **Test with data**: Verify rules work with edge cases
4. **Document**: Note what colors mean if not obvious
5. **Performance**: Too many rules on large ranges can slow the file

## Common Use Cases

1. **Sales Dashboards**: Color-code performance metrics
2. **Project Tracking**: Highlight overdue tasks in red
3. **Data Validation**: Flag invalid entries
4. **Heat Maps**: Visualize data density or intensity
5. **Progress Tracking**: Show completion with data bars`
  },
  {
    slug: "macro",
    term: "Macro",
    definition: "A recorded or written sequence of commands and actions that can be saved and replayed to automate repetitive tasks in spreadsheet applications.",
    category: "excel",
    relatedTerms: ["VBA", "Apps Script", "Automation", "Recording"],
    examples: [
      "A macro that formats a weekly report with specific colors and fonts",
      "An automated data import that cleans and organizes raw data",
      "A button that generates and emails a PDF report"
    ],
    content: `# Macro

A **Macro** is an automation tool that records or contains a sequence of commands to perform repetitive tasks automatically. In Excel, macros use VBA (Visual Basic for Applications). In Google Sheets, they use Apps Script (JavaScript).

## What Macros Can Do

- Automate repetitive formatting
- Process and transform data
- Generate reports
- Interact with other applications
- Create custom functions
- Build user interfaces

## Recording vs Writing Macros

### Recording (Easier)
1. Turn on macro recorder
2. Perform your actions
3. Stop recording
4. Play back anytime

**Pros**: No coding required
**Cons**: Limited flexibility, can be inefficient

### Writing (More Powerful)
Write code directly in VBA or Apps Script

**Pros**: Complete control, efficient, conditional logic
**Cons**: Requires programming knowledge

## Recording a Macro in Excel

1. View → Macros → Record Macro
2. Name your macro
3. Choose shortcut key (optional)
4. Perform your actions
5. View → Macros → Stop Recording

## Recording a Macro in Google Sheets

1. Extensions → Macros → Record macro
2. Choose relative or absolute references
3. Perform your actions
4. Click Save
5. Name your macro

## Example: VBA Macro

\`\`\`vba
Sub FormatReport()
    ' Format headers
    Range("A1:E1").Font.Bold = True
    Range("A1:E1").Interior.Color = RGB(0, 112, 192)
    Range("A1:E1").Font.Color = RGB(255, 255, 255)

    ' Auto-fit columns
    Columns("A:E").AutoFit

    ' Add borders
    Range("A1").CurrentRegion.Borders.LineStyle = xlContinuous
End Sub
\`\`\`

## Example: Apps Script

\`\`\`javascript
function formatReport() {
  const sheet = SpreadsheetApp.getActiveSheet();

  // Format headers
  const headers = sheet.getRange("A1:E1");
  headers.setFontWeight("bold");
  headers.setBackground("#0070C0");
  headers.setFontColor("#FFFFFF");

  // Auto-resize columns
  sheet.autoResizeColumns(1, 5);
}
\`\`\`

## Running Macros

### Excel
- View → Macros → View Macros → Run
- Keyboard shortcut (if assigned)
- Button (from Developer tab)
- Automatically via events

### Google Sheets
- Extensions → Macros → [Your macro name]
- Keyboard shortcut
- Custom menu (via script)
- Triggers (time-based or event-based)

## Security Considerations

### Excel
- Macros can contain malicious code
- Files with macros use .xlsm extension
- Enable only from trusted sources
- Use macro security settings

### Google Sheets
- Scripts require authorization
- Review permissions carefully
- Scripts run in Google's cloud

## Best Practices

1. **Comment your code**: Explain what each section does
2. **Use descriptive names**: \`ProcessMonthlySales\` not \`Macro1\`
3. **Handle errors**: Add error handling for robustness
4. **Test thoroughly**: Check edge cases and invalid inputs
5. **Back up**: Save before running new macros
6. **Modularize**: Break complex macros into smaller procedures

## When to Use Macros

**Good candidates for automation:**
- Repeated more than 3 times
- Error-prone manual processes
- Time-consuming formatting
- Regular report generation

**Not ideal for:**
- One-time tasks
- Simple operations faster done manually
- Tasks requiring human judgment`
  },
  {
    slug: "array-formula",
    term: "Array Formula",
    definition: "A formula that performs multiple calculations on one or more sets of values and returns either a single result or multiple results, enabling complex operations in a single cell.",
    category: "excel",
    relatedTerms: ["Dynamic Arrays", "ARRAYFORMULA", "Spill Range", "CSE Formula"],
    examples: [
      "=SUM(A1:A10*B1:B10) for weighted totals",
      "=FILTER(A:C, B:B>1000) for filtered results",
      "=UNIQUE(A2:A100) for unique values"
    ],
    content: `# Array Formula

An **Array Formula** is a formula that can process multiple values simultaneously and return one or multiple results. They're essential for complex calculations that would otherwise require helper columns.

## Understanding Arrays

An array is a collection of values treated as a single unit. In spreadsheets:
- **1D Array (row)**: {1, 2, 3, 4, 5}
- **1D Array (column)**: {1; 2; 3; 4; 5}
- **2D Array**: {1, 2, 3; 4, 5, 6}

## Types of Array Formulas

### Single-Result Array Formulas
Return one value from multiple calculations:
\`\`\`
=SUM(A1:A10*B1:B10)
\`\`\`
Multiplies each A value by corresponding B value, then sums all products.

### Multi-Result Array Formulas (Dynamic Arrays)
Return multiple values that "spill" into adjacent cells:
\`\`\`
=UNIQUE(A2:A100)
=FILTER(A:C, B:B="North")
=SORT(A2:C100, 2, 1)
\`\`\`

## Excel: Legacy vs Dynamic Arrays

### Legacy CSE Arrays (Excel 2019 and earlier)
- Required Ctrl+Shift+Enter to confirm
- Displayed with curly braces { }
- Couldn't spill to multiple cells naturally

### Dynamic Arrays (Excel 365/2021)
- Automatic spilling
- No special entry required
- New functions: FILTER, SORT, UNIQUE, SEQUENCE, RANDARRAY

## Google Sheets: ARRAYFORMULA

In Sheets, wrap formulas with ARRAYFORMULA to process ranges:

\`\`\`
=ARRAYFORMULA(A2:A*B2:B)
=ARRAYFORMULA(IF(A2:A="", "", A2:A*B2:B))
\`\`\`

## Key Array Functions

### Excel Dynamic Arrays
| Function | Purpose |
|----------|---------|
| FILTER | Return rows matching criteria |
| SORT | Sort a range |
| SORTBY | Sort by another range |
| UNIQUE | Remove duplicates |
| SEQUENCE | Generate number sequences |
| RANDARRAY | Generate random arrays |
| XLOOKUP | Modern lookup (array-aware) |

### Google Sheets
| Function | Purpose |
|----------|---------|
| ARRAYFORMULA | Apply formula to range |
| FILTER | Return matching rows |
| SORT | Sort results |
| UNIQUE | Remove duplicates |
| QUERY | SQL-like data operations |

## Examples

### Sum of Products
\`\`\`
=SUM(Quantity*Price)
// Or explicitly
=SUMPRODUCT(Quantity, Price)
\`\`\`

### Count with Multiple Criteria
\`\`\`
=SUM((A2:A100="North")*(B2:B100>1000))
\`\`\`

### Filter and Sort
\`\`\`
=SORT(FILTER(A2:D100, B2:B100="Active"), 3, -1)
\`\`\`

### Create Multiplication Table
\`\`\`
=SEQUENCE(10)*SEQUENCE(1,10)
\`\`\`

## The Spill Range Operator (#)

Reference all values in a spill range:
\`\`\`
=UNIQUE(A2:A100)     // In cell C2, spills down
=SUM(C2#)            // Sum all spilled values
\`\`\`

## Common Errors

### #SPILL!
Spill range is blocked by existing data. Clear the cells.

### #CALC!
Calculation error in the array formula. Check your logic.

### Wrong Size Result
Formula returns different size than expected. Verify your ranges.

## Performance Tips

1. **Limit range sizes**: Use A2:A1000 instead of A:A when possible
2. **Avoid volatile functions**: NOW(), TODAY() in arrays recalculate constantly
3. **One array formula**: Better than 1000 individual formulas
4. **Use dynamic arrays**: More efficient than legacy CSE

## Best Practices

1. **Understand spilling**: Know where results will appear
2. **Leave room**: Don't put data where arrays might spill
3. **Name your ranges**: Makes array formulas more readable
4. **Test with small data**: Verify logic before applying to large datasets
5. **Document complex formulas**: Comments or a documentation sheet`
  }
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(term => term.slug === slug);
}

export function getAllGlossaryTermSlugs(): string[] {
  return glossaryTerms.map(term => term.slug);
}
