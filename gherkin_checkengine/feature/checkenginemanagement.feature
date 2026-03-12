Feature: Check Engine Management UI

  @HPI-CE-045
  Scenario: Verify execution list display
    Given user is logged into the system and has access to the Management page
    When user navigates to the Management page
    Then the top grid displays all execution runs with columns Name, Result, Is Active, Status, Params, Statistics, and Actions without missing columns

  @HPI-CE-046
  Scenario: Verify execution sorting
    Given user is logged into the system and has access to the Management page
    When user clicks Create Execution, names it "Test_Sorting", starts it, and returns to the execution list
    Then "Test_Sorting" appears as the first row in the grid confirming reverse chronological order

  @HPI-CE-047
  Scenario: Verify single active execution rule
    Given user is logged into the system and has access to the Management page
    When user selects a different inactive execution by clicking its active radio button
    Then the newly selected execution is marked active and the previously active execution is automatically deactivated, ensuring only one active execution exists

  @HPI-CE-048
  Scenario: Verify execution statistics icons
    Given user is logged into the system and has access to the Management page
    When user locates an execution with non-zero statistics, hovers over the warning icon, and clicks it
    Then icons (▼, ▲, ✗) are visible with correct counts and clicking filters or highlights related log entries

  @HPI-CE-049
  Scenario: Verify delete execution functionality
    Given user is logged into the system and has access to the Management page
    When user deletes an old non-active execution and refreshes or navigates away and back
    Then the execution row is removed immediately and does not reappear after refresh, and reports continue to function using the active execution

  @HPI-CE-050
  Scenario: Verify scheduled executions
    Given user is logged into the system and has access to the Management page
    When a scheduled job runs and user checks the execution list
    Then a new execution appears indicating "Scheduled Job" with logs and structure matching manual executions

  @HPI-CE-051
  Scenario: Verify manual execution creation
    Given user is logged into the system and has access to the Management page
    When user creates a manual execution named "Manual_Test_01" and starts it
    Then a new row appears at the top with Name "Manual_Test_01", Status running then completed, and Params indicating manual trigger

  @HPI-CE-052
  Scenario: Verify manual execution logs
    Given user is logged into the system and has access to the Management page and "Manual_Test_01" execution has completed
    When user opens "Manual_Test_01" and selects a dataset in the Configuration tree
    Then Logs panel shows dataset-specific entries with timestamps and statuses (INFO/WARNING/ERROR) with detailed logs

  @HPI-CE-053
  Scenario: Create a new execution with valid name
    Given user is logged into the system and has access to the Management page
    When user creates a new execution named "ValidRun_2025" and starts it
    Then execution starts, appears in grid, and logs show progression through data import, processing, transformation, calculation, and output with status updates

  @HPI-CE-054
  Scenario: Cancel new execution creation
    Given user is logged into the system and has access to the Management page
    When user opens Create Execution dialog and cancels or closes it
    Then no new execution is created and the execution list remains unchanged

  @HPI-CE-055
  Scenario: Verify full execution pipeline
    Given user is logged into the system and has access to the Management page
    When user starts a new execution named "Pipeline_Test" and opens Logs panel
    Then logs display step-by-step messages including starting import, processing, transformation, calculations, output generation, and completion

  @HPI-CE-056
  Scenario: Load execution details
    Given user is logged into the system and has access to the Management page
    When user clicks any execution row in the top grid
    Then lower section populates with configuration tree on the left and logs panel on the right

  @HPI-CE-057
  Scenario: Navigate configuration tree
    Given user is logged into the system and has access to the Management page
    When user expands the configuration tree by clicking arrow icons
    Then tree expands to reveal nested datasets with logical structure matching the execution data sources

  @HPI-CE-058
  Scenario: Select dataset in tree
    Given user is logged into the system and has access to the Management page
    When user selects a dataset in the configuration tree
    Then Logs panel updates to show only log entries for that dataset

  @HPI-CE-059
  Scenario: Verify log columns
    Given user is logged into the system and has access to the Management page
    When user selects a dataset with logs and reviews column headers
    Then Logs panel columns display Data Source, Status, and Errors with error entries highlighted distinctly

  @HPI-CE-060
  Scenario: Verify log level differentiation
    Given user is logged into the system and has access to the Management page
    When user views logs with mixed levels
    Then INFO shows neutral icon, WARNING shows yellow icon, and ERROR shows red icon with possible text/background differences

  @HPI-CE-061
  Scenario: Switch active execution
    Given user is logged into the system and has access to the Management page and has an open report dashboard
    When user switches active execution to a different one and refreshes the report dashboard
    Then report data updates to reflect the newly active execution and previous execution becomes inactive

  @HPI-CE-062
  Scenario: Prevent activating failed execution
    Given user is logged into the system and has access to the Management page
    When user attempts to activate an execution with Status failed
    Then radio button is disabled or a warning appears preventing activation

  @HPI-CE-063
  Scenario: Delete old execution
    Given user is logged into the system and has access to the Management page
    When user deletes a non-active execution and confirms
    Then execution is removed from UI

  @HPI-CE-064
  Scenario: Prevent deleting an active execution
    Given user is logged into the system and has access to the Management page
    When user attempts to delete the active execution
    Then delete icon is disabled or a warning dialog appears preventing deletion

  @HPI-CE-065
  Scenario: Verify reports after deleting
    Given user is logged into the system and has access to the Management page and has deleted a non-active execution previously used by reports
    When user opens a report that previously used that execution
    Then report loads without error using the currently active execution with no references to the deleted execution
