# hacktivpress
Part of Hacktiv8 Live Coding

### Decription
A simple blog application with user authentication with Express JS and MongoDB
### Set up
### How to use
### API Endpoint
|Route|Method|Usage|Result|
|:---:|:---:|:---|:---|
|/api/users/signup | POST | Submit form with 'name', 'username', 'password' and 'email' attributes | Return user data |
|/api/users/signin |  POST | Submit form with identity and password attributes, with identity is email or username | Return token with '_id' attributes|
|/api/articles/ | POST | Submit token in headers and 'content' in body | Submitted article |
