import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #fff;
  }

  body, input, button {
    font-family: 'Encode Sans Expanded', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;