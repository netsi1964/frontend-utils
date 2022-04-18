// https://github.com/WebDevSimplified/js-util-functions/blob/main/domUtils/script.js
export function addGlobalEventListener (
  type,
  selector,
  callback,
  options,
  parent = document
) {
  parent.addEventListener(
    type,
    e => {
      if (e.target.matches(selector)) callback(e)
    },
    options
  )
}

export function qs (selector, parent = document) {
  return parent.querySelector(selector)
}

export function qsa (selector, parent = document) {
  return [...parent.querySelectorAll(selector)]
}

export function createElement (type, options = {}, NS = '') {
  const element = NS
    ? document.createElementNS(NS, type)
    : document.createElement(type)
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      element.classList.add(value)
      return
    }

    if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue
      })
      return
    }

    if (key === 'text') {
      element.textContent = value
      return
    }

    element.setAttribute(key, value)
  })
  return element
}

export default {
  addGlobalEventListener,
  createElement,
  qs,
  qsa
}
