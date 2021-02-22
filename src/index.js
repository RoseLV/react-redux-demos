import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import Counter from './Counter.jsx'
import reducer from './reducer.js'
// 1. 引入Provider
import { Provider } from "react-redux";

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__())
/**
 * sandbox 地址 没有用react-redux，只用了redux
 * https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter?file=/public/index.html
 */
export default function App() {
  const rootEl = document.getElementById('root')

  const render = () => ReactDOM.render(
    // 1. 添加Provider包裹react component
    <Provider store={store}>
      <Counter />
    </Provider>,
    rootEl
  )
  render()
  // store.subscribe(render)
}
App()