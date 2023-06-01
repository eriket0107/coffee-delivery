import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout/components'

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Checkout />} path="/checkout" />
      </Route>
    </Routes>
  )
}
