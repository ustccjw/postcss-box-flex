import postcss from 'postcss'
import plugin from '../src'

describe('box-flex', () => {
  test('box-flex', async () => {
    const input = 'div { display: -webkit-box }'
    const res = await postcss([plugin()]).process(input)
    expect(res.css).toBe('div > :not(div):not(section) { display: block; -webkit-box-flex: 0; -webkit-flex: 0; flex: none }\ndiv { display: -webkit-box }')
  })
})
