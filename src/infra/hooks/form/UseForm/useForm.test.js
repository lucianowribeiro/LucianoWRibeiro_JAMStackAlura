import { renderHook, act } from '@testing-library/react-hooks';
import useForm from './index';

describe('useForm()', () => {
  describe('when user types', () => {
    test('change the value', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          nome: 'Luciano',
        },
      }));
      const initialValues = { nome: 'Luciano' };
      expect(result.current.values).toEqual(initialValues);
      const event = {
        target: {
          getAttribute: () => 'nome',
          value: 'Ribeiro',
        },
      };
      act(() => {
        result.current.handleChange(event);
      });
      expect(result.current.values).toEqual({ nome: 'Ribeiro' });
    });
  });
});
