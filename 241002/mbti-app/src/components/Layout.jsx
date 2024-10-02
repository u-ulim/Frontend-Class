import React from 'react'
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
    {/* 페이지로 쓸게 아니여서 컴포넌트로 뺐고 여기가 최상단 Page Layout Tree 라고 보면 됨 */}
      <Outlet/>
    </>
  )
}

export default Layout 
