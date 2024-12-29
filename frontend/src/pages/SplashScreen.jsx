import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/bg.jpg';
import logo from '../assets/splash-logo.png';
import styled from 'styled-components';
import Loader from './Loader';

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const scrollToLogin = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <LoadingScreen>
          <Loader />
        </LoadingScreen>
      )}
      <section
        id="splash-section"
        className="relative flex justify-center items-center flex-col h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <img
          src={logo}
          alt="Logo"
          className="absolute top-5 left-5 w-[120px] h-auto"
        />
        <StyledWrapper>
          <button
            onClick={scrollToLogin}
            className="cssbuttons-io-button"
          >
            Get started
            <div className="icon">
              <svg
                height={24}
                width={24}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </StyledWrapper>
      </section>
    </>
  );
};

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  width: 100%;
  display: flex;
  justify-content: center;

  .cssbuttons-io-button {
    background: #a370f0;
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #714da6;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    animation: bounce 2s infinite;
  }

  .cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
    right: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  .cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
  }

  .cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #7b52b9;
  }

  .cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
  }

  .cssbuttons-io-button:active .icon {
    transform: scale(0.95);
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`;

const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export default SplashScreen;
