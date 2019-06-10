# Quotes on Dev

A WordPress custom theme for the Quotes on Dev project, forked from Underscores. Designed to be responsive.

![Screen shot of homepage.]("<?php echo get_template_directory_uri() . '/assets/images/screen-shot.png'; ?>")

### Technology Used

Javascript - jQuery
HTML5
CSS3
PHP


### Tools

Git - Github
Chrome - dev tools
Wordpress
Visual Studio - Code Editor
Gulp - task runner


### Learnings

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

### Acknowledgments

So grateful to our understanding and skilled teachers Jim and Ben at Red Academy and our teaching assistants Jerimiah and Jenna. Without you, I would not have learned so much!