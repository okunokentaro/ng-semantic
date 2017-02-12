import { checkDefined } from './check-defined'

describe('checkDefined()', () => {
  describe('should be true if included in predefined', () => {
    it('def only', () => {
      const predefined = [
        {def: 'a'}
      ]
      expect(checkDefined(predefined, 'a')).toBeTruthy()
    })

    it('def and value', () => {
      const predefined = [
        {def: 'a', value: 'a b'}
      ]
      expect(checkDefined(predefined, 'a')).toBeTruthy()
    })
  })

  describe('should be false if not included in predefined', () => {
    it('def only', () => {
      const predefined = [
        {def: 'a'}
      ]
      expect(checkDefined(predefined, 'b')).toBeFalsy()
    })

    it('def and value', () => {
      const predefined = [
        {def: 'a', value: 'a b'}
      ]
      expect(checkDefined(predefined, 'b')).toBeFalsy()
    })
  })
})
