# Natura UI

<i>A system inspired by the raw nature of the moutain side</i>

Built on plugins for [tailwindcss](https://tailwindcss.com/) Natura design expression delivers powerful visuals with the ability to easily change and configure as you'd like.

## Installation

1. First of all, you need to install TailwindCSS using their Installation guide
2. Install the package using npm or yarn:

```sh
   yarn add --dev @bjodol/natura
```

3. Add the the system using the defined preset in your `tailwind.config.js`.

```js
// tailwind.config.js
{
  presets: [require("@bjodol/natura/tailwind.config.js")];
}
```

Or add the features you want to use using the plugins:

```js
// tailwind.config.js
{
  plugins: [
    require("@bjodol/natura/plugins/btn"),
    require("@bjodol/natura/plugins/link"),
    require("@bjodol/natura/plugins/interactive"),
    require("@bjodol/natura/plugins/typography"),
    require("@bjodol/natura/plugins/controls"),
    require("@bjodol/natura/plugins/layouts"),
    require("@bjodol/natura/plugins/shapes"),
    require("@bjodol/natura/plugins/color-schemes"),
  ];
}
```

## Contribution

Just submit a PR and it will be considered!
