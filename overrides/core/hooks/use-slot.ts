import {useContext} from 'react'
import {SlotContext} from '../context'

const useSlot = () => {
    return useContext<SiteContent.SlotConfiguration | null>(SlotContext)
}

export default useSlot
