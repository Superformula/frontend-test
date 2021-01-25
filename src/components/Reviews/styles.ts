import styled from 'styled-components'
import { Center } from '@components/Layout/utils'
import { rem } from '@utils/tools'

export const Tag = styled.section`
  padding: ${rem(48)} 0;
  
`

export const Env = styled(Center)``

export const Total = styled.strong`
  color: ${props => props.theme.colors.gray};
  display: block;
  font-size: ${rem(22)};
  font-weight: 300;
  letter-spacing: ${rem(0.92)};
  line-height: ${rem(32)};
  margin-bottom: ${rem(48)};
`

export const List = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
`

export const Item = styled.li`
  align-items: flex-start;
  border-top: ${rem(1)} solid ${props => props.theme.colors.lightgray};
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: ${rem(80)} 0;

  &:first-child {
    border-top: 0 none;
    padding-top: 0;
  }

  @media(min-width: ${props => props.theme.media.lg}) {
    flex-wrap: nowrap;
  }
`

export const Left = styled.div`
  flex: 1 1 ${rem(336)};
  margin-bottom: ${rem(30)};

  @media(min-width: ${props => props.theme.media.lg}) {
    margin-bottom: 0;
  }
`

export const User = styled.div`
  align-items: flex-start;
  display: flex;
`

export const Mask = styled.div`
  height: ${rem(80)};
  margin-right: ${rem(32)};
  width: ${rem(80)};
`

export const Image = styled.img`
  object-fit: cover;
  display: block;
  height: ${rem(80)};
  width: 100%;
`

export const Info = styled.div`
  flex: 1 1 auto;
  padding-right: ${rem(15)};
`

export const Name = styled.span`
  color: ${props => props.theme.colors.black};
  display: block;
  font-size: ${rem(22)};
  font-weight: 300;
  letter-spacing: ${rem(0.92)};
  line-height: ${rem(24)};
  margin-bottom: ${rem(6)};
`

export const Created = styled.span`
  color: ${props => props.theme.colors.gray};
  display: block;
  font-size: ${rem(16)};
  font-weight: 300;
  line-height: ${rem(24)};
`

export const Right = styled.div`
  flex: 1 1 ${rem(976)};
`

export const Testimonial  = styled.p`
  color: ${props => props.theme.colors.black};
  display: block;
  font-size: ${rem(20)};
  font-weight: 300;
  letter-spacing: ${rem(1)};
  line-height: ${rem(28)};
  margin: 0;
  padding: 0;
`