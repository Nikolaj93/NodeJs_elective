# Mandatory 2

 Add the following files in config folder
### mailCredentials.js
```javascript
module.exports = {
    development: {
        passwordMail: 'password_for_email',
        email: 'email_address@gmail.com'
      }
};
```

### mysqlCredentials.js
```javascript
module.exports = {
    development: {
        client: 'mysql',
        connection: {
          database: 'database_name',
          user: 'username', 
          password: 'password'
        }
      }
};
```
