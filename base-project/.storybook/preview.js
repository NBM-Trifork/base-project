import docJson from "../documentation.json";
import { setCompodocJson } from "@storybook/addon-docs/angular";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  backgrounds: {
    values: [
      {name: 'blue-faded', value: '#D5E3EB'},
      {name: 'orange-faded', value: '#F2D2BB'},
      {name: 'green-faded', value: '#CEDED6'}
    ]
  }
}