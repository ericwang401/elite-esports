import styled, { css } from 'styled-components/macro'
import tw from 'twin.macro'

interface ButtonProps {
    outlined?: boolean
    secondary?: boolean
    light?: boolean
}

const ButtonStyle = styled.button<ButtonProps>`
    ${tw`px-8 py-3.5 uppercase font-semibold`}
    transform: skew(-10deg);

    ${({secondary}) => secondary && css`
        background-color: rgb(23 23 23);
        ${tw`text-white`}
    `}

    ${({outlined}) => outlined && css`
        border-color: rgb(23 23 23);
        ${tw`border-2`}
    `}

    ${({light}) => light && css`${tw`text-white`}`}
`

const SpanStyle = styled.span`
    ${tw`block`}
    transform: skew(10deg);
`

type ComponentProps = Omit<JSX.IntrinsicElements['button'], 'ref'> & ButtonProps

const Button = ({ children, ...props }: ComponentProps) => {
    return <ButtonStyle {...props}><SpanStyle>{children}</SpanStyle></ButtonStyle>
}

export default Button