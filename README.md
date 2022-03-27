## env-loader-json

This Docusaurus plugin loads configuration from a JSON file and sets the given values in the `customFields` section of the Docusaurus siteConfig. It is designed to run both in development mode (ie `docusaurus start`) and in production mode.

The current environment is read from the `NODE_ENV` environment variable, which is `development` when running the dev server and `production` when running a build.


### Installation

```
npm i --save-dev @jsplumb/docusaurus-plugin-env-loader-json
```

### Setup

Add the plugin to the `plugins` section of `docusaurus.config.js`:

```
plugins:[
    ...,
    "@jsplumb/docusaurus-plugin-env-loader-json",
    ...
],
```

By default, the plugin will look for a file called `env.json` in the Docusaurus project directory. You can change the name of the file the plugin looks for via the `sourceFile` option:

```
plugins:[
    ...,
    [
        "@jsplumb/docusaurus-plugin-env-loader-json",
        {
            "sourceFile":"aFolder/myEnv.json"
        }
    ]    
    ...
],
```

Note that the path to the file is resolved relative to the Docusaurus project directory - a leading slash is not required.

### Configuration

Inside the environment config file, you should declare a section for each environment:

```
{
    "production":{
        "SERVER_URL":"https://some.server.com/anEndpoint"
    },
    "development":{
        "SERVER_URL":"http://localhost:4200/anEndpoint"
    }
}
```

### Accessing values

You can access these values via the `customFields` section of the Docusaurus site config:

```
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function MyApp {

    const {siteConfig} = useDocusaurusContext();
    const serverUrl = siteConfig.customFields.SERVER_URL

    ...

}
```



