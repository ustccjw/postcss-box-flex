import postcss from 'postcss'

const plugin = postcss.plugin('postcss-box-flex', () => root => {
  root.walkDecls(/^display$/, decl => {
    const { parent, value } = decl
    const { selector } = parent
    if (/box$/.test(value) && !/(:before|:after)$/.test(selector)) {
      const rule = postcss.rule({ selector: `${selector} > *, ${selector}::before, ${selector}::after` })
      rule.append(postcss.decl({ prop: '-webkit-box-flex', value: '0' }))
      rule.append(postcss.decl({ prop: '-webkit-flex', value: 'none' }))
      rule.append(postcss.decl({ prop: 'flex', value: 'none' }))
      root.prepend(rule)
    }
  })
})

export default plugin
