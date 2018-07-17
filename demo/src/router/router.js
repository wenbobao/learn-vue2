import App from '../App'
// import home from '../page/home'

// export default [{
//   path: '/',
//   component: App,
//   children: [{
//     path: '',
//     component: home
//   }]
// }]

export default [{
  path: '/',
  component: App,
  children: [{
      path: '',
      component: r => require.ensure([], () => r(require('../page/home')), 'home')
    },
    {
      path: '/item',
      component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
      path: '/score',
      component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }
  ]
}]
