### Description
- [x] CRUD manipulations over the authors and their books
https://en.wikipedia.org/wiki/Create,_read,_update_and_delete

**Required endpoints**
 - [x] Get authors
 - [x] Get one author
 - [x] Get books by one author
 - [x] Get one book
 - [x] Add author
 - [x] Add book
 - [x] Update author
 - [x] Update book
 - [x] Remove author
 - [x] Remove book
 - [x] Enable mongodb
 - [ ] Connect all handlers to mongo
 - [ ] Handle exceptions properly, with logging
 - [ ] Add swagger
 - [ ] Add jest tests
 
### Database structure

#### Author's fields
- [x] first name
- [x] last name
- [x] birthday
- [x] created at
- [x] updated at

#### Book's fields
- [x] title
- [x] author
- [x] iban
- [x] published at
- [x] created at
- [x] updated at

### Task performance levels
- [ ] CRUD logic
- [ ] Linter + code formating
- [ ] Validation
- [ ] Tests

### Required packages:
```
+nestjs: https://docs.nestjs.com/first-steps
+node
+npm
+typescript
ts-node
+mongodb
+typeorm
+dotenv
+class-validator
+class-transformer
```
### Additional packages:
```
@nestjs/swagger
tsconfig-paths
tslint
tslint-config-prettier
jest
prettier
nodemon
```