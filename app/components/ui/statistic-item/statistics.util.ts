import { IconType } from "react-icons"
import { AiOutlineEye, AiOutlineStar, AiOutlineTeam, AiOutlineVideoCamera } from "react-icons/ai"

export const getIcon = (id: number):IconType => {
    switch (id) {
        case 2:
            return AiOutlineVideoCamera
        case 3:
            return AiOutlineEye
        case 4:
            return AiOutlineStar
        default:
        case 1:
            return AiOutlineTeam
    }
}