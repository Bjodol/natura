import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);
export const variantsColor = Object.keys(fullConfig.theme.colors).filter((name)=>name !== "current");

