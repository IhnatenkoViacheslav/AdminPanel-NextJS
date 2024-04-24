import { MotionProps, useInView } from "framer-motion"
import { useRef } from "react"

export const useProgressAnimate = (percent: number) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const variants:MotionProps = {
        initial: {
            rotate: '49deg'
        },
        whileInView: {
            rotate: `${45 + percent * 1.8}deg`,
            transition: {type: 'easeInOut', duration: 3, delay: 0}
        }
    }   

    return { variants}
}