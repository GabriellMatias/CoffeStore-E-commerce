import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: row;
  padding: 3.2rem 16rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 82rem;
  height: 10.4rem;

  span {
    /* modificando*/
    display: none;
    margin: 0 0 -10px 85%;
    text-decoration: none;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* align-self: center; */
    justify-content: flex-end;
    gap: 1.2rem;
  }
  p {
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};
    display: flex;
    align-items: center;
    padding: 0.8rem;
    gap: 0.4rem;

    border-radius: 6px;
  }
  button {
    cursor: pointer;
    border: none;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    display: flex;
    align-items: center;
    padding: 0.8rem;
    gap: 0.4rem;

    border-radius: 6px;
  }
`
