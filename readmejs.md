# LaunchDarkly Feedback Form - JavaScript Implementation

## Overview
This project adds JavaScript functionality to the LaunchDarkly employee feedback form. It performs real-time validation, error handling, and basic calculations.

## Features Implemented:
- Form validation:
  - Checks if the name field is empty.
  - Ensures the email contains "@"
  - Ensures the satisfaction choice is selected.
- Calculates:
  - **Total Score**: Sum of ratings for 3 features.
  - **Average Score**: Total Score divided by 3.
- Uses `console.log()` for debugging and troubleshooting.
- Displays error messages in the console and alerts.

## Challenges Faced:
1. **Validating Empty Fields**:
   - Issue: The form was submitting even if fields were empty.
   - Solution: Used `event.preventDefault()` to stop submission until validation passes.

2. **Handling Radio Button Selection**:
   - Issue: The "No" radio button label was not fully visible.
   - Solution: Adjusted the HTML structure for better visibility.

3. **Debugging Form Submission Errors**:
   - Issue: The function was executing even when validation failed.
   - Solution: Added `return` statements inside validation blocks to stop execution.

## How to Run:
1. Open `feedback_form.html` in a browser.
2. Fill out the form.
3. Check for errors in the console if validation fails.
4. View logs in the browser console using **F12 → Console**.

## Technologies Used:
- **HTML** for structure.
- **CSS** for styling.
- **JavaScript** for validation, interactivity, and debugging.

