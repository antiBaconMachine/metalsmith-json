metalsmith-json
===============

Metalsmith plugin which parses json files and exposes their properties as metadata on the file object

Adding this plugin to your chain will result in any `.json` files being parsed, and their properties accumulated under a 
key (default: data) on the file object.

### Options

#### options.key
Type: `String`
Default value: `data`
Description Key the josn properties should be accumulated under