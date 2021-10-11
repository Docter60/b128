import styled from "styled-components";

export const MIARankStyle = styled.div`
  max-height: 100%;
  
  .nav.nav-tabs {
    background: rgba(64, 64, 64, 32);
    border: 1px solid transparent;
  }

  .nav-item.nav-link {
    display: inline-block;
    zoom: 1;
    width: 33%;
    text-align: center;
    font-family: Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
    padding: 10px;
    color: #aaaaaa;
    border: none;
    outline: none;
    transition: all 250ms ease-in-out;

    &:hover {
      border: none;
      outline: none;
      background: #151719;
      transition: all 250ms ease-in-out;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }

  .nav-item.nav-link.active {
    font-family: Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
    padding: 10px;
    color: #cccccc;
    background: #444444;
    outline: none;
    border: none;
  }

  .tab-content {
    max-height: 720px;
  }

  .tab-pane {
    max-height: inherit;
  }
`;
