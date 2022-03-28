import { chakra, HTMLChakraProps, useStyleConfig } from '@chakra-ui/react';

export interface ProseProps extends HTMLChakraProps<'div'> {}

export function Prose(props: ProseProps) {
  const { children, as = 'article' } = props;
  const styles = useStyleConfig('Prose', { ...props });

  return (
    <chakra.div as={as} __css={{ ...styles }}>
      {children}
    </chakra.div>
  );
}
