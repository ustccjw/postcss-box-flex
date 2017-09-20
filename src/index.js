import postcss from 'postcss'

const plugin = postcss.plugin('postcss-box-flex', () => css => {
  css.walkDecls(/^display$/, decl => {
    if (/box$/.test(decl.value) && !/(:before|:after)$/.test(decl.parent.selector)) {
      const rule = postcss.rule({ selector: `${decl.parent.selector} > *, ${decl.parent.selector}::before, ${decl.parent.selector}::after` })
      rule.append(postcss.decl({ prop: '-webkit-box-flex', value: '0' }))
      rule.append(postcss.decl({ prop: '-webkit-flex', value: 'none' }))
      rule.append(postcss.decl({ prop: 'flex', value: 'none' }))
      css.prepend(rule)
    }
  })
})

export default plugin
