# express-ts-react

A minimal boilerplate for an Express app /w React + Typescript

Ideal for single page Webapps without need for complex functionalities.

Check out [express-ts](https://github.com/hund-ernesto/express-ts) for an Express without React solution.

## How to use

1. Clone this repository
2. Delete existing `.git` folder
3. Install npm modules with `npm install`

```bash
git clone git@github.com:hund-ernesto/express-ts-react.git
cd express-ts-react
rm -r .git
npm install
```

4. If needed init as new repository

```bash
git init
git remote add origini <giturl>
git add .
git commit -m "initial commit"
git push --force origin master
```

## Database

If your app needs a database consider using [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres) with a sqLite solution.
