import styled from "styled-components";

export const ModeratorTableStyle = styled.div`
  margin: 20px 10px 10px 10px;
  border: 3px solid #444469;
  border-radius: 5px;
  max-height: inherit;
  overflow: hidden;
  overflow-y auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(16, 16, 16, 32);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(86, 86, 86, 86);
    border-radius: 20px;
    border: 3px solid rgba(86, 86, 86, 86);
  }
`;