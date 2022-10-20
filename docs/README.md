# 📦 express-ts-react

A minimal boilerplate for an Express app /w React + Typescript

Ideal for single page Webapps without need for complex functionalities.

Check out [express-ts](https://github.com/hund-ernesto/express-ts) for an Express without React solution.

## Getting Started

### Setup

1. Clone this repository
2. Delete existing `.git` folder
3. Install npm modules with `npm install`

```bash
git clone git@github.com:hund-ernesto/express-ts-react.git
mv express-ts-react my-project
cd my-project
sudo rm -r .git
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

### Development

As this app uses two different webpack configurations in order to make it most compatible with any kind of package (such as Prisma and other which may require additional native bindings) you will need to start two different tasks in 2 different terminal windows.

In order to listen for file changes you need to first start both client and server code watch with command

```bash
npm run watch
```

Then you will need to serve real-time compiled code (using nodemon) by running IN A DIFFERENT TERMINAL WINDOW

```bash
npm run serve
```

#### Notes

When using `watch` commmand will be triggered a concurrently process which will basically run two subcommands and merge their output: `npm run watch:client` and `npm run watch:server`. You can run those commands separately IN DIFFERENT TERMINAL WINDOWS to achieve better Webpack debug.

### Deploy

To deploy your app you must build it for production by running

```bash
npm run build
```

this will generate a `./bundle/server` folder inside your `root` directory.
Upload the `server` folder on you production machine and using SSH or watherver install all required `node_modules`

```bash
npm install
```

finally run you application using `pm2` or `node` command (try to avoid `nodemon` and `npm run serve` for production environment).

## Ui

If you don't know where to start in order to setup your project UI you can take inspiration from [our starter](https://github.com/hund-studio/ui).

In order to import UI component with ease we suggests you to update both your `./tsconfig.json` and `./frontend/tsconfig.json` by updating your `paths` option as follows

```json
...
"paths": {
   ...
   "@ui/*": ["ui/*"]
}
...
```

## Database

If your app needs a database consider using [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres) with a sqLite solution and setup it inside the `root` of your project.

```tree
..express-ts-react::
.
|--prisma
   `--schema.prisma
|--public
|--views
`--index.ts
```
