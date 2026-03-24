#!/usr/bin/env python3
"""Generate the Office Productivity Hacks cheat sheet bundle PDF."""

from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.platypus import Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.lib.enums import TA_CENTER, TA_LEFT
import os

# ── Color palette ──────────────────────────────────────────────────────────────
DARK_GREEN   = colors.HexColor("#1A5C45")
MID_GREEN    = colors.HexColor("#2E7D56")
TEAL         = colors.HexColor("#3DAA7A")
LIGHT_TEAL   = colors.HexColor("#E8F5EE")
ACCENT       = colors.HexColor("#F0A500")   # warm amber for highlights
WHITE        = colors.white
OFF_WHITE    = colors.HexColor("#F9FAFB")
DARK_GRAY    = colors.HexColor("#1F2937")
MID_GRAY     = colors.HexColor("#6B7280")
LIGHT_GRAY   = colors.HexColor("#E5E7EB")
VERY_LIGHT   = colors.HexColor("#F3F4F6")

W, H = letter           # 612 × 792 pts
MARGIN = 0.55 * inch
CONTENT_W = W - 2 * MARGIN

LOGO_PATH = os.path.join(os.path.dirname(__file__), "public", "logo.jpeg")
OUT_PATH  = os.path.join(os.path.dirname(__file__), "public", "cheat-sheet-bundle.pdf")


# ── Helpers ────────────────────────────────────────────────────────────────────

def draw_background(c, color=OFF_WHITE):
    c.setFillColor(color)
    c.rect(0, 0, W, H, fill=1, stroke=0)


def draw_header_bar(c, y_top, height, color=DARK_GREEN):
    c.setFillColor(color)
    c.rect(0, y_top - height, W, height, fill=1, stroke=0)


def draw_footer(c, page_num, total_pages):
    footer_h = 0.35 * inch
    c.setFillColor(DARK_GREEN)
    c.rect(0, 0, W, footer_h, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 8)
    c.drawString(MARGIN, 0.12 * inch, "officeproductivityhacks.com")
    c.drawRightString(W - MARGIN, 0.12 * inch, f"Page {page_num} of {total_pages}")
    c.setFont("Helvetica-Bold", 8)
    c.drawCentredString(W / 2, 0.12 * inch,
                        "The Ultimate Office Productivity Cheat Sheet Bundle")


def section_header(c, text, y, bg_color=MID_GREEN, fg_color=WHITE, font_size=13):
    bar_h = 0.32 * inch
    c.setFillColor(bg_color)
    c.roundRect(MARGIN, y - bar_h, CONTENT_W, bar_h, 4, fill=1, stroke=0)
    c.setFillColor(fg_color)
    c.setFont("Helvetica-Bold", font_size)
    c.drawString(MARGIN + 0.14 * inch, y - bar_h + 0.08 * inch, text)
    return y - bar_h - 0.12 * inch


def pill(c, text, x, y, bg=TEAL, fg=WHITE):
    """Small pill-shaped label."""
    tw = c.stringWidth(text, "Helvetica-Bold", 7.5) + 8
    th = 12
    c.setFillColor(bg)
    c.roundRect(x, y, tw, th, 5, fill=1, stroke=0)
    c.setFillColor(fg)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(x + 4, y + 2.5, text)
    return tw


def draw_formula_row(c, formula, syntax, use_case, y, alt=False):
    """One formula entry in a two-column style."""
    row_h = 0.78 * inch
    bg = VERY_LIGHT if alt else WHITE
    c.setFillColor(bg)
    c.roundRect(MARGIN, y - row_h, CONTENT_W, row_h, 3, fill=1, stroke=0)
    # left accent bar
    c.setFillColor(TEAL)
    c.rect(MARGIN, y - row_h, 4, row_h, fill=1, stroke=0)

    left_w = 1.3 * inch
    right_x = MARGIN + left_w + 0.1 * inch
    right_w = CONTENT_W - left_w - 0.1 * inch

    # Formula name
    c.setFillColor(DARK_GREEN)
    c.setFont("Helvetica-Bold", 10.5)
    c.drawString(MARGIN + 0.1 * inch, y - 0.25 * inch, formula)

    # Syntax box
    syn_box_h = 0.22 * inch
    c.setFillColor(DARK_GREEN)
    c.roundRect(right_x, y - 0.28 * inch, right_w - 0.05 * inch,
                syn_box_h, 3, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#AAEECC"))
    c.setFont("Courier-Bold", 7.8)
    c.drawString(right_x + 5, y - 0.28 * inch + 5, syntax[:95])

    # Use-case text
    c.setFillColor(DARK_GRAY)
    c.setFont("Helvetica", 8.2)
    # Wrap long text
    words = use_case.split()
    lines, line = [], ""
    max_chars = int(right_w / 4.6)
    for w in words:
        if len(line) + len(w) + 1 <= max_chars:
            line += ("" if not line else " ") + w
        else:
            lines.append(line); line = w
    lines.append(line)
    for i, ln in enumerate(lines[:3]):
        c.drawString(right_x, y - 0.55 * inch - i * 0.12 * inch, ln)

    return y - row_h - 0.06 * inch


def draw_shortcut_row(c, keys, description, y, alt=False):
    row_h = 0.26 * inch
    bg = VERY_LIGHT if alt else WHITE
    c.setFillColor(bg)
    c.rect(MARGIN, y - row_h, CONTENT_W, row_h, fill=1, stroke=0)

    # Key badge(s)
    x_cur = MARGIN + 6
    for key in keys.split("+"):
        key = key.strip()
        kw = c.stringWidth(key, "Helvetica-Bold", 8) + 10
        c.setFillColor(DARK_GREEN)
        c.roundRect(x_cur, y - row_h + 4, kw, 14, 3, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(x_cur + 5, y - row_h + 7, key)
        x_cur += kw + 2
        # plus sign between keys
        if key != keys.split("+")[-1].strip():
            c.setFillColor(MID_GRAY)
            c.setFont("Helvetica", 8)
            c.drawString(x_cur, y - row_h + 7, "+")
            x_cur += 9

    key_col_w = 1.85 * inch
    c.setFillColor(DARK_GRAY)
    c.setFont("Helvetica", 8.5)
    c.drawString(MARGIN + key_col_w, y - row_h + 7, description)
    return y - row_h - 0.03 * inch


def divider(c, y, color=LIGHT_GRAY, width=1):
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(MARGIN, y, W - MARGIN, y)
    return y - 0.08 * inch


# ── PAGE 1 — COVER ─────────────────────────────────────────────────────────────

def page_cover(c):
    # Full green background
    c.setFillColor(DARK_GREEN)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Decorative circles (background texture)
    c.setFillColor(MID_GREEN)
    c.circle(W - 0.3 * inch, H - 0.3 * inch, 1.5 * inch, fill=1, stroke=0)
    c.circle(0.3 * inch, 0.3 * inch, 1.2 * inch, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#255f48"))
    c.circle(W / 2, H - 0.1 * inch, 2.5 * inch, fill=1, stroke=0)

    # Logo
    if os.path.exists(LOGO_PATH):
        logo_size = 1.5 * inch
        c.drawImage(LOGO_PATH,
                    (W - logo_size) / 2, H - 2.3 * inch,
                    width=logo_size, height=logo_size,
                    preserveAspectRatio=True, mask="auto")

    # Brand tag above title
    brand_y = H - 2.7 * inch
    bw = c.stringWidth("OFFICE PRODUCTIVITY HACKS", "Helvetica-Bold", 9.5) + 24
    c.setFillColor(ACCENT)
    c.roundRect((W - bw) / 2, brand_y - 14, bw, 18, 9, fill=1, stroke=0)
    c.setFillColor(DARK_GREEN)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawCentredString(W / 2, brand_y - 10, "OFFICE PRODUCTIVITY HACKS")

    # Main title
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 31)
    c.drawCentredString(W / 2, H - 3.3 * inch, "The Ultimate")
    c.setFont("Helvetica-Bold", 31)
    c.drawCentredString(W / 2, H - 3.75 * inch, "Office Productivity")
    c.setFont("Helvetica-Bold", 31)
    c.drawCentredString(W / 2, H - 4.2 * inch, "Cheat Sheet Bundle")

    # Accent line
    c.setStrokeColor(ACCENT)
    c.setLineWidth(3)
    line_w = 2.5 * inch
    c.line((W - line_w) / 2, H - 4.45 * inch, (W + line_w) / 2, H - 4.45 * inch)

    # Subtitle
    c.setFillColor(colors.HexColor("#B2DFCC"))
    c.setFont("Helvetica", 13)
    c.drawCentredString(W / 2, H - 4.75 * inch,
                        "50+ Excel Formulas, Google Sheets Functions")
    c.drawCentredString(W / 2, H - 4.98 * inch, "& Keyboard Shortcuts")

    # Content preview pills
    items = [
        "Excel Formulas",
        "Google Sheets",
        "Keyboard Shortcuts",
        "Pro Tips",
    ]
    pill_y = H - 5.5 * inch
    total_pill_w = sum(c.stringWidth(t, "Helvetica-Bold", 9) + 22 for t in items) + (len(items)-1)*8
    x_pill = (W - total_pill_w) / 2
    for item in items:
        pw = c.stringWidth(item, "Helvetica-Bold", 9) + 22
        c.setFillColor(colors.HexColor("#2E7D56"))
        c.roundRect(x_pill, pill_y, pw, 20, 10, fill=1, stroke=0)
        c.setFillColor(ACCENT)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(x_pill + 11, pill_y + 5.5, item)
        x_pill += pw + 8

    # Includes line
    c.setFillColor(colors.HexColor("#8ECFB0"))
    c.setFont("Helvetica", 10)
    c.drawCentredString(W / 2, H - 5.95 * inch,
                        "Includes: Excel  •  Google Sheets  •  Windows & Mac shortcuts")

    # Bottom white card
    card_h = 1.6 * inch
    card_y = 0.45 * inch
    c.setFillColor(WHITE)
    c.roundRect(MARGIN, card_y, CONTENT_W, card_h, 10, fill=1, stroke=0)

    c.setFillColor(DARK_GREEN)
    c.setFont("Helvetica-Bold", 13)
    c.drawCentredString(W / 2, card_y + card_h - 0.32 * inch,
                        "FREE RESOURCE — Save, Print & Share!")
    c.setFillColor(MID_GRAY)
    c.setFont("Helvetica", 9.5)
    c.drawCentredString(W / 2, card_y + card_h - 0.58 * inch,
                        "Get more free templates, tutorials, and productivity tips at:")
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 14)
    c.drawCentredString(W / 2, card_y + card_h - 0.88 * inch,
                        "officeproductivityhacks.com")
    c.setFillColor(MID_GRAY)
    c.setFont("Helvetica", 8.5)
    c.drawCentredString(W / 2, card_y + card_h - 1.1 * inch,
                        "LinkedIn: 115K+ followers  •  Weekly tips  •  Free downloads")


# ── PAGE 2 — EXCEL FORMULAS ────────────────────────────────────────────────────

def page_excel(c):
    draw_background(c, OFF_WHITE)
    draw_header_bar(c, H, 0.55 * inch, DARK_GREEN)

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 18)
    c.drawString(MARGIN, H - 0.38 * inch, "Excel Formula Reference")
    pill(c, "Page 2", W - MARGIN - 0.75 * inch, H - 0.42 * inch, ACCENT, DARK_GREEN)

    y = H - 0.68 * inch

    formulas = [
        (
            "VLOOKUP",
            "=VLOOKUP(lookup_value, table_array, col_index, [range_lookup])",
            "Look up a value in the leftmost column and return data from another column. Use FALSE for exact match.",
        ),
        (
            "XLOOKUP",
            "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])",
            "Modern replacement for VLOOKUP. Searches any column, returns any column, and handles errors gracefully.",
        ),
        (
            "INDEX + MATCH",
            "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
            "Powerful alternative to VLOOKUP. Searches any column and handles inserts/deletions better.",
        ),
        (
            "SUMIF",
            "=SUMIF(range, criteria, [sum_range])",
            "Sum cells that meet a single condition. For multiple conditions use SUMIFS(sum_range, range1, criteria1, ...).",
        ),
        (
            "COUNTIF / COUNTIFS",
            "=COUNTIF(range, criteria)  |  =COUNTIFS(r1, c1, r2, c2, ...)",
            "Count cells meeting one or more conditions. Great for dashboards and frequency analysis.",
        ),
        (
            "IF / IFS / IFERROR",
            "=IF(condition, value_if_true, value_if_false)",
            "IFS handles multiple conditions without nesting. IFERROR(formula, fallback) catches errors cleanly.",
        ),
        (
            "TEXT",
            '=TEXT(value, format_text)  e.g., =TEXT(A1,"MMM DD, YYYY")',
            "Convert numbers/dates to formatted text strings. Essential for combining values in sentences.",
        ),
        (
            "DATE / DATEDIF / EDATE",
            "=DATE(year,month,day)  =DATEDIF(start,end,unit)  =EDATE(date,months)",
            "DATE builds dates from parts. DATEDIF calculates age/tenure. EDATE adds/subtracts months.",
        ),
    ]

    for i, (formula, syntax, use_case) in enumerate(formulas):
        if y < 0.5 * inch:
            break
        y = draw_formula_row(c, formula, syntax, use_case, y, alt=(i % 2 == 1))

    draw_footer(c, 2, 6)


# ── PAGE 3 — GOOGLE SHEETS FUNCTIONS ──────────────────────────────────────────

def page_sheets(c):
    draw_background(c, OFF_WHITE)
    draw_header_bar(c, H, 0.55 * inch, colors.HexColor("#0F5132"))

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 18)
    c.drawString(MARGIN, H - 0.38 * inch, "Google Sheets Power Functions")
    pill(c, "Page 3", W - MARGIN - 0.75 * inch, H - 0.42 * inch, ACCENT, DARK_GREEN)

    y = H - 0.68 * inch

    functions = [
        (
            "QUERY",
            '=QUERY(data, "SELECT A, B WHERE C > 100 ORDER BY B DESC")',
            "Run SQL-like queries on your data. Filter, sort, aggregate, and pivot without complex formulas.",
        ),
        (
            "ARRAYFORMULA",
            "=ARRAYFORMULA(formula)  e.g., =ARRAYFORMULA(A2:A*B2:B)",
            "Apply a formula to an entire range at once. Avoids copying formulas down hundreds of rows.",
        ),
        (
            "IMPORTRANGE",
            '=IMPORTRANGE("spreadsheet_url", "Sheet1!A1:D100")',
            "Pull live data from another Google Sheet. Ideal for dashboards that consolidate multiple sources.",
        ),
        (
            "FILTER",
            "=FILTER(range, condition1, [condition2, ...])",
            "Return only rows meeting your conditions. Dynamic — updates automatically when source data changes.",
        ),
        (
            "SORT / SORTN",
            "=SORT(range, sort_col, is_ascending)  =SORTN(range, n, mode)",
            "SORT arranges data by column(s). SORTN returns the top N results, like a live top-10 leaderboard.",
        ),
        (
            "UNIQUE",
            "=UNIQUE(range, [by_column], [exactly_once])",
            "Extract distinct values from a range. Combine with SORT for a dynamic unique-sorted list.",
        ),
        (
            "FLATTEN",
            "=FLATTEN(range1, [range2, ...])",
            "Collapse a 2D range into a single column. Useful before UNIQUE or COUNTIF on multi-column data.",
        ),
        (
            "SPARKLINE",
            '=SPARKLINE(data, {"charttype","line";"color","teal"})',
            "Render a tiny chart inside a cell. Supports line, bar, column, and winloss types.",
        ),
    ]

    for i, (fn, syntax, use_case) in enumerate(functions):
        if y < 0.5 * inch:
            break
        y = draw_formula_row(c, fn, syntax, use_case, y, alt=(i % 2 == 1))

    draw_footer(c, 3, 6)


# ── PAGE 4 — KEYBOARD SHORTCUTS ───────────────────────────────────────────────

def page_shortcuts(c):
    draw_background(c, OFF_WHITE)
    draw_header_bar(c, H, 0.55 * inch, DARK_GREEN)

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 18)
    c.drawString(MARGIN, H - 0.38 * inch, "Essential Keyboard Shortcuts")
    pill(c, "Page 4", W - MARGIN - 0.75 * inch, H - 0.42 * inch, ACCENT, DARK_GREEN)

    y = H - 0.7 * inch
    col_w = (CONTENT_W - 0.2 * inch) / 2
    left_x = MARGIN
    right_x = MARGIN + col_w + 0.2 * inch

    # ── Excel column ──
    c.setFillColor(DARK_GREEN)
    c.roundRect(left_x, y - 0.28 * inch, col_w, 0.28 * inch, 4, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(left_x + 0.1 * inch, y - 0.19 * inch, "Microsoft Excel")

    # ── Google Sheets column ──
    c.setFillColor(colors.HexColor("#0F5132"))
    c.roundRect(right_x, y - 0.28 * inch, col_w, 0.28 * inch, 4, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(right_x + 0.1 * inch, y - 0.19 * inch, "Google Sheets")

    y -= 0.35 * inch

    excel_shortcuts = [
        ("Ctrl + C / Ctrl + V",         "Copy / Paste"),
        ("Ctrl + Z / Ctrl + Y",         "Undo / Redo"),
        ("Ctrl + Shift + L",            "Toggle AutoFilter"),
        ("Ctrl + T",                    "Create Table"),
        ("Ctrl + Shift + +",            "Insert row/column"),
        ("Ctrl + -",                    "Delete row/column"),
        ("Ctrl + 1",                    "Format Cells dialog"),
        ("Alt + =",                     "AutoSum selected range"),
        ("Ctrl + `",                    "Toggle formula view"),
        ("F4",                          "Toggle absolute reference ($)"),
        ("Ctrl + Shift + End",          "Extend selection to last cell"),
        ("Ctrl + Home",                 "Jump to cell A1"),
        ("Alt + H + O + I",             "AutoFit column width"),
        ("Ctrl + Shift + 1",            "Apply Number format"),
        ("Ctrl + Shift + 4",            "Apply Currency format"),
        ("Alt + D + P",                 "Open PivotTable wizard"),
        ("F11",                         "Create chart in new sheet"),
        ("Ctrl + W",                    "Close workbook"),
    ]

    sheets_shortcuts = [
        ("Ctrl + C / Ctrl + V",         "Copy / Paste"),
        ("Ctrl + Z / Ctrl + Y",         "Undo / Redo"),
        ("Ctrl + Shift + L",            "Toggle filter"),
        ("Ctrl + Alt + Shift + H",      "Open Explore panel"),
        ("Ctrl + /",                    "Show all keyboard shortcuts"),
        ("Ctrl + K",                    "Insert hyperlink"),
        ("Ctrl + Shift + V",            "Paste values only"),
        ("Ctrl + Alt + V",              "Paste special dialog"),
        ("Ctrl + Shift + E",            "Expand/collapse all groups"),
        ("Ctrl + \\",                   "Select cells where row differs"),
        ("Alt + I + R",                 "Insert row above"),
        ("Alt + I + C",                 "Insert column left"),
        ("Ctrl + Shift + Home",         "Select to beginning"),
        ("Ctrl + Space",                "Select entire column"),
        ("Shift + Space",               "Select entire row"),
        ("Ctrl + F",                    "Find"),
        ("Ctrl + H",                    "Find & Replace"),
        ("Ctrl + Shift + F",            "Format toolbar shortcut"),
    ]

    row_h = 0.225 * inch
    row_h_small = 0.21 * inch

    for i, ((keys_e, desc_e), (keys_s, desc_s)) in enumerate(
        zip(excel_shortcuts, sheets_shortcuts)
    ):
        if y < 0.5 * inch:
            break
        bg = VERY_LIGHT if i % 2 == 0 else WHITE

        # Excel row
        c.setFillColor(bg)
        c.rect(left_x, y - row_h, col_w, row_h, fill=1, stroke=0)
        # Key chips
        x_k = left_x + 4
        for part in keys_e.split(" + "):
            kw = c.stringWidth(part, "Helvetica-Bold", 7) + 8
            c.setFillColor(DARK_GREEN)
            c.roundRect(x_k, y - row_h + 3, kw, 12, 2, fill=1, stroke=0)
            c.setFillColor(WHITE)
            c.setFont("Helvetica-Bold", 7)
            c.drawString(x_k + 4, y - row_h + 6, part)
            x_k += kw + 2
            if part != keys_e.split(" + ")[-1]:
                c.setFillColor(MID_GRAY)
                c.setFont("Helvetica", 7)
                c.drawString(x_k, y - row_h + 6, "+")
                x_k += 7
        key_end = left_x + 1.8 * inch
        c.setFillColor(DARK_GRAY)
        c.setFont("Helvetica", 7.5)
        c.drawString(key_end, y - row_h + 6, desc_e)

        # Google Sheets row
        c.setFillColor(bg)
        c.rect(right_x, y - row_h, col_w, row_h, fill=1, stroke=0)
        x_k = right_x + 4
        for part in keys_s.split(" + "):
            kw = c.stringWidth(part, "Helvetica-Bold", 7) + 8
            c.setFillColor(colors.HexColor("#0F5132"))
            c.roundRect(x_k, y - row_h + 3, kw, 12, 2, fill=1, stroke=0)
            c.setFillColor(WHITE)
            c.setFont("Helvetica-Bold", 7)
            c.drawString(x_k + 4, y - row_h + 6, part)
            x_k += kw + 2
            if part != keys_s.split(" + ")[-1]:
                c.setFillColor(MID_GRAY)
                c.setFont("Helvetica", 7)
                c.drawString(x_k, y - row_h + 6, "+")
                x_k += 7
        key_end = right_x + 1.8 * inch
        c.setFillColor(DARK_GRAY)
        c.setFont("Helvetica", 7.5)
        c.drawString(key_end, y - row_h + 6, desc_s)

        y -= row_h + 0.02 * inch

    # Mac note
    y -= 0.05 * inch
    c.setFillColor(LIGHT_TEAL)
    c.roundRect(MARGIN, y - 0.25 * inch, CONTENT_W, 0.25 * inch, 4, fill=1, stroke=0)
    c.setFillColor(DARK_GREEN)
    c.setFont("Helvetica-BoldOblique", 8)
    c.drawCentredString(W / 2, y - 0.17 * inch,
                        "Mac users: replace Ctrl with Cmd  |  Alt with Option")

    draw_footer(c, 4, 6)


# ── PAGE 5 — PRO TIPS ─────────────────────────────────────────────────────────

def page_pro_tips(c):
    draw_background(c, OFF_WHITE)
    draw_header_bar(c, H, 0.55 * inch, DARK_GREEN)

    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 18)
    c.drawString(MARGIN, H - 0.38 * inch, "Pro Tips & Time Savers")
    pill(c, "Page 5", W - MARGIN - 0.75 * inch, H - 0.42 * inch, ACCENT, DARK_GREEN)

    y = H - 0.72 * inch

    tip_sections = [
        ("Conditional Formatting Tricks", TEAL, [
            ("Color scales for heatmaps",
             "Select a data range > Conditional Formatting > Color Scale. Use Red-Yellow-Green "
             "to instantly visualize high/low values — great for KPI dashboards."),
            ("Highlight duplicates instantly",
             "Use a custom formula: =COUNTIF($A$1:$A$100,A1)>1 to flag duplicates across any "
             "column. Combine with a bold red fill for maximum visibility."),
            ("Icon sets for status columns",
             "Apply 3-icon sets (arrows, traffic lights) to status fields. Set thresholds "
             "manually for precise control rather than relying on auto-percentile defaults."),
            ("Apply rules to entire rows",
             "Lock only the criteria column ($A2) so the formula evaluates A but highlights "
             "the entire row — e.g., =$C2=\"Overdue\" highlights the full row red."),
        ]),
        ("Pivot Table Best Practices", colors.HexColor("#0F5132"), [
            ("Use Tables as your source",
             "Convert source data to a Table (Ctrl+T) first. Pivot Tables built on Tables "
             "auto-expand when new rows are added — no manual range updates needed."),
            ("Group dates automatically",
             "Right-click any date field in the pivot rows area and choose Group. Select Year, "
             "Quarter, and Month together for drill-down reporting."),
            ("Calculated fields for KPIs",
             "Insert > Calculated Field lets you build metrics like Profit Margin directly "
             "inside the pivot — no helper columns in your source data required."),
            ("Slicer + Timeline combos",
             "Add Slicers for categorical filters and a Timeline for date ranges. Connect "
             "both to multiple pivot tables for a self-service dashboard."),
        ]),
        ("Data Validation Techniques", colors.HexColor("#1A4971"), [
            ("Dropdown lists from a named range",
             "Create a Named Range for your list values (Formulas > Name Manager), then use "
             "it as the Data Validation source. Lists update automatically when the range changes."),
            ("Dependent dropdowns",
             "Use INDIRECT() in validation: =INDIRECT(A2) where A2 holds a category name that "
             "matches a Named Range — e.g., selecting 'Fruit' shows only fruit options in B2."),
            ("Whole number & date constraints",
             "Prevent bad input: use Whole Number between 1 and 100 for scores, or Date "
             "between TODAY() and TODAY()+30 to enforce booking lead times."),
            ("Custom formula validation",
             "Block lowercase entries with =EXACT(A1,UPPER(A1)), or ensure uniqueness with "
             "=COUNTIF($A$1:$A$100,A1)=1. Add an error alert with a helpful message."),
        ]),
    ]

    for section_title, color, tips in tip_sections:
        if y < 0.5 * inch:
            break
        # Section header
        sec_h = 0.3 * inch
        c.setFillColor(color)
        c.roundRect(MARGIN, y - sec_h, CONTENT_W, sec_h, 5, fill=1, stroke=0)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(MARGIN + 0.1 * inch, y - sec_h + 0.08 * inch, section_title)
        y -= sec_h + 0.06 * inch

        # Tips in 2-column grid
        tip_h = 0.72 * inch
        gap = 0.12 * inch
        col_w = (CONTENT_W - gap) / 2

        for pair_i in range(0, len(tips), 2):
            if y - tip_h < 0.45 * inch:
                break
            for col_i in range(2):
                idx = pair_i + col_i
                if idx >= len(tips):
                    break
                title, body = tips[idx]
                tx = MARGIN + col_i * (col_w + gap)

                c.setFillColor(WHITE)
                c.roundRect(tx, y - tip_h, col_w, tip_h, 5, fill=1, stroke=0)
                # top accent bar
                c.setFillColor(color)
                c.roundRect(tx, y - 0.18 * inch, col_w, 0.18 * inch, 5, fill=1, stroke=0)
                c.setFillColor(WHITE)
                c.setFont("Helvetica-Bold", 8.5)
                c.drawString(tx + 7, y - 0.12 * inch, title)

                # Body text wrapped
                c.setFillColor(DARK_GRAY)
                c.setFont("Helvetica", 7.8)
                words = body.split()
                lines, ln = [], ""
                max_ch = int(col_w / 4.3)
                for w in words:
                    if len(ln) + len(w) + 1 <= max_ch:
                        ln += ("" if not ln else " ") + w
                    else:
                        lines.append(ln); ln = w
                lines.append(ln)
                for li, line_text in enumerate(lines[:4]):
                    c.drawString(tx + 7, y - 0.32 * inch - li * 0.115 * inch, line_text)

            y -= tip_h + 0.08 * inch

        y -= 0.1 * inch

    draw_footer(c, 5, 6)


# ── PAGE 6 — BACK / CTA ───────────────────────────────────────────────────────

def page_cta(c):
    # Dark green background
    c.setFillColor(DARK_GREEN)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Decorative circles
    c.setFillColor(MID_GREEN)
    c.circle(W + 0.5 * inch, H * 0.8, 2 * inch, fill=1, stroke=0)
    c.circle(-0.5 * inch, H * 0.2, 1.5 * inch, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#255f48"))
    c.circle(W * 0.5, -0.5 * inch, 3 * inch, fill=1, stroke=0)

    # Top label
    y = H - 1.3 * inch
    lw = c.stringWidth("YOU'VE JUST LEVELED UP!", "Helvetica-Bold", 10) + 28
    c.setFillColor(ACCENT)
    c.roundRect((W - lw) / 2, y - 18, lw, 22, 11, fill=1, stroke=0)
    c.setFillColor(DARK_GREEN)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(W / 2, y - 12, "YOU'VE JUST LEVELED UP!")

    # Headline
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 26)
    c.drawCentredString(W / 2, H - 1.95 * inch, "Want More Tips Like These?")

    # Accent line
    c.setStrokeColor(ACCENT)
    c.setLineWidth(2.5)
    c.line(W / 2 - 1.5 * inch, H - 2.15 * inch, W / 2 + 1.5 * inch, H - 2.15 * inch)

    # Description
    c.setFillColor(colors.HexColor("#B2DFCC"))
    c.setFont("Helvetica", 11.5)
    c.drawCentredString(W / 2, H - 2.55 * inch,
                        "Join 115,000+ professionals on LinkedIn who follow")
    c.drawCentredString(W / 2, H - 2.78 * inch,
                        "Office Productivity Hacks for weekly tips, tutorials,")
    c.drawCentredString(W / 2, H - 3.01 * inch, "and free resources.")

    # White CTA card
    card_y = H - 5.55 * inch
    card_h = 2.3 * inch
    c.setFillColor(WHITE)
    c.roundRect(MARGIN, card_y, CONTENT_W, card_h, 12, fill=1, stroke=0)

    # CTA content
    c.setFillColor(DARK_GREEN)
    c.setFont("Helvetica-Bold", 14)
    c.drawCentredString(W / 2, card_y + card_h - 0.38 * inch, "Visit Us & Get More Free Resources")
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 20)
    c.drawCentredString(W / 2, card_y + card_h - 0.72 * inch, "officeproductivityhacks.com")

    c.setStrokeColor(LIGHT_GRAY)
    c.setLineWidth(0.8)
    c.line(MARGIN + 0.3 * inch, card_y + card_h - 0.92 * inch,
           W - MARGIN - 0.3 * inch, card_y + card_h - 0.92 * inch)

    links = [
        ("Free Excel Templates",    "Download ready-to-use workbooks"),
        ("Google Sheets Tutorials", "Step-by-step video guides"),
        ("LinkedIn Community",      "115K+ followers — join the conversation"),
        ("Weekly Newsletter",       "Tips delivered to your inbox"),
    ]
    row_y = card_y + card_h - 1.08 * inch
    for title, desc in links:
        # bullet dot
        c.setFillColor(TEAL)
        c.circle(MARGIN + 0.22 * inch, row_y + 3.5, 4, fill=1, stroke=0)
        c.setFillColor(DARK_GREEN)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(MARGIN + 0.36 * inch, row_y, title)
        c.setFillColor(MID_GRAY)
        c.setFont("Helvetica", 9)
        c.drawString(MARGIN + 0.36 * inch + c.stringWidth(title, "Helvetica-Bold", 9) + 6,
                     row_y, f"— {desc}")
        row_y -= 0.26 * inch

    # Logo at bottom of card
    if os.path.exists(LOGO_PATH):
        logo_s = 0.7 * inch
        c.drawImage(LOGO_PATH,
                    (W - logo_s) / 2, card_y + 0.05 * inch,
                    width=logo_s, height=logo_s,
                    preserveAspectRatio=True, mask="auto")

    # Final tagline
    c.setFillColor(colors.HexColor("#8ECFB0"))
    c.setFont("Helvetica-BoldOblique", 10.5)
    c.drawCentredString(W / 2, H - 6.4 * inch,
                        '"Work smarter, not harder — one shortcut at a time."')

    # Bottom strip
    strip_h = 0.5 * inch
    c.setFillColor(ACCENT)
    c.rect(0, 0, W, strip_h, fill=1, stroke=0)
    c.setFillColor(DARK_GREEN)
    c.setFont("Helvetica-Bold", 9.5)
    c.drawCentredString(W / 2, 0.18 * inch,
                        "officeproductivityhacks.com  |  LinkedIn: Office Productivity Hacks  |  115K+ Followers")


# ── MAIN ───────────────────────────────────────────────────────────────────────

def build_pdf():
    c = canvas.Canvas(OUT_PATH, pagesize=letter)
    c.setTitle("The Ultimate Office Productivity Cheat Sheet Bundle")
    c.setAuthor("Office Productivity Hacks")
    c.setSubject("Excel Formulas, Google Sheets Functions & Keyboard Shortcuts")
    c.setCreator("officeproductivityhacks.com")

    # Page 1 — Cover
    page_cover(c)
    c.showPage()

    # Page 2 — Excel
    page_excel(c)
    c.showPage()

    # Page 3 — Google Sheets
    page_sheets(c)
    c.showPage()

    # Page 4 — Shortcuts
    page_shortcuts(c)
    c.showPage()

    # Page 5 — Pro Tips
    page_pro_tips(c)
    c.showPage()

    # Page 6 — CTA / Back page
    page_cta(c)
    c.showPage()

    c.save()
    print(f"PDF saved: {OUT_PATH}")


if __name__ == "__main__":
    build_pdf()
