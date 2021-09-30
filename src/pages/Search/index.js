import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { countriesAction } from '../../config/state/actions';
import { useHistory } from 'react-router-dom';
import { getCountries } from '../../config/api';
import { searchIcon } from '../../assets/img';

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const [countriesName, setCountriesName] = useState('');
  const [countries, setCountries] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setCountries: setStateCountries } = bindActionCreators(
    countriesAction,
    dispatch
  );

  useEffect(() => {
    setCountriesName(searchQuery);
    setIsError(false);

    const timeOutId = setTimeout(() => {
      if (countriesName) {
        getCountries({ name: countriesName })
          .then(res => {
            setCountries(res?.slice(0, 5));
            setIsLoading(false);
          })
          .catch(() => {
            setIsError(true);
            setIsLoading(false);
            setCountries([]);
          });
      } else {
        setCountries([]);
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [searchQuery, countriesName]);

  const handleDetailCountries = e => {
    setStateCountries(e.target.innerText);
    history.push('/detail');
  };

  const handleInput = e => {
    setIsLoading(true);
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <h1>Country</h1>
      <SearchGroup>
        <div className="input-group">
          <input
            placeholder="Type any country name"
            onInput={handleInput}
            value={searchQuery}
          />
          <img src={searchIcon} alt="" />
        </div>
        {countries.length ? (
          <div className="autocomplete">
            <ul>
              {countries.map((countri, index) => (
                <li key={index} onClick={handleDetailCountries}>
                  {countri.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}
        {isError && <div className="error">Data not Found</div>}
        {isLoading && (
          <div className="error">Mohon tunggu, Sedang mencari data...</div>
        )}
      </SearchGroup>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 72px;
    font-weight: bold;
    line-height: 86px;
  }

  div {
    &.error {
      color: #ff0000;
      font-size: 18px;
      padding: 25px;
    }
  }
`;

const SearchGroup = styled.div`
  width: 700px;
  position: relative;
  input {
    padding: 20px 28px;
    width: 100%;
    border: 0.5px solid #c8c8c8;
    border-radius: 10px;
    color: #000;
    font-size: 18px;

    &:focus {
      outline: none !important;
      border: 1px solid rgba(131, 98, 242);
    }

    &::placeholder {
      color: #c8c8c8;
    }
  }

  .input-group {
    position: relative;
    img {
      color: #c8c8c8;
      position: absolute;
      width: 18px;
      top: 37%;
      right: -4%;
    }
  }

  .autocomplete {
    width: 100%;
    padding: 20px 28px;
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        padding: 10px 25px;

        &:hover {
          cursor: pointer;
          background-color: #f4f4f4;
        }
      }
    }
  }
`;
