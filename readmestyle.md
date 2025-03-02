
# Project Overview
This project enhances the LaunchDarkly employee portal by introducing a user feedback form. The form allows employees to provide feedback on recent updates, ensuring continuous improvement of the platform.

# Styling Approach
To create a visually appealing and futuristic design, the following CSS techniques were applied:

### 1. Typography & Font Styling
- A futuristic font style was selected: *Orbitron* (imported via Google Fonts).
- Headings (`h1`, `h2`) were styled with larger font sizes and bold weights.
- Paragraphs (`p`) and labels were adjusted for readability with appropriate `line-height` and `letter-spacing`.

# 2.Color Scheme & Background
- A dark-themed background (`#1a1a2e`) with a gradient effect was applied to create a modern look.
- Text elements use contrasting neon colors (`#e5b80b` for headings, `#0ff0fc` for interactive elements) for a futuristic, cyberpunk-style appearance.

# 3. Form Styling
- Input fields and the textarea were given a glassmorphic effect using `backdrop-filter: blur(10px)` and semi-transparent backgrounds.
- Borders were rounded for a sleek, modern feel.
- Hover and focus states were added for better user interaction.

# 4.Button Enhancements
- The submit button was designed with a glowing hover effect using `box-shadow` and `transition` properties.
- Button text was made bolder for better visibility.

# 5. Responsive Design
- A `max-width` constraint was added to the form to ensure it adapts well to different screen sizes.
- Media queries were used to adjust font sizes and input field widths for smaller screens.

## Challenges & Solutions
# 1. Maintaining Readability in Dark Mode
**Issue:** Initially, some text appeared too dim against the background.
**Solution:** Increased contrast by adjusting text color brightness and applying a subtle text shadow.

# **2. Balancing Aesthetics with Accessibility**
**Issue:** The futuristic fonts looked stylish but were difficult to read in smaller sizes.
**Solution:** Used a combination of a modern sans-serif font (fallback) and ensured proper line spacing.

# **3. Ensuring Cross-Browser Compatibility**
**Issue:** Some CSS properties (e.g., `backdrop-filter`) were not fully supported in older browsers.
**Solution:** Implemented fallbacks using `background-color` and `opacity` for graceful degradation.


## Conclusion
This project applies CSS best practices to create a sleek, responsive, and engaging feedback form that aligns with LaunchDarkly’s modern design principles.

