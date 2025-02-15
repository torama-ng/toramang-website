module.exports = {
    apps: [
        {
            name: "torama-app", // Name of your app
            script: "npm", // Use npm to run the app
            args: "start", // Run the `npm start` command
            cwd: "/var/www/html/torama-app", // Working directory
            watch: false, // Disable file watching
            env: {
                NODE_ENV: "production", // Set environment to production
            },
        },
    ],
};