const env=process.env.NODE_ENV || 'development'

const config={
    development:{
        port: process.env.PORT || 9999,
        dbUrl:'mongodb://localhost:27017/dbJobs',
        cookie:'x-auth-token',
        secret:'shhhh'
    },
    production:{}
};
module.exports=config[env]