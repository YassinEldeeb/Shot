import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const useScroll = () => {
  const controls = useAnimation()
  const [element, view] = useInView({ threshold: 1 })
  if (view) {
    controls.start("show")
  } else {
    controls.start("hide")
  }
  return [element, controls]
}
