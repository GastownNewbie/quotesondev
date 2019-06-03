# Quotes on Dev

A WordPress custom theme for the Quotes on Dev project, forked from Underscores. Designed to be responsive.

## Installation

### 1. Download me (don't clone me!)

Then add me to your `wp-content/themes` directory.

### 2. Rename the `quotesondev-starter-master` directory

Make sure that the theme directory name is project appropriate! Do you need `starter` or `master` in the directory name?

### 3. Install the dev dependencies

Next you'll need to run `npm install` **inside your theme directory** to install the npm packages you'll need for Gulp, etc.

### 4. Update the proxy in `gulpfile.js`

Lastly, be sure to update your `gulpfile.js` with the appropriate URL for the Browsersync proxy (so change `localhost[:port-here]/[your-dir-name-here]` to the appropriate localhost URL).

And now would be a good time to `git init` :)

### 5. Learnings

This project involves using JQuery, WP hooks, APIs and SASS to customize a Wordpress theme.

WP is a challenging CMS as a beginner developer. Understanding the overall organizing system of files and their working impact is very important. Using php files to customize html, including wp hooks, styling with SASS files, and JQuery for events, such as on click, can be a big learning curve.

Customizing the design using SASS using WP page templates, means looking for specific class descriptors for both pages and classes in order to affect the changes you want, without creating others. 

e.g.

/* Submit a Quote Page */
.page-id-211 {
  #quote-submission-form {
    display: flex;
    flex-direction: column;
    label {
      font-size: 1rem;
      font-weight: 300;
    }
  }

Hot tip: By installing the "Show Current Template" WP pluggin, you will have a tool to know which template to target for each page.

### 6. Acknowledgments

So grateful to our understanding and skilled teachers Jim and Ben at Red Academy and our teaching assistants Jerimiah and Jenna. Without you, I would not have learned so much!