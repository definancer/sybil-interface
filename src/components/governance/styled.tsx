import styled from 'styled-components'

export const WrappedListLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`

const handleColorType = (status?: any, theme?: any) => {
  switch (status) {
    case 'pending':
      return theme.blue1
    case 'active':
      return theme.blue1
    case 'succeeded':
      return theme.green1
    case 'defeated':
      return theme.red1
    case 'queued':
      return theme.text3
    case 'execited':
      return theme.green1
    case 'canceled':
      return theme.red1
    case 'expired':
      return theme.text3
    default:
      return theme.text3
  }
}

export const EmptyProposals = styled.div`
  border: 1px solid ${({ theme }) => theme.text4};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProposalStatus = styled.span<{ status: string }>`
  font-size: 0.825rem;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 8px;
  color: ${({ status, theme }) => handleColorType(status, theme)};
  border: 1px solid ${({ status, theme }) => handleColorType(status, theme)};
  width: fit-content;
  justify-self: flex-end;
  text-transform: uppercase;
`
