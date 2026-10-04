# Student Portfolio

A responsive, dependency-free student portfolio with a mock student name and bio, three sliding project galleries, and project detail dialogs.

## Preview
Open index.html in your browser. No installation or build is required.

## Customize
- Change the name, bio, skills, and footer in index.html.
- Edit the categories array in script.js to add or remove projects. Gallery navigation automatically adjusts to the number of projects.
- Change colors and layout in styles.css.
- G-TECH, Remnants of Reflection, and Conquer the Islands use supplied screenshots and project descriptions. The Graphic Designs gallery features four supplied Photoshop posters. Voxel Design has its own category. The introduction features Jhory A Ducog, the supplied professional bio, and the provided workspace photo. Header and footer logos use JD.
- To use screenshots, add screenshot paths as the seventh field of a project entry in script.js. Put image files in assets/. All supplied screenshots are included in this folder.

## Deploy on Vercel
1. Extract this folder and upload its contents to a GitHub repository.
2. In your Vercel dashboard, choose Add New → Project and import that repository.
3. Choose the Other framework preset. Leave the build command unset and use the repository root as the output directory (usually shown as a dot).
4. Select Deploy. Vercel will provide your live website URL.

If you already use the Vercel CLI, run `vercel` inside this folder, sign in if prompted, and follow the setup prompts. Use `vercel --prod` to publish the production version.

This download is prepared for Vercel; it has not been deployed to a Vercel account.

## Update an existing GitHub deployment
Upload the updated index.html, styles.css, script.js, and assets/ folder into the same repository. Keep assets/ beside index.html. Commit the changes to trigger your connected Vercel deployment.
