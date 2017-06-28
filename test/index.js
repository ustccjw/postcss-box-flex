import postcss from 'postcss'
import plugin from '../src'

describe('box-flex', () => {
  test('box-flex: 0', async () => {
    const input = 'div { display: -webkit-box } span { -webkit-box-flex: 0; }'
    const res = await postcss([plugin()]).process(input)
    expect(res.css).toBe('div > * { display: block } div { display: -webkit-box } span { -webkit-box-flex: 0; }')
  })

  test('box-flex: 1', async () => {
    const input = 'div { display: -webkit-box } span { -webkit-box-flex: 1; }'
    const res = await postcss([plugin()]).process(input)
    expect(res.css).toBe('div > * { display: block } div { display: -webkit-box } span { width: 1px; -webkit-box-flex: 1; }')
  })
})
