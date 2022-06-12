# Chakra UI Prose

Prose is a Chakra UI component that adds a ready-made typography styles when
rendering remote HTML.

## Installation

```sh
yarn add @nikolovlazar/chakra-ui-prose

# or

npm i @nikolovlazar/chakra-ui-prose
```

## Usage

To use the `Prose` component in your app, first you need to use the `withProse`
theme extension:

```typescript
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const theme = extendTheme({}, withProse());

export default theme;
```

> I know you've already did it, but I want to remind you to pass your theme in
> your ChakraProvider.

Then, to render the remote HTML content, you need to import the `Prose`
component and add a `div` element with `dangerouslySetInnerHTML` inside of it:

```jsx
import { Prose } from '@nikolovlazar/chakra-ui-prose';

const MyPage = (content) => {
  return <Prose dangerouslySetInnerHTML={{ _html: content }} />;
};

export default MyPage;
```

### Content Sanitization

If you're rendering content that's not entered by you, it's a good idea to [sanitize](https://en.wikipedia.org/wiki/HTML_sanitization) the content before rendering it. There are numerous packages for content sanitation, but for this example we'll use the [DOMPurify](https://www.npmjs.com/package/dompurify) package. First you need to install the package itself:

```sh
yarn add dompurify

# or

npm i dompurify
```

Then, you need to use the `sanitize` method before rendering your content:

```jsx
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import DOMPurify from 'dompurify';

const MyPage = (content) => {
  return (
    <Prose
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    />
  );
};

export default MyPage;
```

This way you'll make sure that the user-submitted content will be safe and you won't be exposed to [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.

## Styling the `Prose` component

The `Prose` component receives Chakra UI's `BoxProps`, which means you can use [Style Props](https://chakra-ui.com/docs/styled-system/features/style-props) like `p`, `mx`, `maxW` etc... to apply styling to the Prose component itself.

## Overriding Style

The `withProse` theme extension has an optional argument that overrides its default style. To change the style of a certain element, supply a component style object in the theme extension, provide the `baseStyle` property and override the element, like so:

```typescript
const theme = extendTheme(
  {},
  withProse({
    baseStyle: {
      h2: {
        fontWeight: 'light',
      },
    },
  }),
);
```

> Refer to the [default theme](https://github.com/nikolovlazar/chakra-ui-prose/blob/main/packages/chakra-ui-prose/src/theme.ts) when overriding certain elements.

I've also created a [CodeSandbox](https://codesandbox.io/s/chakra-ui-prose-h2yqrj?file=/src/index.tsx) which you can use to try out the Prose component, and override its default style.

## Making it official

The Prose package is not part of the official Chakra UI package for a reason. We decided to roll it out as a separate package is to avoid bloating the core library while we figure out how much people actually need it.

If you want this package to be part of the core library, let us know in this discussion thread: https://github.com/chakra-ui/chakra-ui-docs/discussions/469.
