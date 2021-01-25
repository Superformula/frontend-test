import styled from 'styled-components'
import { Center } from '@components/Layout/utils'
import { Tag as BaseHeader, Title as BaseTitle } from '@components/Header/styles'
import { Tag as Rating } from '@components/Rating/styles'
import { Tag as Star } from '@components/Rating/Star/styles'
import { Tag as Status } from '@components/Status/styles'
import { rem } from '@utils/tools'

export const Tag = styled(BaseHeader)`

  ${Rating} {
    margin-bottom: ${rem(24)};
  }

  ${Star} {
    height: ${rem(30)};
    width: ${rem(30)};
  }

  ${Status} {
    font-size: ${rem(22)};
    line-height: ${rem(32)};
    text-transform: none;

    &:before {
      height: ${rem(22)};
      margin-right: ${rem(8)};
      width: ${rem(22)};
    }
  }
`

export const Env = styled(Center)``

export const Back = styled.span`
  align-items: center;
  color: ${props => props.theme.colors.blue};
  cursor: pointer;
  font-size: ${rem(18)};
  font-weight: 300;
  line-height: ${rem(18)};
  display: inline-flex;
  margin-bottom: ${rem(15)};
  text-transform: lowercase;
  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.colors.gray};
  }

  &:before {
    content: "←";
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: ${rem(18)};
    margin-right: ${rem(3)};
  }
`

export const Title = styled(BaseTitle)``

export const Info = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`

export const Small = styled.div`
  color: ${props => props.theme.colors.gray};
  font-size: ${rem(22)};
  font-weight: 300;
  line-height: ${rem(32)};
`