import styled from 'styled-components'

export const CheckOutContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 1.6rem;
  gap: 3.2rem;
`

export const RequestContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  padding: 16rem 0;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 2.2rem;
  padding: 4rem;
  gap: 3.2rem;

  width: 640px;
  height: 207px;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  header {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    width: 560px;
    height: 44px;

    .paymentText {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;

      h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;

        color: ${(props) => props.theme['base-subtitle']};
      }

      span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;

        color: ${(props) => props.theme['base-text']};
      }
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 1.6rem;
      gap: 1.2rem;
      border: none;

      width: 178.67px;
      height: 51px;

      background: ${(props) => props.theme['base-button']};
      border-radius: 6px;

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;

      text-transform: uppercase;

      color: ${(props) => props.theme['base-text']};

      &:hover {
        color: ${(props) => props.theme['base-subtitle']};
        background: ${(props) => props.theme['base-hover']};
      }
    }
  }
`

export const FormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem;
  gap: 3.2rem;

  width: 640px;
  height: 372px;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;

    > div {
      h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;

        display: flex;
        align-items: center;

        color: ${(props) => props.theme['base-subtitle']};
      }
      > span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;

        display: flex;
        align-items: center;

        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`

export const InputContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 16px;

  width: 560px;
  height: 216px;

  input {
    box-sizing: border-box;

    align-items: center;
    padding: 1.2rem;
    gap: 4px;
    height: 42px;

    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
  }

  input[placeholder='CEP'] {
    width: 200px;
  }
  input[placeholder='Rua'] {
    width: 560px;
  }
  input[placeholder='Numero'] {
    width: 200px;
  }
  input[placeholder='Complemento'] {
    width: 348px;
  }
  input[placeholder='Bairro'] {
    width: 200px;
  }
  input[placeholder='Cidade'] {
    width: 276px;
  }
  input[placeholder='UF'] {
    width: 60px;
  }
  div {
    display: flex;
    gap: 1.2rem;
  }
`

export const SelectedCoffes = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-start;
  padding: 4rem;
  gap: 24px;

  width: 448px;
  min-height: 498px;
  height: fit-content;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  hr {
    width: 368px;
    border: 1px solid ${(props) => props.theme['base-button']};
  }
`
export const SelectedContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 12rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.8rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
  .prices {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.2rem;
    width: 368px;
    height: 92px;

    div {
      width: 368px;
      height: 21px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
    .totalPrices {
      > p,
      span {
        font-weight: 800;
        font-size: 2rem;
      }
    }
  }
  button[type='submit'] {
    align-items: center;
    padding: 1.2rem 0.8rem;
    gap: 0.4rem;
    border: none;
    width: 368px;
    height: 46px;

    /* Brand / Yellow */

    background: ${(props) => props.theme.yellow};
    border-radius: 6px;
    /*fonte*/

    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    text-transform: uppercase;

    color: ${(props) => props.theme.White};
    font-stretch: 100;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
