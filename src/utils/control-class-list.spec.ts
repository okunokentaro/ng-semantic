import { toggleClass, switchClass } from './control-class-list'

describe('toggleClass()', () => {
  let elem
  beforeEach(() => {
    elem = document.createElement('span')
    elem.classList.add('a')
    expect(elem.className).toBe('a')
  })

  it('should be able to toggle', () => {
    toggleClass(elem.classList, 'b', true)
    expect(elem.className).toBe('a b')

    toggleClass(elem.classList, 'b', false)
    expect(elem.className).toBe('a')
  })

  it('should work even if it does not exist in classList', () => {
    toggleClass(elem.classList, 'c', false)
    expect(elem.className).toBe('a')
  })
})

describe('switchClass()', () => {
  describe('unspecified does not exist', () => {
    const predefined = [
      {def: 'b'},
      {def: 'c'},
      {def: 'd', value: 'd1 d2'},
      {def: 'e', value: 'e'},
    ]

    let elem
    beforeEach(() => {
      elem = document.createElement('span')
      elem.classList.add('a')
      expect(elem.className).toBe('a')
    })

    it('should be able to switch', () => {
      switchClass(elem.classList, predefined, 'b')
      expect(elem.className).toBe('a b')

      switchClass(elem.classList, predefined, 'c')
      expect(elem.className).toBe('a c')
    })

    it('should not change if specified is not exist', () => {
      switchClass(elem.classList, predefined, 'b')
      expect(elem.className).toBe('a b')

      switchClass(elem.classList, predefined, 'f')
      expect(elem.className).toBe('a b')
    })

    it('should not change if unspecified', () => {
      switchClass(elem.classList, predefined, 'b')
      expect(elem.className).toBe('a b')

      switchClass(elem.classList, predefined, '')
      expect(elem.className).toBe('a b')

    })

    it('should set and remove correctly all specified value', () => {
      switchClass(elem.classList, predefined, 'd')
      expect(elem.className).toBe('a d1 d2')

      switchClass(elem.classList, predefined, 'c')
      expect(elem.className).toBe('a c')
    })

    it('should remove correctly if a lot of illegalities were specified', () => {
      elem.classList.add('a', 'b', 'c', 'd1', 'd2')
      expect(elem.className).toBe('a b c d1 d2')

      switchClass(elem.classList, predefined, 'e')
      expect(elem.className).toBe('a e')
    })
  })

  describe('unspecified exists', () => {
    const predefined = [
      {def: ''},
      {def: 'b'},
    ]

    let elem
    beforeEach(() => {
      elem = document.createElement('span')
      elem.classList.add('a')
      expect(elem.className).toBe('a')
    })

    it('should be able to switch if unspecified exists', () => {
      switchClass(elem.classList, predefined, 'b')
      expect(elem.className).toBe('a b')

      switchClass(elem.classList, predefined, '')
      expect(elem.className).toBe('a')
    })
  })
})

