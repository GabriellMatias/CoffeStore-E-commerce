import styled from 'styled-components'

export const SelectedCoffeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.8rem 0.4rem;
  gap: 5.9rem;

  main {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    img {
      width: 64px;
      height: 64px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;

      p {
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
      }
      /* modificar para html semantico*/
      .InputsStyle {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }
      input {
        justify-content: center;
        width: 72px;
        height: 32px;
        border: none;

        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
      }

      .removeButton {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;

        gap: 4px;

        width: 91px;
        height: 32px;

        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        &:hover {
          background: ${(props) => props.theme['base-hover']};
        }

        span {
          width: 55px;
          height: 19px;

          font-size: 12px;
          line-height: 160%;

          text-transform: uppercase;
        }
      }
    }
  }
  > span {
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }
`
const baseButton = styled.button`
  min-width: 20px;
  min-height: 32px;

  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
`

export const AddButton = styled(baseButton)`
  &::before {
    content: '';
    border-radius: 8px;
    display: block;
    background: ${(props) => props.theme.purple};
    width: 1.3px;
    height: 10.9px;
    transform: translate(6.5px);
  }
  &::after {
    content: '';
    border-radius: 8px;
    display: block;
    background: ${(props) => props.theme.purple};
    width: 10.94px;
    height: 1.31px;
  }
  &:hover {
    background: ${(props) => props.theme['base-hover']};
    border-radius: 6px;
  }
`
export const MinusButton = styled(baseButton)`
  &::after {
    content: '';
    border-radius: 8px;
    display: block;
    background: ${(props) => props.theme.purple};
    width: 10.94px;
    height: 1.31px;
  }
  &:hover {
    background: ${(props) => props.theme['base-hover']};
    border-radius: 6px;
  }
`
