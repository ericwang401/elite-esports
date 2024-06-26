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
        background-image: linear-gradient(to bottom, #eb1a52 0%, #ce0037 100%);
        &:hover {
            background-image: linear-gradient(to top, #eb1a52 0%, #ce0037 100%);
        }
        ${tw`text-white`}
    `}

    ${({secondary}) => secondary && css`
        background-color: rgb(23 23 23);
        border-color: rgb(23 23 23);
        ${tw`text-white border-2 hover:text-black hover:text-white`}
        &:hover {
            background-color: rgba(23, 23, 23, .4);
            border-color: #262626;
        }
    `}

    ${({outlined}) => outlined && css`
        border-color: rgb(23 23 23);
        &:hover {
            background-color: rgba(23, 23, 23, .4);
            border-color: #262626;
        }
        ${tw`border-2 hover:text-white active:text-white`}
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