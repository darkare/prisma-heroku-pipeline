# prisma-heroku-pipeline
# Readme

## Prisma
**Important!**

Remember to create a .env file at the project level.
Set the database url at the .env file
Eg:
`DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb"`


Note! For cloud hosted database, read this.
https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database


To synchronise data model for development 

`npm run prisma:migrate`

To deploy to UAT or PRod
`npm run prisma:deploy`

**[optional]**
To initialise  database run :

`npm prisma:init`