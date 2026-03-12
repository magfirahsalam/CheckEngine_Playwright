Feature: Check Engine UI

Scenario: HPI-CE-001 Page Load and Basic UI Rendering
  Given user is logged into the system and has access to at least one report
  When user opens the Check Engine reporting module
  Then the central panel, conditional left filter panel, and bottom grid section are displayed

Scenario: HPI-CE-002 Report Change Reset Fields and Filters
  Given a report is selected with fields and filters applied
  When user selects a different report from the report dropdown
  Then fields, filters, and left panel state are reset based on the selected report

Scenario: HPI-CE-003 Filter Panel Visibility Based on Report
  Given one report has admin filters and another report does not
  When user switches between the two reports
  Then filter panel is shown only for the report with admin filters

Scenario: HPI-CE-004 Enable or Disable Entire Field Group
  Given a report contains multiple field groups
  When user enables a full field group and applies the change
  Then all fields in the group appear as columns in the grid

Scenario: HPI-CE-005 Select Individual Fields
  Given a field group contains multiple fields and the group is unchecked
  When user selects a single field and applies the change
  Then only the selected field appears as a column in the grid

Scenario: HPI-CE-006 Tag Display for Many Selected Fields
  Given selected fields exceed the visible tag limit
  When user selects multiple fields across groups
  Then selected fields are shown as tags with an "and X more" indicator

Scenario: HPI-CE-007 Save New Configuration
  Given fields and filters are configured
  When user saves the configuration with a new name
  Then the configuration is stored with selected fields and applied filters

Scenario: HPI-CE-008 Load Configuration Without Applying
  Given multiple saved configurations exist
  When user selects a configuration without pressing Apply
  Then the UI updates while the grid data remains unchanged

Scenario: HPI-CE-009 Load Configuration and Apply
  Given a saved configuration exists
  When user selects the configuration and applies it
  Then grid data and applied filters reflect the saved configuration //

Scenario: HPI-CE-010 Search Within Loaded Rows Only
  Given only the first page of grid data is loaded
  When user searches for values in the grid
  Then search returns results only from loaded rows without fetching new data

Scenario: HPI-CE-011 Search Across Hidden Columns
  Given the report contains more columns than currently visible
  When user performs a search
  Then matching rows are found even if the data is in hidden columns

Scenario: HPI-CE-012 Modify Filter Without Applying
  Given a report has already been executed
  When user modifies a filter without applying changes
  Then grid data remains unchanged

Scenario: HPI-CE-013 Apply Multiple Changes at Once
  Given a report is executed
  When user modifies fields and filters and applies changes
  Then the grid reloads with updated columns and all filters applied

Scenario: HPI-CE-014 Export Current Result
  Given a report is executed with selected fields and filters
  When user exports the report
  Then the exported file contains only permitted data matching the grid

Scenario: HPI-CE-015 Navigate Between Data Pages
  Given the report contains multiple pages of data
  When user navigates to another page
  Then the grid loads the next dataset from the server

Scenario: HPI-CE-016 Switch Between Column Batches
  Given the report contains many columns
  When user switches between column batches
  Then visible columns change without affecting row data or search behavior

Scenario: HPI-CE-017 Apply Column Filter
  Given the grid contains filterable columns
  When user applies a column-level filter
  Then the grid shows filtered rows and the filter appears in Applied Filters

Scenario: HPI-CE-018 Remove Filter from Applied Filters
  Given multiple filters are active
  When user removes one filter and applies changes
  Then data reloads without the removed filter while others remain active

Scenario: HPI-CE-019 Field Level Security for Restricted Fields
  Given the user does not have access to certain fields
  When user executes the report
  Then restricted fields are hidden from the UI, grid, and export

Scenario: HPI-CE-020 Row Level Security for Restricted Data
  Given the user has access only to specific country data
  When user executes and exports the report
  Then only permitted country data appears in the grid and export
