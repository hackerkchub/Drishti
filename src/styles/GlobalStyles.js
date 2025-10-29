import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.background || "#0b0b0b"};
    color: ${({ theme }) => theme.colors.text || "#fff"};
    overflow-x: hidden;
    min-height: 100vh;
    padding-top: 80px; /* ✅ Prevent content from hiding behind navbar */
    padding-bottom: 80px; /* ✅ Prevent content from hiding behind mobile menu/footer */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  /* Smooth page transitions */
  main {
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export default GlobalStyles;
