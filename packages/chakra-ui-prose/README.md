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
component and wrap your content with it:

```jsx
import { Prose } from '@nikolovlazar/chakra-ui-prose';

const MyPage = (content) => {
  return <Prose>{content}</Prose>;
};

export default MyPage;
```
