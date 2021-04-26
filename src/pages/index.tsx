import React from 'react'

import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { cssTransition, ToastContainer } from 'react-toastify'

import Board from '../page/Board'
import Home from '../page/Home'
import { store } from '../store'

const slideUp = cssTransition({
  enter: 'animate__animated animate__slideInUp',
  exit: 'animate__animated animate__slideOutDown',
})

function App() {
  const router = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/board" exact component={Board} />
    </Switch>
  )
  return (
    <>
      {router}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        transition={slideUp}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

function Index() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

export default Index
