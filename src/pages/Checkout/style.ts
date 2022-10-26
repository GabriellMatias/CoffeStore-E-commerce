import styled from 'styled-components'

export const CheckOutContainer = styled.main`
  display: flex;
  justify-content: space-between;
`

export const RequestContainer = styled.div`
  margin: 16.5rem 0 24rem 16rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const PaymentContainer = styled.div`
 
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

    width: 200px;
    height: 42px;

    /* Base/Input */

    background: ${(props) => props.theme['base-input']};
    /* Base/Button */

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
  }
`

export const SelectedCoffes = styled.div`
  /* arrumarr*/
  margin: 16.5rem 0 24rem 16rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;

  width: 448px;
  height: 498px;
`
