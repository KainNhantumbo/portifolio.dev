import styled from 'styled-components'

export const colors = {
  main: '',
  font: '',
}



export const Container = styled.main`
 .upper-container {
  font-family: 'Bree Serif', serif;

  h1 {
    border-left: 2px solid rgb(${(colors)=> colors.font});
  }
 }

`