import { createGlobalStyle } from 'styled-components';
import '@fontsource/poppins'; // Importing the Poppins font

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #D2E0FB;
  }

  .react-flow_handle{
    width: 10px;
    height: 10px;
    background-color: #6a0dad;
    border-radius: 50%;
    border: 2px solid white;
  }

  .react-flow_handle.handle-left {
    left: -8px;
  }

  .react-flow_handle.handle-right {
    right: -8px;
  }
`;

export default GlobalStyle;
