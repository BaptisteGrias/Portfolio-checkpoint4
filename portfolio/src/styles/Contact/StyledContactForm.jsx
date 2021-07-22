import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form_groupe {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    color: #bcb4b4;
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.2;
    padding: 1.2rem;
    color: #bcb4b4;
    background-color: #0c0c0c;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: #bcb4b4;
    color: #1e1e1e;
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default FormStyle;
