import React, { useState } from 'react'
import styled from 'styled-components'
import { RowBetween } from '../Row'
import { TYPE, CloseIcon, ExternalLink } from '../../theme'
import { AutoColumn } from '../Column'
import MenuBG from '../../assets/images/menu-bg.png'

const Wrapper = styled.div<{ open: boolean }>`
  height: 100vh;
  width: ${({ open }) => (open ? '280px' : '60px')};
  background-color: #f7f8fa;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${MenuBG});

  :hover {
    cursor: pointer;
  }
`

const FlippedText = styled.div`
  -webkit-transform: rotate(90deg);
`

export default function SideMenu() {
  const [open, setOpen] = useState(false)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <Wrapper open={open} onClick={() => setOpen(!open)}>
      {!open && (
        <FlippedText>
          <TYPE.mediumHeader>Sybil</TYPE.mediumHeader>
        </FlippedText>
      )}
      {open && (
        <RowBetween>
          <TYPE.mediumHeader>Sybill</TYPE.mediumHeader>
          <CloseIcon onClick={() => setOpen(false)} />
        </RowBetween>
      )}
      {open && (
        <AutoColumn gap="1rem">
          <TYPE.largeHeader>Attestations for Ethereum Governance</TYPE.largeHeader>
          <TYPE.body>
            This tool connects a wallet address to a digital identity by singing a message on chain.This mapping of
            address to identity can be updated, removed and queried on chain using any ethereum indexer.This mapping can
            be used for displaying public identies for governance platforms on ethereum.
          </TYPE.body>
          <TYPE.body>
            A <ExternalLink href="uniswap.org">Uniswap</ExternalLink> project.
          </TYPE.body>
        </AutoColumn>
      )}
    </Wrapper>
  )
}
