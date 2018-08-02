const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

const copyProps = (src, target) => {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce(
      (result, prop) => ({ ...result, [prop]: Object.getOwnPropertyDescriptor(src, prop) }),
      {},
    )
  Object.defineProperties(target, props)
}

global.window = window
global.document = window.document
window.HTMLCanvasElement.prototype.getContext = () => ({})
window.localStorage = (() => {
  const storage = {}
  const setItem = (key, value) => {
    storage[key] = value
  }
  const getItem = key => storage[key]
  const clear = () => {}
  return { getItem, setItem, clear }
})()
global.navigator = { userAgent: 'node.js' }
global.window.resizeTo = (width, height) => {
  global.window.innerWidth = width || global.window.innerWidth
  global.window.innerHeight = height || global.window.innerHeight
  global.window.dispatchEvent(new global.Event('resize'))
}
copyProps(window, global)
