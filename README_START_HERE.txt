AUSSS CONNECTED WEBSITE + ADMIN PORTAL

FILES IN THIS PACKAGE
- index.html: MAIN HOMEPAGE. GitHub Pages opens this by default. Includes graduating-class slideshow.
- home.html: alternate Home page file; navigation links point to index.html.
- about.html, academics.html, news.html, achievements.html, downloads.html, contact.html: separate pages linked by the same menu.
- style.css, site.js: shared appearance and navigation.
- gallery.js: reads the public slideshow and homepage announcements from Supabase.
- news.js: reads announcements on news.html.
- admin.html: password-protected dashboard to manage announcements and Grade 12 photos.
- AUSSS_gallery_setup.sql: adds the gallery database and photo-storage permissions.

IMPORTANT SETUP STEPS (do these in order)
1. Back up your existing repository files before replacing anything.
2. Upload the files in this folder to the ROOT of your existing GitHub repository (not inside another folder). Keep the filenames exactly as shown. index.html must remain in the root.
3. In Supabase SQL Editor, first run your existing AUSSS_admin_portal_policies.sql if school_admins and is_school_admin() are not already configured. Then run AUSSS_gallery_setup.sql. Do not rerun schema SQL blindly if your database differs.
4. Get the project's SUPABASE PUBLISHABLE KEY from Supabase Project Settings > API Keys. Replace the placeholder in BOTH admin.html and gallery.js. Also replace the placeholder in news.js if announcements should appear on news.html. Never use service_role or a secret key in browser files.
5. In Supabase Authentication > Users, create/confirm an administrator login. Add its user UUID to public.school_admins with role director or deputy_director.
6. In Supabase Authentication > URL Configuration, add https://abdi-gebisa.github.io/Au-school and https://abdi-gebisa.github.io to the allowed redirect URLs if password reset is used.
7. Wait for GitHub Actions to show a green check. Then visit https://abdi-gebisa.github.io/Au-school/ and https://abdi-gebisa.github.io/Au-school/admin.html.
8. In admin portal, sign in and tap “Manage Grade 12 Photos”. Upload each year’s photo, set the entrance examination year, add a caption, and publish. Admin can edit, hide, or delete each entry without changing code.

SLIDESHOW BEHAVIOUR
- Published entries appear on the homepage automatically.
- Each entry displays its entrance examination year, title, and caption.
- Slides change every 6 seconds; arrows and dots allow manual navigation.
- The portal supports multiple entries per year; add one entry for each class/photo you want to show. For the four most recent years, upload one class photo per year.

PRIVACY AND PERMISSION
- Upload only school-approved photographs. Confirm consent/authorization for identifiable students, especially minors, before publishing.
- Public bucket allows visitors to view published photos; only authorized school admins can upload/update/delete through the portal.
- This is a static GitHub Pages site with Supabase backend; never publish secret/service-role credentials.

The page text is a starter and should be checked by the school administration before being presented as official.
