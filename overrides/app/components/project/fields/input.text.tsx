import React, {forwardRef} from 'react'
import {InputProps, Input, Box, Text, useMultiStyleConfig} from '@chakra-ui/react'
import {FieldError} from 'react-hook-form'
import {IconDot} from '../icons'

type RefType = HTMLInputElement
type PropsType = {
    silentRequire?: boolean
    error?: FieldError
    label?: string
    children?: React.ReactNode | Array<React.ReactNode>
} & InputProps

const InputText = forwardRef<RefType, PropsType>((props, ref) => {
    const {
        silentRequire,
        error,
        variant,
        colorScheme,
        size,
        id,
        type,
        label,
        isRequired,
        children,
        ...rest
    } = props

    const style = useMultiStyleConfig('Field', {
        variant,
        colorScheme,
        size
    })

    return (
        <Box __css={style.container}>
            <Box as="label" __css={style.label} htmlFor={id} data-component="input-label">
                {label && (
                    <Text as="span">
                        {(isRequired || silentRequire) && (
                            <IconDot fontSize="1rem" color="carminepink.100" />
                        )}
                        {label}
                    </Text>
                )}
                <Input
                    id={id}
                    type={type}
                    {...rest}
                    ref={ref}
                    data-component="input"
                    colorScheme={error ? 'input_invalid' : ''}
                    isRequired={!!isRequired}
                />
            </Box>

            {error?.message && (
                <Text
                    data-component="input-text"
                    fontSize="xs"
                    color="carminepink.100"
                    letterSpacing="0"
                >
                    {error.message}
                </Text>
            )}

            {children}
        </Box>
    )
})

InputText.displayName = 'InputText'

export default InputText
