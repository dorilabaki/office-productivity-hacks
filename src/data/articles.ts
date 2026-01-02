export interface Article {
  slug: string;
  title: string;
  description: string;
  category: 'excel' | 'sheets' | 'word' | 'general';
  readTime: string;
  publishedAt: string;
  content: string;
  howToSteps?: {
    name: string;
    text: string;
    image?: string;
  }[];
}

export const articles: Article[] = [
  {
    slug: "20-excel-shortcuts-that-save-hours",
    title: "20 Excel Shortcuts That Save Hours Every Week",
    description: "Master these essential Excel keyboard shortcuts to dramatically boost your productivity. From navigation to formatting, these shortcuts will transform how you work with spreadsheets.",
    category: "excel",
    readTime: "8 min read",
    publishedAt: "2024-12-15",
    howToSteps: [
      { name: "Learn Navigation Shortcuts", text: "Start with Ctrl+Home to jump to cell A1 and Ctrl+End to go to the last used cell. These are foundational for quick navigation." },
      { name: "Master Selection Shortcuts", text: "Use Ctrl+Shift+End to select from current cell to the last used cell. Shift+Space selects entire row, Ctrl+Space selects entire column." },
      { name: "Practice Formatting Shortcuts", text: "Ctrl+B for bold, Ctrl+I for italic, and Ctrl+U for underline. Ctrl+1 opens the Format Cells dialog for advanced formatting." },
      { name: "Use Data Entry Shortcuts", text: "Tab moves right, Enter moves down. Ctrl+Enter fills all selected cells with the same value. Alt+Enter creates a line break within a cell." },
      { name: "Apply Daily Practice", text: "Pick 2-3 shortcuts to focus on each week. Consistent practice builds muscle memory faster than trying to learn everything at once." }
    ],
    content: `# 20 Excel Shortcuts That Save Hours Every Week

If you're still reaching for the mouse to format cells or navigate your spreadsheet, you're working harder than you need to. Keyboard shortcuts are the secret weapon of Excel power users, and mastering just a handful can save you hours every week.

## Navigation Shortcuts

The first step to Excel mastery is moving around your spreadsheet without touching the mouse.

### Essential Navigation Commands

- **Ctrl + Home**: Jump to cell A1 instantly
- **Ctrl + End**: Go to the last used cell in the worksheet
- **Ctrl + Arrow Keys**: Jump to the edge of data regions
- **Ctrl + Page Up/Down**: Switch between worksheets

These four shortcuts alone can cut your navigation time in half. Instead of scrolling through thousands of rows, you're teleporting to exactly where you need to be.

## Selection Shortcuts

Selecting data is something you do hundreds of times per day. Here's how to do it faster.

### Power Selection Techniques

- **Ctrl + Shift + End**: Select from current cell to last used cell
- **Ctrl + Shift + Home**: Select from current cell to beginning
- **Shift + Space**: Select entire row
- **Ctrl + Space**: Select entire column
- **Ctrl + A**: Select entire worksheet (or current data region)

The game-changer here is **Ctrl + Shift + Arrow Keys**. This selects all data in a direction until it hits an empty cell. Perfect for quickly selecting columns of data.

## Formatting Shortcuts

Stop clicking through ribbons for basic formatting. These shortcuts are essential:

### Quick Formatting Commands

- **Ctrl + B**: Bold
- **Ctrl + I**: Italic
- **Ctrl + U**: Underline
- **Ctrl + 1**: Open Format Cells dialog
- **Alt + H + O + I**: Auto-fit column width

The Format Cells dialog (Ctrl + 1) is your gateway to all formatting options. Learn this one shortcut and you'll never need to hunt through menus again.

## Data Entry Shortcuts

These shortcuts transform how you enter and edit data:

### Efficient Data Entry

- **Tab**: Move right (and confirm entry)
- **Enter**: Move down (and confirm entry)
- **Ctrl + Enter**: Fill all selected cells with the same value
- **Alt + Enter**: New line within a cell
- **F2**: Edit current cell
- **Esc**: Cancel entry

Pro tip: Select a range of cells first, then type and press **Ctrl + Enter**. Every selected cell gets the same value instantly.

## Formula Shortcuts

Working with formulas? These shortcuts are indispensable:

### Formula Power Moves

- **F4**: Toggle absolute/relative references ($)
- **Ctrl + \`**: Show all formulas in cells
- **Ctrl + Shift + Enter**: Enter array formula (legacy)
- **Alt + =**: AutoSum selected cells
- **Tab (in formula)**: Accept autocomplete suggestion

The F4 key is particularly powerful. While editing a reference, pressing F4 cycles through:
\`A1\` → \`$A$1\` → \`A$1\` → \`$A1\` → \`A1\`

## Workbook Shortcuts

Managing your workbook is faster with these commands:

### Workbook Management

- **Ctrl + N**: New workbook
- **Ctrl + O**: Open workbook
- **Ctrl + S**: Save
- **Ctrl + W**: Close current workbook
- **Ctrl + Page Up/Down**: Navigate between sheets
- **Shift + F11**: Insert new worksheet

## Building the Shortcut Habit

Don't try to memorize all 20 shortcuts at once. Here's a better approach:

1. **Week 1**: Focus on navigation (Ctrl + arrows, Ctrl + Home/End)
2. **Week 2**: Add selection shortcuts (Ctrl + Shift + arrows)
3. **Week 3**: Learn formatting (Ctrl + B/I/U/1)
4. **Week 4**: Master data entry (Ctrl + Enter, F2)

Print this list and keep it next to your monitor. Every time you reach for the mouse, stop and use the shortcut instead. Within a month, these will become second nature.

## The Productivity Payoff

Let's do the math: If shortcuts save you just 30 seconds per task, and you perform 100 tasks per day, that's nearly an hour saved daily. Over a year, that's more than 200 hours—or five full work weeks—reclaimed.

Start with three shortcuts today. Your future self will thank you.`
  },
  {
    slug: "vlookup-vs-xlookup-comparison",
    title: "VLOOKUP vs XLOOKUP: Which Should You Use?",
    description: "A comprehensive comparison of Excel's two most popular lookup functions. Learn when to use each and why XLOOKUP is often the better choice.",
    category: "excel",
    readTime: "10 min read",
    publishedAt: "2024-12-10",
    content: `# VLOOKUP vs XLOOKUP: Which Should You Use?

For years, VLOOKUP was the undisputed champion of Excel lookup functions. Then Microsoft introduced XLOOKUP in 2019, and everything changed. But which one should you actually use? Let's break it down.

## Understanding VLOOKUP

VLOOKUP has been an Excel staple for decades. Its syntax is:

\`\`\`
=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
\`\`\`

### VLOOKUP Example

Suppose you have a product table and want to find a price by product ID:

\`\`\`
=VLOOKUP(A2, Products!A:C, 3, FALSE)
\`\`\`

This looks up the value in A2, searches in the Products table (columns A through C), and returns the value from the 3rd column.

### VLOOKUP Limitations

1. **Only looks right**: The lookup column must be the leftmost column
2. **Column index is fragile**: Insert a column and your formula breaks
3. **Approximate match by default**: Forgetting FALSE can cause errors
4. **No backward lookup**: Can't search right and return values from the left

## Enter XLOOKUP

XLOOKUP was designed to address every VLOOKUP shortcoming. Its syntax is:

\`\`\`
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])
\`\`\`

### XLOOKUP Example

The same lookup becomes:

\`\`\`
=XLOOKUP(A2, Products!A:A, Products!C:C, "Not Found")
\`\`\`

### XLOOKUP Advantages

**1. Lookup in Any Direction**

XLOOKUP can look left, right, up, or down. The lookup array and return array are independent.

**2. Exact Match by Default**

No more forgetting the FALSE argument. XLOOKUP defaults to exact match.

**3. Built-in Error Handling**

The optional \`if_not_found\` parameter lets you specify what to return when no match is found:

\`\`\`
=XLOOKUP(A2, Products!A:A, Products!C:C, "Product not found")
\`\`\`

**4. Return Multiple Columns**

XLOOKUP can return entire rows of data:

\`\`\`
=XLOOKUP(A2, Products!A:A, Products!B:D)
\`\`\`

This returns columns B, C, and D in one formula.

**5. Search Modes**

XLOOKUP offers four search modes:
- 1: First to last (default)
- -1: Last to first
- 2: Binary search ascending
- -2: Binary search descending

## Head-to-Head Comparison

| Feature | VLOOKUP | XLOOKUP |
|---------|---------|---------|
| Direction | Right only | Any direction |
| Default match | Approximate | Exact |
| Error handling | Requires IFERROR | Built-in |
| Multiple columns | No | Yes |
| Performance | Good | Excellent |
| Availability | All versions | Excel 2021+ / 365 |

## When to Use VLOOKUP

Despite its limitations, VLOOKUP still has its place:

- **Compatibility**: Sharing files with users on older Excel versions
- **Simple lookups**: Quick, straightforward lookups where direction doesn't matter
- **Legacy formulas**: Maintaining existing workbooks

## When to Use XLOOKUP

Use XLOOKUP whenever possible:

- **New workbooks**: Start fresh with XLOOKUP
- **Complex lookups**: Any lookup requiring flexibility
- **Backward lookups**: When the return column is left of the lookup column
- **Error handling**: When you need clean error messages

## Migration Examples

### Basic Lookup

**VLOOKUP:**
\`\`\`
=VLOOKUP(A2, B:D, 3, FALSE)
\`\`\`

**XLOOKUP:**
\`\`\`
=XLOOKUP(A2, B:B, D:D)
\`\`\`

### With Error Handling

**VLOOKUP:**
\`\`\`
=IFERROR(VLOOKUP(A2, B:D, 3, FALSE), "Not found")
\`\`\`

**XLOOKUP:**
\`\`\`
=XLOOKUP(A2, B:B, D:D, "Not found")
\`\`\`

### Backward Lookup (XLOOKUP only)

\`\`\`
=XLOOKUP(A2, D:D, B:B)
\`\`\`

## The Verdict

If you're using Excel 365 or Excel 2021, make XLOOKUP your default choice. It's more intuitive, more powerful, and produces cleaner formulas.

Keep VLOOKUP in your toolkit for compatibility scenarios, but embrace XLOOKUP for everything new. Your formulas will be shorter, more readable, and more maintainable.`
  },
  {
    slug: "how-to-create-pivot-table-in-5-minutes",
    title: "How to Create a Pivot Table in 5 Minutes",
    description: "Learn how to transform raw data into powerful insights with Excel pivot tables. This step-by-step guide will have you analyzing data like a pro in minutes.",
    category: "excel",
    readTime: "6 min read",
    publishedAt: "2024-12-05",
    howToSteps: [
      { name: "Prepare Your Data", text: "Ensure your data has clear headers in the first row with no blank columns or rows. Each column should contain one type of data." },
      { name: "Select Your Data Range", text: "Click any cell within your data, or select the entire range you want to analyze. Excel will automatically detect the data boundaries." },
      { name: "Insert the Pivot Table", text: "Go to Insert > PivotTable, or use the keyboard shortcut Alt+N+V. Choose where to place the pivot table (new worksheet recommended)." },
      { name: "Configure Field Placement", text: "Drag fields to the appropriate areas: Rows for categories, Columns for cross-tabulation, Values for calculations, Filters for data filtering." },
      { name: "Customize and Analyze", text: "Right-click values to change calculations (sum, count, average). Use the filter dropdown to focus on specific data subsets." }
    ],
    content: `# How to Create a Pivot Table in 5 Minutes

Pivot tables are one of Excel's most powerful features, yet many users avoid them because they seem intimidating. Here's the truth: you can create a useful pivot table in under 5 minutes, and it will transform how you analyze data.

## What is a Pivot Table?

A pivot table is a tool that lets you summarize large datasets without writing a single formula. It groups, sorts, counts, and calculates automatically—all through a simple drag-and-drop interface.

## Step 1: Prepare Your Data (1 minute)

Before creating a pivot table, your data needs to be "pivot-ready":

### Data Requirements

- **Headers**: First row must contain column headers
- **No blanks**: Remove empty rows and columns
- **Consistent data**: Each column should contain one type of data
- **No merged cells**: Unmerge any merged cells
- **No totals**: Remove subtotals or grand totals

### Example Dataset

| Date | Region | Product | Sales | Units |
|------|--------|---------|-------|-------|
| 2024-01-15 | North | Widget A | 1500 | 30 |
| 2024-01-16 | South | Widget B | 2300 | 46 |
| 2024-01-17 | North | Widget A | 1800 | 36 |

## Step 2: Insert the Pivot Table (30 seconds)

1. Click any cell within your data
2. Go to **Insert > PivotTable** (or press Alt+N+V)
3. Excel will auto-detect your data range
4. Choose "New Worksheet" (recommended)
5. Click OK

You now have an empty pivot table with a Field List panel on the right.

## Step 3: Add Fields (2 minutes)

The Field List has four areas:

- **Filters**: Fields that filter the entire report
- **Columns**: Fields that create column headers
- **Rows**: Fields that create row labels
- **Values**: Fields that get calculated (sum, count, average)

### Creating Your First Analysis

Let's answer: "What are total sales by region?"

1. Drag **Region** to the **Rows** area
2. Drag **Sales** to the **Values** area

That's it! You now see total sales broken down by region.

### Adding More Dimensions

Want to see sales by region AND product?

1. Drag **Product** to the **Rows** area (below Region)

Now you have a hierarchical view: Region → Product → Sales.

### Cross-Tabulation

To see products across the top:

1. Move **Product** from Rows to **Columns**

Now you have a matrix with regions as rows and products as columns.

## Step 4: Customize Your Pivot Table (1 minute)

### Change Calculation Type

By default, numbers are summed. To change:

1. Right-click any value in the pivot table
2. Select **Value Field Settings**
3. Choose: Sum, Count, Average, Max, Min, etc.

### Format Numbers

1. Right-click a value
2. Select **Number Format**
3. Choose your preferred format (currency, percentage, etc.)

### Sort Data

1. Click the dropdown arrow next to a row label
2. Choose Sort A to Z, Z to A, or More Sort Options

### Filter Data

1. Drag a field to the **Filters** area
2. Use the dropdown at the top of the pivot table to filter

## Step 5: Refresh and Update (30 seconds)

When your source data changes:

1. Right-click anywhere in the pivot table
2. Select **Refresh**

Or use the keyboard shortcut: **Alt + F5**

## Common Pivot Table Tasks

### Show Percentages

1. Right-click a value
2. **Show Values As** > **% of Grand Total** (or % of Column/Row Total)

### Group Dates

1. Right-click a date field in the pivot table
2. Select **Group**
3. Choose: Days, Months, Quarters, Years

### Add Calculated Fields

1. Click in the pivot table
2. Go to **PivotTable Analyze** > **Fields, Items & Sets** > **Calculated Field**
3. Create formulas using field names

## Pro Tips

### Recommended PivotTable

Excel 365 has "Recommended PivotTables" that suggests analyses based on your data:

1. Select your data
2. Go to **Insert** > **Recommended PivotTables**
3. Browse suggestions and click to create

### Pivot Charts

Visualize your pivot table instantly:

1. Click in the pivot table
2. Go to **Insert** > **PivotChart**
3. Choose your chart type

The chart automatically updates when you modify the pivot table.

### Slicers for Visual Filtering

Add clickable filter buttons:

1. Click in the pivot table
2. Go to **Insert** > **Slicer**
3. Select fields to create slicers for
4. Click slicer buttons to filter

## Conclusion

You've just learned to create a pivot table in 5 minutes. The more you use them, the faster you'll become at turning raw data into actionable insights.

Start with simple analyses: totals by category. Then experiment with multiple dimensions, percentages, and date grouping. Pivot tables are the fastest path from data to insight in Excel.`
  },
  {
    slug: "google-sheets-formulas-every-professional-needs",
    title: "Google Sheets Formulas Every Professional Needs",
    description: "Essential Google Sheets formulas that will boost your productivity. From QUERY to ARRAYFORMULA, master the functions that set Sheets apart.",
    category: "sheets",
    readTime: "12 min read",
    publishedAt: "2024-11-28",
    content: `# Google Sheets Formulas Every Professional Needs

Google Sheets has evolved from a simple online spreadsheet into a powerful data analysis tool. While it shares many functions with Excel, Sheets has unique formulas that can supercharge your productivity. Here are the essential ones every professional should know.

## QUERY: SQL for Spreadsheets

The QUERY function is Sheets' killer feature. It lets you run SQL-like queries on your data without leaving the spreadsheet.

### Basic Syntax

\`\`\`
=QUERY(data, query, [headers])
\`\`\`

### Example: Filter and Sort Sales Data

\`\`\`
=QUERY(A:D, "SELECT A, B, D WHERE D > 1000 ORDER BY D DESC", 1)
\`\`\`

This returns columns A, B, and D where column D exceeds 1000, sorted descending.

### Common QUERY Operations

**Filter by condition:**
\`\`\`
=QUERY(A:D, "SELECT * WHERE B = 'North'")
\`\`\`

**Group and aggregate:**
\`\`\`
=QUERY(A:D, "SELECT B, SUM(D) GROUP BY B")
\`\`\`

**Multiple conditions:**
\`\`\`
=QUERY(A:D, "SELECT * WHERE B = 'North' AND D > 500")
\`\`\`

**Limit results:**
\`\`\`
=QUERY(A:D, "SELECT * ORDER BY D DESC LIMIT 10")
\`\`\`

## ARRAYFORMULA: One Formula, Many Results

ARRAYFORMULA applies a formula to an entire range, outputting multiple results from a single formula.

### Basic Usage

Instead of copying this formula down 1000 rows:
\`\`\`
=A2*B2
\`\`\`

Use one ARRAYFORMULA:
\`\`\`
=ARRAYFORMULA(A2:A*B2:B)
\`\`\`

### Conditional ARRAYFORMULA

Combine with IF to handle empty cells:
\`\`\`
=ARRAYFORMULA(IF(A2:A="","",A2:A*B2:B))
\`\`\`

### ARRAYFORMULA with Text

Concatenate entire columns:
\`\`\`
=ARRAYFORMULA(A2:A&" - "&B2:B)
\`\`\`

## IMPORTRANGE: Connect Spreadsheets

Pull data from other Google Sheets files.

### Syntax

\`\`\`
=IMPORTRANGE("spreadsheet_url", "Sheet1!A:D")
\`\`\`

### Tips

- First use requires authorization (click "Allow access")
- Use named ranges for cleaner formulas
- Combine with QUERY for filtered imports:

\`\`\`
=QUERY(IMPORTRANGE("url","Data!A:D"), "SELECT * WHERE Col1='Active'")
\`\`\`

## UNIQUE and FILTER: Dynamic Lists

### UNIQUE

Extract unique values from a range:
\`\`\`
=UNIQUE(A2:A)
\`\`\`

### FILTER

Return rows matching criteria:
\`\`\`
=FILTER(A2:D, B2:B="North", D2:D>1000)
\`\`\`

Multiple conditions are AND'ed together.

### Combining UNIQUE and FILTER

Get unique values that meet criteria:
\`\`\`
=UNIQUE(FILTER(A2:A, B2:B="North"))
\`\`\`

## REGEXMATCH, REGEXEXTRACT, REGEXREPLACE

Google Sheets has native regex support—a huge advantage over Excel.

### REGEXMATCH

Returns TRUE/FALSE if pattern matches:
\`\`\`
=REGEXMATCH(A2, "\\d{3}-\\d{4}")
\`\`\`
(Matches patterns like 123-4567)

### REGEXEXTRACT

Extracts matching text:
\`\`\`
=REGEXEXTRACT(A2, "\\d+")
\`\`\`
(Extracts first number sequence)

### REGEXREPLACE

Replace matching patterns:
\`\`\`
=REGEXREPLACE(A2, "\\s+", " ")
\`\`\`
(Replaces multiple spaces with single space)

## SPLIT and JOIN

### SPLIT

Break text into multiple cells:
\`\`\`
=SPLIT(A2, ",")
\`\`\`

### JOIN

Combine cells with a delimiter:
\`\`\`
=JOIN(", ", A2:A10)
\`\`\`

### Combining with ARRAYFORMULA

Split an entire column:
\`\`\`
=ARRAYFORMULA(SPLIT(A2:A, ","))
\`\`\`

## SPARKLINE: Inline Charts

Create tiny charts within cells.

### Line Sparkline

\`\`\`
=SPARKLINE(A2:F2)
\`\`\`

### Bar Chart

\`\`\`
=SPARKLINE(A2, {"charttype","bar";"max",100;"color1","green"})
\`\`\`

### Bullet Chart (Progress Bar)

\`\`\`
=SPARKLINE(A2/B2, {"charttype","bar";"max",1;"color1","#4285f4"})
\`\`\`

## IMAGE: Embed Images in Cells

\`\`\`
=IMAGE("https://example.com/image.png")
\`\`\`

Options:
- Mode 1: Fit to cell (default)
- Mode 2: Stretch to cell
- Mode 3: Original size
- Mode 4: Custom size

\`\`\`
=IMAGE("url", 4, 100, 100)
\`\`\`

## GOOGLEFINANCE: Live Stock Data

\`\`\`
=GOOGLEFINANCE("GOOGL")
\`\`\`

Get specific attributes:
\`\`\`
=GOOGLEFINANCE("GOOGL", "price")
=GOOGLEFINANCE("GOOGL", "change")
=GOOGLEFINANCE("GOOGL", "high52")
\`\`\`

Historical data:
\`\`\`
=GOOGLEFINANCE("GOOGL", "close", DATE(2024,1,1), DATE(2024,12,1), "DAILY")
\`\`\`

## GOOGLETRANSLATE

Translate text between languages:
\`\`\`
=GOOGLETRANSLATE(A2, "en", "es")
\`\`\`

Auto-detect source language:
\`\`\`
=GOOGLETRANSLATE(A2, "auto", "en")
\`\`\`

## Power Combinations

### Dynamic Dropdown from Another Sheet

\`\`\`
=UNIQUE(FILTER(IMPORTRANGE("url","Sheet1!A:A"), IMPORTRANGE("url","Sheet1!A:A")<>""))
\`\`\`

### Summarize with QUERY + ARRAYFORMULA

\`\`\`
=QUERY(ARRAYFORMULA({A2:A,B2:B*C2:C}), "SELECT Col1, SUM(Col2) GROUP BY Col1")
\`\`\`

### Conditional Formatting with Formulas

Create a helper column:
\`\`\`
=ARRAYFORMULA(IF(B2:B>AVERAGE(B2:B),"Above Average","Below Average"))
\`\`\`

## Performance Tips

1. **Limit IMPORTRANGE**: Only import needed columns/rows
2. **Avoid volatile functions**: NOW(), TODAY(), RAND() recalculate constantly
3. **Use static ranges**: \`A2:A1000\` instead of \`A2:A\` when possible
4. **Single ARRAYFORMULA**: One ARRAYFORMULA is faster than 1000 individual formulas
5. **Simplify QUERY**: Complex queries can be slow; consider helper columns

## Conclusion

These formulas represent the unique power of Google Sheets. QUERY alone is worth the switch from Excel for many users. Master these functions and you'll handle complex data tasks that would take hours in other tools.

Start with QUERY and ARRAYFORMULA—they'll have the biggest impact on your productivity. Then explore FILTER, UNIQUE, and the regex functions as you encounter specific needs.`
  },
  {
    slug: "how-to-clean-messy-data-in-excel",
    title: "How to Clean Messy Data in Excel",
    description: "Transform chaotic spreadsheets into analysis-ready data. Learn essential data cleaning techniques including removing duplicates, fixing formatting, and standardizing entries.",
    category: "excel",
    readTime: "11 min read",
    publishedAt: "2024-11-20",
    howToSteps: [
      { name: "Remove Duplicates", text: "Select your data range, go to Data > Remove Duplicates. Choose which columns to check for duplicate values and click OK." },
      { name: "Trim Extra Spaces", text: "Use =TRIM(A1) to remove leading, trailing, and extra spaces between words. Copy results and Paste Special > Values to replace originals." },
      { name: "Standardize Text Case", text: "Use =UPPER(), =LOWER(), or =PROPER() functions to standardize capitalization across your data." },
      { name: "Fix Date Formats", text: "Use Text to Columns with Date format, or use DATEVALUE() function to convert text dates to proper Excel dates." },
      { name: "Use Find and Replace", text: "Press Ctrl+H to open Find and Replace. Use this to fix common typos, standardize abbreviations, and remove unwanted characters." }
    ],
    content: `# How to Clean Messy Data in Excel

Every data analyst knows the pain of receiving a spreadsheet that looks like it was assembled during an earthquake. Names in three different formats, dates that Excel doesn't recognize, random spaces everywhere—sound familiar?

Data cleaning isn't glamorous, but it's essential. Bad data leads to bad analysis. Here's your comprehensive guide to transforming chaos into clarity.

## The Data Cleaning Checklist

Before diving in, scan your data for these common issues:

- [ ] Duplicate rows
- [ ] Extra spaces (leading, trailing, multiple)
- [ ] Inconsistent capitalization
- [ ] Text stored as numbers (or vice versa)
- [ ] Dates not recognized as dates
- [ ] Empty cells where there shouldn't be
- [ ] Invalid entries and typos
- [ ] Merged cells (the enemy of analysis)

## Removing Duplicates

### Quick Method: Remove Duplicates Tool

1. Select your data range (including headers)
2. Go to **Data > Remove Duplicates**
3. Check the columns that define "duplicate"
4. Click OK

Excel shows how many duplicates were removed and how many unique values remain.

### Formula Method: Identify Before Deleting

Sometimes you want to see duplicates before removing them. Use COUNTIF:

\`\`\`
=COUNTIF($A$2:$A$1000, A2) > 1
\`\`\`

This returns TRUE for duplicate values. Filter to show only TRUE, then decide what to delete.

## Fixing Text Issues

### Remove Extra Spaces: TRIM

The TRIM function removes:
- Leading spaces
- Trailing spaces
- Multiple spaces between words (leaving single spaces)

\`\`\`
=TRIM(A2)
\`\`\`

### Standardize Capitalization

\`\`\`
=UPPER(A2)      → JOHN SMITH
=LOWER(A2)      → john smith
=PROPER(A2)     → John Smith
\`\`\`

### Remove Non-Printable Characters: CLEAN

\`\`\`
=CLEAN(A2)
\`\`\`

Removes ASCII characters 0-31 (non-printable characters that sometimes sneak in from imports).

### The Ultimate Cleanup Combo

Combine TRIM and CLEAN:
\`\`\`
=TRIM(CLEAN(A2))
\`\`\`

## Extracting and Splitting Data

### Text to Columns

When names are "LastName, FirstName" and you need separate columns:

1. Select the column
2. Go to **Data > Text to Columns**
3. Choose Delimited
4. Select comma as delimiter
5. Finish

### Formula Extraction

Extract first name from "FirstName LastName":
\`\`\`
=LEFT(A2, FIND(" ", A2) - 1)
\`\`\`

Extract last name:
\`\`\`
=RIGHT(A2, LEN(A2) - FIND(" ", A2))
\`\`\`

With TEXTSPLIT (Excel 365):
\`\`\`
=TEXTSPLIT(A2, " ")
\`\`\`

## Fixing Date Problems

### Dates Stored as Text

When dates look like dates but Excel treats them as text:

**Method 1: Multiply by 1**
\`\`\`
=A2 * 1
\`\`\`

**Method 2: DATEVALUE**
\`\`\`
=DATEVALUE(A2)
\`\`\`

**Method 3: Text to Columns**
1. Select the date column
2. Data > Text to Columns
3. Next > Next
4. Choose Date format (MDY, DMY, etc.)
5. Finish

### Inconsistent Date Formats

When you have "1/5/2024" and "January 5, 2024" mixed:

Create a helper column with:
\`\`\`
=TEXT(DATEVALUE(A2), "YYYY-MM-DD")
\`\`\`

## Find and Replace Magic

**Ctrl + H** opens Find and Replace. It's more powerful than most realize.

### Remove All Spaces

Find: (one space)
Replace: (empty)

### Standardize Abbreviations

Find: Street
Replace: St

Find: Avenue
Replace: Ave

### Remove Line Breaks

Find: Ctrl + J (inserts line break character)
Replace: (space or empty)

### Use Wildcards

Enable "Use wildcards" option:

- \`*\` matches any sequence of characters
- \`?\` matches any single character
- \`~\` escapes special characters

Find: \`Mr.*\`
Replace: (empty)
Removes "Mr." followed by anything.

## Handling Blank Cells

### Find and Select Blanks

1. Select your data range
2. Press **F5** (or Ctrl+G) > Special
3. Choose "Blanks"
4. All blank cells are selected

Now you can:
- Delete rows: Right-click > Delete > Entire Row
- Fill with value: Type a value and press **Ctrl + Enter**
- Fill from above: Press **Ctrl + D**

### Fill Blanks with Value Above

1. Select data range
2. Go to (F5) > Special > Blanks
3. Type \`=\` and click the cell above (or press Up Arrow)
4. Press **Ctrl + Enter**

## Number Issues

### Text to Numbers

When numbers have the green triangle warning:
1. Select the range
2. Click the warning icon
3. Choose "Convert to Number"

Or use formula:
\`\`\`
=VALUE(A2)
\`\`\`

### Remove Number Formatting Symbols

Clean currency, percentages, etc.:
\`\`\`
=VALUE(SUBSTITUTE(SUBSTITUTE(A2, "$", ""), ",", ""))
\`\`\`

## Power Query: The Professional Choice

For complex or recurring cleaning tasks, Power Query is the answer.

### Access Power Query

1. Select your data
2. Go to **Data > From Table/Range**
3. Power Query Editor opens

### Common Power Query Transformations

- **Remove duplicates**: Right-click column header
- **Split column**: Right-click > Split Column
- **Replace values**: Right-click > Replace Values
- **Change type**: Click column type icon
- **Trim/Clean**: Add Column > Format > Trim/Clean

### Why Power Query?

1. **Repeatable**: Steps are recorded and can be applied to new data
2. **Non-destructive**: Original data remains unchanged
3. **Powerful**: Handles transformations formulas can't easily do
4. **Connected**: Can pull from multiple sources

## Data Validation: Prevent Future Messes

After cleaning, prevent new errors:

### Dropdown Lists

1. Select target cells
2. Data > Data Validation
3. Allow: List
4. Source: Your list of valid options

### Number Ranges

1. Data > Data Validation
2. Allow: Whole number (or Decimal)
3. Set minimum and maximum

### Date Ranges

Restrict to valid date ranges to prevent typos.

## Automation with Macros

If you clean similar data repeatedly, record a macro:

1. Go to **View > Macros > Record Macro**
2. Perform your cleaning steps
3. Stop recording
4. Run the macro on new data

## Final Steps

After cleaning:

1. **Spot check**: Manually review a sample
2. **Validate**: Use COUNTBLANK, COUNTIF to verify
3. **Document**: Note what you did (for next time)
4. **Backup**: Keep original data in a separate sheet

## Conclusion

Data cleaning is where real analysis begins. A well-cleaned dataset reveals insights that messy data hides. Master these techniques, and you'll spend less time fighting your data and more time finding answers in it.

Start with the basics: TRIM, Remove Duplicates, Find & Replace. Graduate to Power Query for complex transformations. Your future self—and anyone else who uses your spreadsheets—will thank you.`
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map(article => article.slug);
}
