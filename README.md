# Mid-space Website Template

Welcome to the **Mid-space Website Template**! This project provides a responsive and customizable website structure suitable for research projects, portfolios, or any content-focused websites.

## Features

- **Responsive Design:** Accessible on desktops, tablets, and mobile devices.
- **Visualizations:** Easily showcase images with descriptions.
- **Flexible Structure:** Multiple sections including header, hero, summary, visualizations, contact, and footer.
- **Customization:** Simple to modify with HTML, CSS, and JavaScript.
- **Accessibility:** Semantic HTML and responsive design ensure accessibility for all users.

## Installation

To use this template locally:

1. **Clone the Repository**
    ```bash
    git clone https://github.com/wedesignone/mid-website-template.git
    ```

2. **Navigate to the Project Directory**
    ```bash
    cd mid-website-template
    ```

3. **Open the Website**
    - Open `index.html` in your preferred web browser.

## Usage

- **Homepage (`index.html`):** Overview of your project with navigation links.
- **Paper Page (`paper.html`):** Detailed information about your research paper or project.
- **Template Page (`template.html`):** A general-purpose template for additional pages.

### Customizing Content

1. **Update Text Content:**
   - Replace placeholder texts (`<!-- Placeholder -->`) with your own content in HTML files.

2. **Replace Images:**
   - Add your own images to the `assets/images/` directory.
   - Update the `src` attributes in HTML to point to your images.

3. **Modify Styles:**
   - Edit `assets/css/styles.css` to customize the appearance as per your preferences.

4. **Adjust Scripts:**
   - Enhance or modify `assets/js/scripts.js` to add interactivity.

### Adding New Pages

To add a new page:

1. **Duplicate an Existing HTML File:**
   - For example, duplicate `paper.html` and rename it to `new-page.html`.

2. **Update the Content:**
   - Modify the content within the new HTML file as needed.

3. **Update Navigation:**
   - Add a new `<li>` in the navigation menu within the `<nav>` section to link to your new page.

    ```html
    <li class="new-page-link"><a href="new-page.html">New Page</a></li>
    ```

4. **Customize as Needed:**
   - Ensure that all sections are appropriately filled with relevant content.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For more information, please contact [Rashid Mushkanil](mailto:rashidmushkani@gmail.com).

## Acknowledgements

- [Roboto Font](https://fonts.google.com/specimen/Roboto) by Google Fonts
- [Font Awesome](https://fontawesome.com/) for Icons
- [AOS](https://michalsnik.github.io/aos/) for Scroll Animations

---
