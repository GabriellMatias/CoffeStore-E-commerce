import styled from 'styled-components'

export const Container = styled.main`
  position: absolute;
  height: 54.4rem;
  left: 0px;
  right: 0px;
  top: 10.4rem;
`

export const ContainerHeader = styled.section`
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9.4rem 16rem;
  gap: 1.6rem;
  div {
    display: flex;
    flex-direction: column;

    > h1 {
      width: 58.8rem;
      height: 12.4rem;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 4.8rem;
      font-style: normal;
      line-height: 130%;
      padding-bottom: 1.6rem;
    }
    > p {
      width: 58.8rem;
      height: 5.2rem;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 2rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};

      margin-bottom: 6.6rem;
    }

    > ul {
      width: 56.7rem;
      height: 8.4rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.2rem;
      list-style: none;

      li {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.2rem;

        i {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 0.8rem;
          gap: 0.8rem;

          width: 3.2rem;
          height: 3.2rem;
          border-radius: 999px;
          background: ${(props) => props.theme['yellow-dark']};
        }
      }
    }
  }
`
export const ContainerCoffeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16rem;
  > h1 {
    margin: 3.2rem 0 5.4rem -87rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
  }
  > main {
    width: 112rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 3.2rem 4rem;
    padding-bottom: 16rem;
  }
`
