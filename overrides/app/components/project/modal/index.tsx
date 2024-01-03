import React from 'react'

import {
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalProps
} from '@chakra-ui/react'

const Modal: React.FC<ModalProps> = (props) => {
    const {children, ...rest} = props

    return (
        <ChakraModal {...rest}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody
                    onClick={(event) => {
                        const {target} = event
                        const el = target as HTMLElement
                        if (~el.id.toString().indexOf('chakra-modal')) {
                            props.onClose()
                        }
                    }}
                >
                    {children}
                </ModalBody>
            </ModalContent>
        </ChakraModal>
    )
}

export default Modal
