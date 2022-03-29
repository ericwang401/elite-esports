import styled, { css } from 'styled-components/macro'
import tw from 'twin.macro'

interface ButtonProps {
    outlined?: boolean
    secondary?: boolean
    light?: boolean
}

const ButtonStyle = styled.button<ButtonProps>`
    ${tw`px-8 py-3.5 uppercase font-semibold transition-colors`}
    transform: skew(-10deg);

    ${({outlined, secondary}) => (!secondary && !outlined) && css`
        background-color: #ce0037;
        ${tw`text-white`}
    `}

    ${({secondary}) => secondary && css`
        background-color: rgb(23 23 23);
        border-color: rgb(23 23 23);
        ${tw`text-white border-2 hover:text-black hover:bg-transparent active:text-white`}
        &:active {
            background-color: #262626;
            border-color: #262626;
        }
    `}

    ${({outlined}) => outlined && css`
        border-color: rgb(23 23 23);
        &:hover {
            background-color: rgb(23 23 23);
        }
        &:active {
            background-color: #262626;
            border-color: #262626;
        }
        ${tw`border-2 hover:text-white`}
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