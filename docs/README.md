# 📦 express-ts-react

A minimal boilerplate for an Express app /w React + Typescript

Ideal for single page Webapps without need for complex functionalities.

Check out [express-ts](https://github.com/hund-ernesto/express-ts) for an Express without React solution.

## Getting Started

### Setup

#### Using Github template

You can easily clone this starter as a new repository in your Github account by using the green button on top right of the [Github Repo](https://github.com/hund-studio/express-ts-react)

![use-template-button](./assets/use-template-button.png)

#### Manually cloning this repository

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

4. If needed, and strongly recommended, `init` a new repository

```bash
git init
git remote add origini <remotegiturl>
git add .
git commit -m "initial commit"
git push --force origin master
```

### Develop

This app uses different webpack configurations for `client` and `server` compilation to make it most compatible with any kind of package (such as Prisma and others which may require additional native bindings). In order to start development you will need to start two different tasks **in 2 different terminal windows**.

To listen for file changes first start both `client` and `server` watch tasks by running:

```bash
npm run watch
```

**Then** you will need to serve webpack watched code (using `nodemon`) by running **in a different terminal window**:

```bash
npm run serve
```

#### Notes

When using `watch` commmand will be triggered a `concurrently` process which will run two subcommands and merge their log: `npm run watch:client` and `npm run watch:server`. You can run those commands separately **in two separate termnial windows** to have separate `client` and `server` logs.

If serve command is not working you are probably triggering it before webpack ends the initial compilation. **Wait few seconds** and trigger it again.

### Deploy

To deploy your app you must `build` it for production by running:

```bash
npm run build
```

The `build` task will generate a `./bundle/server` folder inside your `root` directory.
Upload the `server` folder on you production machine and, using SSH or watherver you prefer, install all required `node_modules` by running:

```bash
npm install
```

Finally run you application using `pm2` or `node` command (try avoid `nodemon` and `npm run serve` inside production environments).

## Ui

If you don't know where to start in order to setup/organize your project UI you can take inspiration from [our starter](https://github.com/hund-studio/ui).

To import UI components with ease, we suggest you to update both your `./tsconfig.json` and `./frontend/tsconfig.json` by updating your `paths` value as follows:

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
