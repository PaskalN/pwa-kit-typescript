import React, {forwardRef, useState} from 'react'
import {InputProps, Input, Box, Text, Button, useMultiStyleConfig} from '@chakra-ui/react'
import {FieldError} from 'react-hook-form'

import {IconShowPassword, IconHidePassword, IconDot} from '../icons'

type RefType = HTMLInputElement
type PropsType = {
    silentRequire?: boolean
    error?: FieldError
    label?: string
    children?: React.ReactNode | Array<React.ReactNode>
} & InputProps

const InputPassword = forwardRef<RefType, PropsType>((props, ref) => {
    const {
        silentRequire,
        error,
        variant,
        colorScheme,
        size,
        id,
        onChange,
        onFocus,
        onBlur,
        type,
        label,
        isRequired,
        children,
        isDisabled,
        ...rest
    } = props
    const [dirty, setDirty] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const style = useMultiStyleConfig('Field', {
        variant,
        colorScheme,
        size
    })

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof onChange === 'function') {
            onChange(event)
        }

        const {currentTarget} = event
        setDirty(!!currentTarget.value)
    }

    const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        if (typeof onFocus === 'function') {
            onFocus(event)
        }

        const {currentTarget} = event
        setDirty(!!currentTarget.value)
    }

    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        if (typeof onBlur === 'function') {
            onBlur(event)
        }

        const {currentTarget} = event
        setDirty(!!currentTarget.value)
    }

    const showPasswordHadnler = () => {
        setShowPassword(!showPassword)
    }

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

                <Box w="100%" position="relative">
                    <Input
                        type={showPassword && !isDisabled ? 'text' : type}
                        {...rest}
                        ref={ref}
                        data-component="input"
                        onChange={(event) => changeHandler(event)}
                        onBlur={(event) => blurHandler(event)}
                        onFocus={(event) => focusHandler(event)}
                        isRequired={!!isRequired}
                        paddingRight="3.125rem"
                        isDisabled={isDisabled}
                    />

                    <Button
                        variant="icon"
                        size="icon_sm"
                        position="absolute"
                        top="0"
                        right="0"
                        left="0"
                        bottom="0"
                        margin="auto 0.25rem auto auto"
                        onClick={() => showPasswordHadnler()}
                        isDisabled={!dirty || isDisabled}
                    >
                        {showPassword && dirty && !isDisabled ? (
                            <IconShowPassword />
                        ) : (
                            <IconHidePassword />
                        )}
                    </Button>
                </Box>
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

InputPassword.displayName = 'InputPassword'

export default InputPassword
