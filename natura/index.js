const config = require("./tailwind.config");
const getUtilties = require("./src/utilities");

const y = getUtilties(() => config.theme.colors);
console.log(JSON.stringify(y.colorScheme, null, 2));
