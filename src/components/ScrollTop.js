import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"

export const ScrollTop = () => {
  const { pathname } = useHistory().location

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    })
  }, [pathname])
  return null
}
