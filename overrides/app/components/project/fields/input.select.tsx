import React, {forwardRef} from 'react'
import {SelectProps, Box, Select, Text, useMultiStyleConfig} from '@chakra-ui/react'
import {FieldError} from 'react-hook-form'
import {IconDot, IconChevronDown} from '../icons'

type RefType = HTMLSelectElement
type PropsType = {
    silentRequire?: boolean
    error?: FieldError
    label?: string
    children?: React.ReactNode | Array<React.ReactNode>
    options: Array<{
        value: string
        displayValue?: string
    }>
} & SelectProps

const InputSelect = forwardRef<RefType, PropsType>((props, ref) => {
    const {
        silentRequire,
        error,
        variant,
        colorScheme,
        size,
        id,
        label,
        isRequired,
        children,
        options,
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
                <Select
                    id={id}
                    {...rest}
                    ref={ref}
                    data-component="select"
                    colorScheme={error ? 'input_invalid' : ''}
                    isRequired={!!isRequired}
                    icon={<IconChevronDown />}
                >
                    {options.map((option, index) => {
                        return (
                            <option value={option.value} key={index}>
                                {option.displayValue || option.value}
                            </option>
                        )
                    })}
                </Select>
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

InputSelect.displayName = 'InputSelect'

export default InputSelect
