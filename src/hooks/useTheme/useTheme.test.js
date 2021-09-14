import { renderHook, act } from '@testing-library/react-hooks';
import { useTheme } from './index';

describe('useTheme()', () => {
  const { result } = renderHook(() => useTheme());

  describe('when user types', () => {
    test('change the value', () => {
      const event = {
        target: {
          value: 'react',
        },
      };

      act(() => {
        result.current.handleChangeInput(event);
      });

      expect(result.current.valueSearch).toEqual('');
    });
  });

  describe('when user clicks on dark mode', () => {
    test('change the value to checked: true', () => {
      const event = {
        target: {
          checked: true,
        },
      };
      act(() => result.current.toggleTheme());
      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.isChecked).toEqual(false);
    });
  });
});
