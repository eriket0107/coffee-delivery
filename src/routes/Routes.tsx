import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { SuccessPage } from '../pages/Success'

export const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Checkout />} path="/checkout" />
        <Route element={<SuccessPage />} path="/success" />
      </Route>
    </Routes>
  )
}
