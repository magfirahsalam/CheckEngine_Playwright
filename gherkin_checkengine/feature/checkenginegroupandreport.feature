Feature: Check Engine Group and Report

  @HPI-CE-020
  Scenario: Admin UI Access
    Given user is logged into the system and has admin privileges
    When user opens the Admin UI
    And waits until the Admin UI fully loads
    Then Admin UI loads successfully and menu items Check Engine Groups, Check Engine Management, and Check Engine Reports are visible and accessible

  @HPI-CE-021
  Scenario: Groups List Display
    Given user is logged into the system and has admin privileges
    When user navigates to Check Engine Groups
    Then left panel displays list of all existing groups, quick search input, Add Group button, and each group has a delete icon

  @HPI-CE-022
  Scenario: Group Search
    Given user is logged into the system and has admin privileges
    When user is on Check Engine Groups page
    And user enters text into the Quick Search field
    Then groups list is filtered according to the search input

  @HPI-CE-023
  Scenario: Group Selection
    Given user is logged into the system and has admin privileges
    When user is on Check Engine Groups page
    And user selects a group from the left panel
    Then right panel appears showing optional audience filter, group name, linked dataset, and list of fields included in the group

  @HPI-CE-024
  Scenario: Create New Group (Modal)
    Given user is logged into the system and has admin privileges
    When user is on Check Engine Groups page
    And user clicks Add Group
    Then modal opens containing Group Name, Dataset, and field selection

  @HPI-CE-025
  Scenario: Save New Group
    Given user is logged into the system and has admin privileges
    When user is on Check Engine Groups page
    And user fills Group Name, selects Dataset, selects at least one field, and saves the group
    Then group appears in groups list, selected dataset becomes available for report creation, and selected fields become available in reports

  @HPI-CE-026
  Scenario: Audience Filter on Group
    Given user is logged into the system and has admin privileges
    When user is on Check Engine Groups page
    And user selects an existing group
    And user configures an audience filter
    And user saves changes
    Then audience filter is saved and group visibility is restricted according to the configured audience

  @HPI-CE-027
  Scenario: Delete Group (No Dependencies)
    Given user is logged into the system and has admin privileges
    When user is on Check Engine Groups page
    And group is not used in any report
    And user deletes the group
    And user confirms deletion
    Then group is removed from list and its fields are no longer available in reports

  @HPI-CE-028
  Scenario: Delete Group Used in Report
    Given user is logged into the system and has admin privileges
    When user is on Check Engine Groups page
    And group is used in at least one report
    And user deletes the group
    Then confirmation popup is displayed before deletion

  @HPI-CE-029
  Scenario: Delete Last Group of Dataset
    Given user is logged into the system and has admin privileges
    When user is on Check Engine Groups page
    And group is last remaining group for a dataset
    And user deletes the group
    Then dataset becomes unavailable for new report creation

  @HPI-CE-030
  Scenario: Reports List Display
    Given user is logged into the system and has admin privileges
    When user navigates to Check Engine Reports
    Then left panel is visible and contains list of all reports, search field, and Create Report button

  @HPI-CE-031
  Scenario: Create Report Modal
    Given user is logged into the system and has admin privileges
    When user is on Check Engine Reports page
    And user clicks Create Report
    Then modal opens containing required fields Report Name and Data Sources

  @HPI-CE-032
  Scenario: Dataset Availability Rule
    Given user is logged into the system and has admin privileges
    When user is on Create Report modal
    And user checks available datasets
    Then only datasets with at least one group are selectable

  @HPI-CE-033
  Scenario: Create Single-Dataset Report
    Given user is logged into the system and has admin privileges
    When user is on Create Report modal
    And user enters report name
    And user selects one dataset
    And user saves report
    Then report appears in reports list and right panel shows report configuration tabs

  @HPI-CE-034
  Scenario: Create Multi-Dataset Report (sys_id Required)
    Given user is logged into the system and has admin privileges
    When user is on Create Report modal
    And user selects multiple datasets
    And user saves the report
    Then report is created only if datasets support sys_id, datasets are joined automatically using LEFT JOINs, and join order follows dataset selection order

  @HPI-CE-035
  Scenario: Groups Panel Display in Fields Mapping Tab
    Given user is logged into the system and has admin privileges
    When user has opened an existing report
    And user navigates to Fields Mapping tab
    Then left panel displays all groups from selected datasets with visible toggle, order field, and dataset label

  @HPI-CE-036
  Scenario: Disable Group Visibility
    Given user is logged into the system and has admin privileges
    When user is on Fields Mapping tab
    And group visibility is enabled
    And user turns OFF a group visibility toggle
    Then all fields belonging to the group become unavailable and disappear from fields panel

  @HPI-CE-037
  Scenario: Fields Panel Configuration
    Given user is logged into the system and has admin privileges
    When user is on Fields Mapping tab
    And user selects fields in the Fields panel
    Then admin can configure visible flag, display order, and filter type while group and data source fields remain read-only

  @HPI-CE-038
  Scenario: Filter Type Validation
    Given user is logged into the system and has admin privileges
    When user is on Fields Mapping tab
    And user assigns a filter type to a field
    Then filter type matches the underlying data type

  @HPI-CE-039
  Scenario: Utility Actions in Fields Mapping
    Given user is logged into the system and has admin privileges
    When user is on Fields Mapping tab
    And user clicks Select All Fields
    And user clicks Refresh
    And user clicks Save
    Then all fields are selected when applicable, metadata refresh updates group/field structure, and configuration is saved successfully

  @HPI-CE-040
  Scenario: System Filters Configuration
    Given user is logged into the system and has admin privileges
    When user is on Settings tab
    And user configures a system filter with field, operator, and value
    Then system filter is saved, applies before audience and geo rules, and is not visible or overridable by end users

  @HPI-CE-041
  Scenario: Audience Filter Visibility Control
    Given user is logged into the system and has admin privileges
    When user is on Settings tab
    And user configures an audience filter based on country, market, email, or user role
    Then users not matching the filter do not see the report in the menu

  @HPI-CE-042
  Scenario: Geo Filter Enabled
    Given user is logged into the system and has admin privileges
    When user is on Settings tab
    And user enables Geo Filter
    And user configures dataset field, output format, and separator rules
    Then users see only rows matching their allowed countries/markets

  @HPI-CE-043
  Scenario: Geo Filter Disabled
    Given user is logged into the system and has admin privileges
    When user is on Settings tab
    And user disables Geo Filter
    And user saves settings
    Then users can see all data rows regardless of geo permissions

  @HPI-CE-044
  Scenario: Save and Reload Consistency
    Given user is logged into the system and has admin privileges
    When user has modified group, report, or settings configuration
    And user saves changes
    And user reloads the page
    Then all saved configurations persist correctly
