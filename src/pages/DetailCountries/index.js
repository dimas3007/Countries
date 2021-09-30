import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { globeIcon } from '../../assets/img';
import { Button } from '../../components';

const DetailCountries = () => {
  const history = useHistory();
  const { countries, calling, currency } = useSelector(
    state => state.countries
  );

  return (
    <Container>
      <Button onClick={() => history.push('/')} text="Back to HomePage" />
      <Title>
        <div className="title">
          <h1>{countries?.name}</h1>
          <img src={countries?.flag} alt="" />
        </div>
        <div className="tag">
          {countries?.altSpellings.map((spel, index) => (
            <span key={index}>{spel}</span>
          ))}
        </div>
      </Title>
      <DetailWrap>
        <img src={globeIcon} alt="" />
        <Detail>
          <div className="latlong">
            <h5>LatLong</h5>
            <h1>
              {countries?.latlng[0]}, {countries?.latlng[1]}
            </h1>
          </div>
          <div className="region">
            <div className="region-item">
              <h6>Capital :</h6>
              <span>{countries?.capital}</span>
            </div>
            <div className="region-item">
              <h6>Region :</h6>
              <span>{countries?.region}</span>
            </div>
            <div className="region-item">
              <h6>SubRegion :</h6>
              <span>{countries?.subregion}</span>
            </div>
          </div>
        </Detail>
        <Desc>
          <div className="calling">
            <h5>Calling Code</h5>
            <h1>{countries?.callingCodes[0]}</h1>
            <div className="tooltip">
              <span className="underline">{calling?.length} Country</span>
              <span> with this calling code</span>
              <div
                className={`tooltip-text ${calling?.length > 5 && 'scroll'}`}
              >
                <ul>
                  {calling?.length &&
                    calling?.map((call, index) => (
                      <li key={index}>{call.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="currency">
            <h5>Currency</h5>
            <h1>{countries?.currencies[0].code}</h1>
            <div className="tooltip">
              <span className="underline">{currency?.length} Country</span>
              <span> with this currency</span>
              <div
                className={`tooltip-text ${calling?.length >= 5 && 'scroll'}`}
              >
                <ul>
                  {currency?.length &&
                    currency?.map((currency, index) => (
                      <li key={index}>{currency.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </Desc>
      </DetailWrap>
    </Container>
  );
};

export default DetailCountries;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 90px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.div`
  .title {
    display: flex;
    gap: 10px;
    align-items: center;
    h1 {
      font-size: 48px;
      font-weight: 700;
      margin: 0;
    }
    img {
      width: 46px;
      height: 30px;
    }
  }

  .tag {
    display: flex;
    gap: 5px;
    span {
      background-color: #8dd5cc;
      padding: 5px 12px;
      border-radius: 50px;
      font-size: 12px;
      color: #fff;
      font-weight: bold;
    }
  }
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  .latlong {
    padding: 25px;
    flex: 1;
    h5,
    h1 {
      margin: 0;
    }

    h5 {
      font-size: 18px;
      font-weight: normal;
    }

    h1 {
      font-size: 48px;
      font-weight: bold;
      color: #8362f2;
    }
  }

  .region {
    padding: 25px;
    flex: 1;
    .region-item {
      display: flex;
      align-items: center;
      gap: 10px;
      h6 {
        margin: 0;
        font-size: 18px;
        font-weight: normal;
      }
      span {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`;

const Desc = styled.div`
  display: flex;
  justify-content: space-between;
  h5,
  h1 {
    margin: 0;
  }

  h5 {
    font-size: 18px;
    font-weight: normal;
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
    color: #8362f2;
  }

  .calling {
    flex: 1;
  }

  .currency {
    flex: 1;
  }

  .tooltip {
    width: max-content;
    span {
      font-size: 14px;

      &.underline {
        text-decoration-line: underline;
        color: #8362f2;
      }
    }

    .tooltip-text {
      margin-top: 25px;
      visibility: hidden;
      width: max-content;
      background-color: #525252;
      border-radius: 10px;
      color: #fff;
      max-height: 12em;

      &.scroll {
        overflow-y: scroll;
      }

      ul {
        padding: 10px;
        list-style-type: none;
      }

      li {
        padding: 10px;
        font-size: 14px;
      }
    }

    &:hover {
      cursor: pointer;
      .tooltip-text {
        visibility: visible;
      }
    }
  }
`;

const DetailWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  img {
    position: absolute;
    width: 300px;
    top: 0;
    right: 60%;
  }
`;
