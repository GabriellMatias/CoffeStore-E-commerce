import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      width: 120px;
      height: 120px;
      margin-top: -21px;
    }
    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      line-height: 130%;
      text-transform: uppercase;

      border-radius: 100px;
      width: 81px;
      height: 21px;
      margin-top: 1.3rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.4rem 0.8rem;
      gap: 4rem;

      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
    }
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      margin: 1.6rem 0 0.8rem 0;
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }
    h2 {
      margin-bottom: 3.3rem;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme['base-label']};
      text-align: center;
    }
  }
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.4rem 2rem 2.4rem;

    > div {
      gap: 0.8rem;
      display: flex;
      justify-content: space-between;

      input {
        padding: 0.8rem;
        gap: 0.4rem;
        border: none;

        width: 72px;
        height: 38px;

        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
      }

      button {
        display: flex;
        align-items: center;
        padding: 0.8rem;
        gap: 0.8rem;
        border: none;

        width: 38px;
        height: 38px;

        background: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme.White};
        border-radius: 6px;
        &:hover {
          background: ${(props) => props.theme.purple};
        }
      }
    }

    span {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 130%;

      text-align: right;

      color: ${(props) => props.theme['base-text']};
    }
  }
`
