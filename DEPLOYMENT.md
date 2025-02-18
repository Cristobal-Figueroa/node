# Deployment Guide for cPanel

## Prerequisites
1. cPanel access to goworq.codeclandresell.com
2. Node.js support enabled in cPanel
3. MySQL database already set up

## Deployment Steps

### 1. Prepare the Files
1. Compress the following files/folders into a ZIP file:
   - backend/
   - frontend/dist/
   - package.json
   - .env

### 2. Upload to cPanel
1. Log in to cPanel
2. Navigate to File Manager
3. Go to the public_html directory
4. Create a new directory for your application (e.g., 'crud-app')
5. Upload the ZIP file to this directory
6. Extract the ZIP file

### 3. Set Up Node.js App
1. In cPanel, go to "Setup Node.js App"
2. Click "Create Application"
3. Configure the application:
   - Node.js version: 16.x or later
   - Application mode: Production
   - Application root: /crud-app
   - Application URL: https://goworq.codeclandresell.com
   - Application startup file: backend/server.js
   - Environment variables: (copy from .env file)

### 4. Start the Application
1. Click "Run NPM Install" to install dependencies
2. Start the application
3. The application should now be accessible at https://goworq.codeclandresell.com

### 5. Verify Installation
1. Visit the application URL
2. Test creating, reading, updating, and deleting items
3. Check the browser console for any errors

## Troubleshooting
- If you see CORS errors, verify the origin in server.js matches your domain
- If database connection fails, verify the credentials in .env
- Check the error logs in cPanel for any issues
