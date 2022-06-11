import { chakra, useStyleConfig, BoxProps } from '@chakra-ui/react';

export type ProseProps = BoxProps;

export function Prose(props: ProseProps) {
  const { children, as = 'article', ...rest } = props;
  const styles = useStyleConfig('Prose', { ...props });

  return (
    <chakra.div as={as} __css={{ ...styles }} {...rest}>
      {children}
    </chakra.div>
  );
}
