import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Checkbox from '../components/Checkbox';

const ErrorMsg = ({ error, empty, children }) => {
  const Span = styled.span`
    color: ${props => props.theme.danger};
    margin-top: 10px;
    padding: 0 24px;

    font-size: 12px;
    font-weight: bold;

    display: ${props => (props.error || props.empty ? '' : 'none')};
  `;

  return (
    <Span error={error} empty={empty}>
      {empty ? '필수 정보입니다.' : children}
    </Span>
  );
};

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 700px;
  margin: 72px auto 0;
  padding: 20px 20px 10px;

  & > h2 {
    margin-bottom: 20px;
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  & input[type='text'],
  & input[type='password'] {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: 1px solid ${props => props.theme.borderLight};
    padding: 0 24px;
    margin-top: 12px;
    color: ${props => props.theme.font};
  }
  & input:placeholder {
    color: ${props => props.theme.fontLight};
  }

  & input[type='checkbox'] {
    width: 16px;
    height: 16px;
    background-color: white;
  }

  & ${Button} {
    align-self: flex-end;
    width: 100%;
  }
`;

const useInput = (initValue = null) => {
  const [input, setInput] = useState(initValue);
  const [empty, setEmpty] = useState(true);
  const handler = useCallback(e => {
    setInput(e.target.value);
    if (e.target.value === '') {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, []);
  return [input, empty, handler];
};

const SignUp = () => {
  // TODO: id, password, nickname 유효성 검사 조건, 정규식 수정(꼭!)
  // TODO: 첫 화면에서 필수 정보입니다 뜨는거 없애기 + 그래도 회원가입 disabled 유지하도록
  const [id, idEmpty, onChangeID] = useInput('');
  const [password, passwordEmpty, onChangePassword] = useInput('');
  const [passwordCheck, passwordCheckEmpty, onChangePasswordCheck] = useInput(
    ''
  );
  const [nickname, nicknameEmpty, onChangeNickname] = useInput('');
  const [term, setTerm] = useState(false);

  const [idError, setIDError] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);
  const [termError, setTermError] = useState(true);

  const [isSignUpDisable, setIsSignUpDisable] = useState(true);

  const checkValidationID = useCallback(e => {
    const idReg = /^[A-za-z0-9]{5,15}/g;
    if (!idReg.test(e.target.value)) {
      setIDError(true);
      return;
    }

    setIDError(false);
  }, []);
  const checkValidationNickname = useCallback(e => {
    const idReg = /^[A-za-z0-9]{5,15}/g;
    if (!idReg.test(e.target.value)) {
      setNicknameError(true);
      return;
    }
    setNicknameError(false);
  }, []);

  const checkValidationPassword = useCallback(e => {
    const idReg = /^[A-za-z0-9]{8,16}/g;
    if (!idReg.test(e.target.value) || e.target.value.length > 16) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
  }, []);

  const checkValidationPasswordCheck = useCallback(
    e => {
      setPasswordCheckError(password !== e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback(e => {
    setTerm(e.target.checked);
    setTermError(!e.target.checked);
  }, []);

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      console.log(id, nickname, password, passwordCheck, term);
    },
    [id, nickname, password, passwordCheck, term]
  );

  useEffect(() => {
    if (
      idError ||
      idEmpty ||
      nicknameError ||
      nicknameEmpty ||
      passwordError ||
      passwordEmpty ||
      passwordCheckError ||
      passwordCheckEmpty ||
      termError
    ) {
      setIsSignUpDisable(true);
    } else {
      setIsSignUpDisable(false);
    }
  }, [
    idError,
    idEmpty,
    nicknameError,
    nicknameEmpty,
    passwordError,
    passwordEmpty,
    passwordCheckError,
    passwordCheckEmpty,
    termError,
  ]);
  return (
    <>
      <SignUpForm onSubmit={onSubmitForm}>
        <h2>회원 가입</h2>
        <div>
          <input
            type="text"
            name="id"
            placeholder="아이디 (5-15자, 영문/숫자)"
            value={id}
            onChange={onChangeID}
            onBlur={checkValidationID}
          ></input>
          <ErrorMsg error={idError} empty={idEmpty}>
            아이디는 5-15자의 영문/숫자로 이루어져야 합니다.
          </ErrorMsg>
          <input
            type="text"
            name="nickname"
            placeholder="닉네임 (8자 이하, 30일마다 변경 가능)"
            value={nickname}
            onChange={onChangeNickname}
            onBlur={checkValidationNickname}
          ></input>
          <ErrorMsg error={nicknameError} empty={nicknameEmpty}>
            닉네임은 8자 이하여야 합니다.
          </ErrorMsg>
          <input
            type="password"
            name="password"
            placeholder="비밀번호 (8-16자, 영문/숫자/특수문자)"
            value={password}
            onChange={onChangePassword}
            onBlur={checkValidationPassword}
          ></input>
          <ErrorMsg error={passwordError} empty={passwordEmpty}>
            비밀번호는 8-16자의 영문/숫자/특수문자로 이루어져야 합니다.
          </ErrorMsg>
          <input
            type="password"
            name="password-check"
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            onBlur={checkValidationPasswordCheck}
          ></input>
          <ErrorMsg error={passwordCheckError} empty={passwordCheckEmpty}>
            비밀번호가 맞지 않습니다.
          </ErrorMsg>
        </div>
        <div>
          <Checkbox onChange={onChangeTerm}>데구리는 귀엽습니다.</Checkbox>
        </div>
        <Button primary disabled={isSignUpDisable}>
          동의하고 가입하기
        </Button>
      </SignUpForm>
    </>
  );
};

export default SignUp;
