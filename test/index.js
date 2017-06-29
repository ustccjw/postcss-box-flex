import postcss from 'postcss'
import plugin from '../src'

describe('box-flex', () => {
  test('box-flex', async () => {
    const input = 'div { display: -webkit-box }'
    const res = await postcss([plugin()]).process(input)
    expect(res.css).toBe('div > *, div::before, div::after { -webkit-box-flex: 0; -webkit-flex: none; flex: none }\ndiv { display: -webkit-box }')
  })
})
