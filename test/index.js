import postcss from 'postcss'
import plugin from '../src'

function format(str) {
  return str.replace(/\s+/g, ' ').trim()
}

describe('box-flex', () => {
  test('box-flex', async () => {
    const input = `
      div {
        display: -webkit-box;
      }
    `
    const res = await postcss([plugin()]).process(input)
    const str = `
      div > *, div::before, div::after {
        -webkit-box-flex: 0;
        -webkit-flex: none;
        flex: none;
      }
      div {
        display: -webkit-box;
      }
    `
    expect(format(res.css)).toBe(format(str))
  })
})
