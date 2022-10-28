import styled from 'styled-components'

export const SucessPageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25rem 16rem;
  gap: 10rem;
`

export const LeftSide = styled.div`
  > div {
    margin-bottom: 4rem;
    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 3.2rem;
      line-height: 130%;

      color: ${(props) => props.theme['yellow-dark']};
    }
    h2 {
      font-weight: 400;
      font-size: 2rem;
      line-height: 130%;

      color: ${(props) => props.theme['base-subtitle']};
      font-stretch: 100;
    }
  }
`

export const RightSide = styled.div`
  margin-top: 10rem;
`

export const DeliveryInformations = styled.ul`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 3.2rem;

  width: 526px;
  height: 270px;
  border-radius: 6px 36px;
  border: 1px solid black;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      line-height: 130%;

      color: ${(props) => props.theme['base-text']};
    }
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    i {
      padding: 0.8rem;
      width: 32px;
      height: 32px;
      border-radius: 1000px;

      &.adress {
        background: ${(props) => props.theme.purple};
      }
      &.deliveryPrevision {
        background: ${(props) => props.theme.yellow};
      }
      &.paymentType {
        background: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
