import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import mytheme from "./myTheme";

addons.setConfig({
  theme: mytheme
});