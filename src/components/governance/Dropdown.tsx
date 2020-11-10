import React, { useState } from 'react'
import styled from 'styled-components'
import { useActiveProtocol } from '../../state/governance/hooks'
import { RowBetween, RowFixed } from '../Row'
import { WrappedListLogo } from './styled'
import { TYPE } from '../../theme'
import { ChevronDown } from 'react-feather'
import { SUPPORTED_PROTOCOLS } from '../../state/governance/reducer'

const Wrapper = styled.div<{ backgroundColor?: string; open: boolean }>`
  width: 100%;
  height: fit-content;
  position: relative;
  padding: 1rem;
  border-radius: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'white'};
  z-index: 2;
  border-bottom-left-radius: ${({ open }) => (open ? '0px' : '20px')};
  border-bottom-right-radius: ${({ open }) => (open ? '0px' : '20px')}
  :hover {
    cursor: pointer;
  }
`

const Flyout = styled.div<{ backgroundColor?: string }>`
  width: 100%;
  padding: 1rem;
  position: absolute;
  bottom: -68px;
  z-index: 0;
  left: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 10px 34px rgb(236 236 236 / 16%), 0 5px 6px rgb(140 140 140 / 23%);
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'white'};
`

export default function Dropdown() {
  const [activeProtocol, setActiveProtocol] = useActiveProtocol()

  const [open, setOpen] = useState(false)

  return (
    <Wrapper backgroundColor={activeProtocol?.secondaryColor} onClick={() => setOpen(!open)} open={open}>
      <RowBetween>
        <RowFixed>
          <WrappedListLogo src={activeProtocol?.logo} />
          <TYPE.mediumHeader color={activeProtocol?.primaryColor}>{activeProtocol?.name}</TYPE.mediumHeader>
        </RowFixed>
        <ChevronDown stroke={activeProtocol?.primaryColor} />
      </RowBetween>
      {open &&
        Object.keys(SUPPORTED_PROTOCOLS)
          .filter(k => SUPPORTED_PROTOCOLS[k].name !== activeProtocol.name)
          .map((k, i) => (
            <Flyout
              key={i}
              backgroundColor={SUPPORTED_PROTOCOLS[k].secondaryColor}
              onClick={() => setActiveProtocol(SUPPORTED_PROTOCOLS[k])}
            >
              <RowBetween>
                <RowFixed>
                  <WrappedListLogo src={SUPPORTED_PROTOCOLS[k]?.logo} />
                  <TYPE.mediumHeader color={SUPPORTED_PROTOCOLS[k]?.primaryColor}>
                    {SUPPORTED_PROTOCOLS[k].name}
                  </TYPE.mediumHeader>
                </RowFixed>
              </RowBetween>
            </Flyout>
          ))}
    </Wrapper>
  )
}
