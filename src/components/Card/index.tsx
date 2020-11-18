import React from 'react'
import styled from 'styled-components'
import { CardProps, Text } from 'rebass'
import { Box } from 'rebass/styled-components'

const Card = styled(Box)<{ padding?: string; border?: string; borderRadius?: string }>`
  width: 100%;
  border-radius: 20px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`
export default Card

export const BlurredCard = styled(Card)<{ bgColor?: string }>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'rgba(255, 255, 255, 0.15)')};
  backdrop-filter: blur(20px);
  box-shadow: 0 0px 4.7px -16px rgba(0, 0, 0, 0.017), 0 0px 11.3px -16px rgba(0, 0, 0, 0.024),
    0 0px 21.3px -16px rgba(0, 0, 0, 0.03), 0 0px 38px -16px rgba(0, 0, 0, 0.036), 0 0px 71px -16px rgba(0, 0, 0, 0.043),
    0 0px 170px -16px rgba(0, 0, 0, 0.06);
`

export const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: ${({ theme }) => theme.bg1};
`

export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.bg2};
`

export const OutlineCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.black};
`

export const YellowCard = styled(Card)`
  background-color: rgba(243, 132, 30, 0.05);
  color: ${({ theme }) => theme.yellow2};
  font-weight: 500;
`

export const PinkCard = styled(Card)`
  background-color: rgba(255, 0, 122, 0.03);
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;
`

const BlueCardStyled = styled(Card)`
  background-color: ${({ theme }) => theme.primary5};
  color: ${({ theme }) => theme.primary1};
  border-radius: 12px;
  width: fit-content;
`

export const BlueCard = ({ children, ...rest }: CardProps) => {
  return (
    <BlueCardStyled {...rest}>
      <Text fontWeight={500} color="#2172E5">
        {children}
      </Text>
    </BlueCardStyled>
  )
}
