import postcss from 'postcss'

const plugin = postcss.plugin('postcss-box-flex', () => css => {
  css.walkDecls(/box-flex$/, decl => {
    if (+decl.value === 1) {
      const widthDecl = postcss.decl({ prop: 'width', value: '1px' })
      decl.parent.prepend(widthDecl)
    }
  })
  css.walkDecls(/^display$/, decl => {
    if (/box$/.test(decl.value)) {
      const rule = postcss.rule({ selector: `${decl.parent.selector} > *` })
      rule.append(postcss.decl({ prop: 'display', value: 'block' }))
      css.append(rule)
    }
  })
})

export default plugin
