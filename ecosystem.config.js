module.exports = {
    apps: [
        {
            name: 'formApi',
            script: './js/formApi.js',
            watch: true,
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};

