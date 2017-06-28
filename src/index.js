import postcss from 'postcss'

const plugin = postcss.plugin('postcss-box-flex', () => css => {
  css.walkDecls(/^display$/, decl => {
    if (/box$/.test(decl.value)) {
      const rule = postcss.rule({ selector: `${decl.parent.selector} > *` })
      rule.append(postcss.decl({ prop: 'display', value: 'block' }))
      rule.append(postcss.decl({ prop: '-webkit-box-flex', value: '1' }))
      rule.append(postcss.decl({ prop: '-webkit-flex', value: '1' }))
      rule.append(postcss.decl({ prop: 'flex', value: 'auto' }))
      css.prepend(rule)
    }
  })

  css.walkDecls(/box-flex$/, decl => {
    if (+decl.value === 1) {
      let width = false
      for (const decl2 of decl.parent.nodes) { // eslint-disable-line no-restricted-syntax
        if (decl2.prop === 'width') {
          width = true
          break
        }
      }
      if (!width) {
        const widthDecl = postcss.decl({ prop: 'width', value: '1px' })
        decl.parent.prepend(widthDecl)
      }
    }
  })
})

export default plugin
