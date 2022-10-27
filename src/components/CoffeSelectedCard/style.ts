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

      button {
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
