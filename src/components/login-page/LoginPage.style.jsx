import styled from "styled-components";

export const StyledLoginPage = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url("https://as2.ftcdn.net/v2/jpg/01/19/11/55/1000_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .login-form {
    text-align: left;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid black;
    background: #fff;
  }
  .sign-up {
    margin-left: 5px;
  }
`;

export const StyledHeading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 7%;
  color: #fff;
  height: 100px;
  background-image: url("https://image.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg");
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;
