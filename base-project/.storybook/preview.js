import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import docJson from "../documentation.json";
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import { setCompodocJson } from "@storybook/addon-docs/angular";
setCompodocJson(docJson);

// Registers and enables scss language support
SyntaxHighlighter.registerLanguage('scss', scss);

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