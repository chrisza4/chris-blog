import { useLayoutEffect, useState } from "react"
import debounce from "lodash/debounce"

function isMobileScreen() {
  return window.innerWidth < 768
}
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(isMobileScreen())

  useLayoutEffect(() => {
    const updateSize = () => {
      setIsMobile(isMobileScreen())
    }
    window.addEventListener("resize", debounce(updateSize, 250))
    // updateSize();
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return isMobile
}

export default useIsMobile
