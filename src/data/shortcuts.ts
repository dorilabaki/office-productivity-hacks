export interface Shortcut {
  keys: string[];
  action: string;
  notes?: string;
}

export interface ShortcutCategory {
  name: string;
  shortcuts: Shortcut[];
}

export interface SoftwareShortcuts {
  software: string;
  icon: string;
  color: string;
  categories: ShortcutCategory[];
}

export const shortcuts: SoftwareShortcuts[] = [
  {
    software: "Excel",
    icon: "table",
    color: "excel",
    categories: [
      {
        name: "Navigation",
        shortcuts: [
          { keys: ["Ctrl", "Home"], action: "Go to cell A1" },
          { keys: ["Ctrl", "End"], action: "Go to last used cell" },
          { keys: ["Ctrl", "→"], action: "Jump to right edge of data" },
          { keys: ["Ctrl", "←"], action: "Jump to left edge of data" },
          { keys: ["Ctrl", "↑"], action: "Jump to top edge of data" },
          { keys: ["Ctrl", "↓"], action: "Jump to bottom edge of data" },
          { keys: ["Ctrl", "Page Up"], action: "Go to previous worksheet" },
          { keys: ["Ctrl", "Page Down"], action: "Go to next worksheet" },
          { keys: ["Ctrl", "G"], action: "Go to dialog (or F5)" }
        ]
      },
      {
        name: "Selection",
        shortcuts: [
          { keys: ["Ctrl", "Shift", "End"], action: "Select to last used cell" },
          { keys: ["Ctrl", "Shift", "Home"], action: "Select to beginning" },
          { keys: ["Shift", "Space"], action: "Select entire row" },
          { keys: ["Ctrl", "Space"], action: "Select entire column" },
          { keys: ["Ctrl", "A"], action: "Select all (data region or sheet)" },
          { keys: ["Ctrl", "Shift", "→"], action: "Extend selection to right edge" },
          { keys: ["Ctrl", "*"], action: "Select current region around active cell" }
        ]
      },
      {
        name: "Editing",
        shortcuts: [
          { keys: ["F2"], action: "Edit active cell" },
          { keys: ["Esc"], action: "Cancel edit" },
          { keys: ["Enter"], action: "Confirm and move down" },
          { keys: ["Tab"], action: "Confirm and move right" },
          { keys: ["Ctrl", "Enter"], action: "Fill all selected cells with entry" },
          { keys: ["Ctrl", "D"], action: "Fill down (copy from above)" },
          { keys: ["Ctrl", "R"], action: "Fill right (copy from left)" },
          { keys: ["Alt", "Enter"], action: "New line within cell" },
          { keys: ["Ctrl", "Z"], action: "Undo" },
          { keys: ["Ctrl", "Y"], action: "Redo" }
        ]
      },
      {
        name: "Formatting",
        shortcuts: [
          { keys: ["Ctrl", "B"], action: "Bold" },
          { keys: ["Ctrl", "I"], action: "Italic" },
          { keys: ["Ctrl", "U"], action: "Underline" },
          { keys: ["Ctrl", "1"], action: "Format Cells dialog" },
          { keys: ["Ctrl", "Shift", "$"], action: "Currency format" },
          { keys: ["Ctrl", "Shift", "%"], action: "Percentage format" },
          { keys: ["Ctrl", "Shift", "#"], action: "Date format" },
          { keys: ["Ctrl", "Shift", "@"], action: "Time format" },
          { keys: ["Ctrl", "Shift", "~"], action: "General format" },
          { keys: ["Alt", "H", "O", "I"], action: "Auto-fit column width" }
        ]
      },
      {
        name: "Formulas",
        shortcuts: [
          { keys: ["F4"], action: "Toggle absolute/relative reference" },
          { keys: ["Ctrl", "`"], action: "Show/hide formulas" },
          { keys: ["Alt", "="], action: "AutoSum" },
          { keys: ["Ctrl", "Shift", "Enter"], action: "Array formula (legacy)" },
          { keys: ["Tab"], action: "Accept autocomplete suggestion" },
          { keys: ["Ctrl", "["], action: "Go to precedent cells" },
          { keys: ["Ctrl", "]"], action: "Go to dependent cells" },
          { keys: ["F9"], action: "Calculate all workbooks" }
        ]
      },
      {
        name: "Data",
        shortcuts: [
          { keys: ["Ctrl", "T"], action: "Create Table" },
          { keys: ["Ctrl", "Shift", "L"], action: "Toggle AutoFilter" },
          { keys: ["Alt", "A", "S", "S"], action: "Sort ascending" },
          { keys: ["Alt", "A", "S", "D"], action: "Sort descending" },
          { keys: ["Alt", "N", "V"], action: "Insert PivotTable" },
          { keys: ["Ctrl", "-"], action: "Delete cells/rows/columns" },
          { keys: ["Ctrl", "+"], action: "Insert cells/rows/columns" }
        ]
      },
      {
        name: "Workbook",
        shortcuts: [
          { keys: ["Ctrl", "N"], action: "New workbook" },
          { keys: ["Ctrl", "O"], action: "Open workbook" },
          { keys: ["Ctrl", "S"], action: "Save" },
          { keys: ["F12"], action: "Save As" },
          { keys: ["Ctrl", "W"], action: "Close current workbook" },
          { keys: ["Ctrl", "P"], action: "Print" },
          { keys: ["Shift", "F11"], action: "Insert new worksheet" }
        ]
      }
    ]
  },
  {
    software: "Google Sheets",
    icon: "sheet",
    color: "sheets",
    categories: [
      {
        name: "Navigation",
        shortcuts: [
          { keys: ["Ctrl", "Home"], action: "Go to beginning of sheet" },
          { keys: ["Ctrl", "End"], action: "Go to last cell with data" },
          { keys: ["Ctrl", "→"], action: "Jump to edge of data region" },
          { keys: ["Ctrl", "Shift", "Page Down"], action: "Go to next sheet" },
          { keys: ["Ctrl", "Shift", "Page Up"], action: "Go to previous sheet" },
          { keys: ["Ctrl", "Alt", "Shift", "M"], action: "Move focus to A1" }
        ]
      },
      {
        name: "Selection",
        shortcuts: [
          { keys: ["Ctrl", "A"], action: "Select all" },
          { keys: ["Shift", "Space"], action: "Select row" },
          { keys: ["Ctrl", "Space"], action: "Select column" },
          { keys: ["Ctrl", "Shift", "→"], action: "Extend selection to edge" },
          { keys: ["Shift", "Click"], action: "Extend selection to clicked cell" }
        ]
      },
      {
        name: "Editing",
        shortcuts: [
          { keys: ["F2"], action: "Edit cell" },
          { keys: ["Enter"], action: "Complete input and move down" },
          { keys: ["Tab"], action: "Complete input and move right" },
          { keys: ["Ctrl", "Enter"], action: "Add new line in cell" },
          { keys: ["Ctrl", "Z"], action: "Undo" },
          { keys: ["Ctrl", "Y"], action: "Redo" },
          { keys: ["Ctrl", "D"], action: "Fill down" },
          { keys: ["Ctrl", "R"], action: "Fill right" }
        ]
      },
      {
        name: "Formatting",
        shortcuts: [
          { keys: ["Ctrl", "B"], action: "Bold" },
          { keys: ["Ctrl", "I"], action: "Italic" },
          { keys: ["Ctrl", "U"], action: "Underline" },
          { keys: ["Ctrl", "Shift", "E"], action: "Center align" },
          { keys: ["Ctrl", "Shift", "L"], action: "Left align" },
          { keys: ["Ctrl", "Shift", "R"], action: "Right align" },
          { keys: ["Ctrl", "\\"], action: "Clear formatting" },
          { keys: ["Alt", "Shift", "5"], action: "Strikethrough" }
        ]
      },
      {
        name: "Formulas",
        shortcuts: [
          { keys: ["F4"], action: "Toggle absolute/relative reference" },
          { keys: ["Ctrl", "`"], action: "Show all formulas" },
          { keys: ["Ctrl", "Shift", "1"], action: "Format as decimal" },
          { keys: ["Ctrl", "Shift", "2"], action: "Format as time" },
          { keys: ["Ctrl", "Shift", "3"], action: "Format as date" },
          { keys: ["Ctrl", "Shift", "4"], action: "Format as currency" },
          { keys: ["Ctrl", "Shift", "5"], action: "Format as percentage" }
        ]
      },
      {
        name: "Sheets & Data",
        shortcuts: [
          { keys: ["Shift", "F11"], action: "Insert new sheet" },
          { keys: ["Ctrl", "Alt", "Shift", "H"], action: "Open revision history" },
          { keys: ["Ctrl", "Shift", "\\"], action: "Create filter" },
          { keys: ["Ctrl", "-"], action: "Delete rows/columns" },
          { keys: ["Ctrl", "+"], action: "Insert rows/columns" },
          { keys: ["Ctrl", "Alt", "M"], action: "Insert comment" }
        ]
      }
    ]
  },
  {
    software: "Word",
    icon: "file-text",
    color: "word",
    categories: [
      {
        name: "Navigation",
        shortcuts: [
          { keys: ["Ctrl", "Home"], action: "Go to beginning of document" },
          { keys: ["Ctrl", "End"], action: "Go to end of document" },
          { keys: ["Ctrl", "→"], action: "Move one word right" },
          { keys: ["Ctrl", "←"], action: "Move one word left" },
          { keys: ["Ctrl", "↑"], action: "Move one paragraph up" },
          { keys: ["Ctrl", "↓"], action: "Move one paragraph down" },
          { keys: ["Ctrl", "G"], action: "Go to page/section/line" },
          { keys: ["Ctrl", "F"], action: "Find" },
          { keys: ["Ctrl", "H"], action: "Find and replace" }
        ]
      },
      {
        name: "Selection",
        shortcuts: [
          { keys: ["Ctrl", "A"], action: "Select all" },
          { keys: ["Ctrl", "Shift", "→"], action: "Select word to right" },
          { keys: ["Ctrl", "Shift", "←"], action: "Select word to left" },
          { keys: ["Ctrl", "Shift", "End"], action: "Select to end of document" },
          { keys: ["Ctrl", "Shift", "Home"], action: "Select to beginning" },
          { keys: ["Shift", "F8"], action: "Shrink selection" },
          { keys: ["Double-click"], action: "Select word" },
          { keys: ["Triple-click"], action: "Select paragraph" }
        ]
      },
      {
        name: "Formatting",
        shortcuts: [
          { keys: ["Ctrl", "B"], action: "Bold" },
          { keys: ["Ctrl", "I"], action: "Italic" },
          { keys: ["Ctrl", "U"], action: "Underline" },
          { keys: ["Ctrl", "Shift", "W"], action: "Underline words only" },
          { keys: ["Ctrl", "Shift", "D"], action: "Double underline" },
          { keys: ["Ctrl", "Shift", "A"], action: "All caps" },
          { keys: ["Ctrl", "D"], action: "Font dialog" },
          { keys: ["Ctrl", "Shift", "+"], action: "Superscript" },
          { keys: ["Ctrl", "="], action: "Subscript" },
          { keys: ["Ctrl", "Shift", "C"], action: "Copy formatting" },
          { keys: ["Ctrl", "Shift", "V"], action: "Paste formatting" }
        ]
      },
      {
        name: "Paragraph",
        shortcuts: [
          { keys: ["Ctrl", "E"], action: "Center align" },
          { keys: ["Ctrl", "L"], action: "Left align" },
          { keys: ["Ctrl", "R"], action: "Right align" },
          { keys: ["Ctrl", "J"], action: "Justify" },
          { keys: ["Ctrl", "M"], action: "Increase indent" },
          { keys: ["Ctrl", "Shift", "M"], action: "Decrease indent" },
          { keys: ["Ctrl", "1"], action: "Single line spacing" },
          { keys: ["Ctrl", "2"], action: "Double line spacing" },
          { keys: ["Ctrl", "5"], action: "1.5 line spacing" }
        ]
      },
      {
        name: "Styles",
        shortcuts: [
          { keys: ["Ctrl", "Shift", "N"], action: "Apply Normal style" },
          { keys: ["Ctrl", "Alt", "1"], action: "Apply Heading 1" },
          { keys: ["Ctrl", "Alt", "2"], action: "Apply Heading 2" },
          { keys: ["Ctrl", "Alt", "3"], action: "Apply Heading 3" },
          { keys: ["Ctrl", "Shift", "L"], action: "Apply List Bullet style" }
        ]
      },
      {
        name: "Document",
        shortcuts: [
          { keys: ["Ctrl", "N"], action: "New document" },
          { keys: ["Ctrl", "O"], action: "Open document" },
          { keys: ["Ctrl", "S"], action: "Save" },
          { keys: ["F12"], action: "Save As" },
          { keys: ["Ctrl", "W"], action: "Close document" },
          { keys: ["Ctrl", "P"], action: "Print" },
          { keys: ["Ctrl", "Enter"], action: "Insert page break" },
          { keys: ["Ctrl", "Shift", "Enter"], action: "Insert column break" }
        ]
      }
    ]
  }
];
