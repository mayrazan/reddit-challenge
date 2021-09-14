import styleProps from './receiveStyleProps';

describe('styleProps()', () => {
  describe('when receives an simple argument', () => {
    test('and it is a string', () => {
      const result = styleProps('textAlign');
      // <Text textAlign="center" />
      const componentProps = { textAlign: 'center' }; // string
      const styleResult = result(componentProps);
      expect(styleResult).toEqual({ textAlign: 'center' });
    });
  });
});
