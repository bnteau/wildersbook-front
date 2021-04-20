import Wilder from './Wilder';
import Form from './Form';
import './App.css';
import { getWilders } from './data/database';
import { useEffect, useState } from 'react';
import styled from "@emotion/styled";

const StyledApp = styled.div`

  body {
    margin: 0;
    padding: 0;
  }

  .header {
    background: #FF5467;
    padding: 20px 0;
    &__title {
      color: #fff;
      width: 50%;
      margin: auto;
    }
  }

  .cards {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
  }
`;

export default function App() {

  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    getWilders().then((res) => (
      setWilders(res.data)
    ))
    .catch((error) => (
      console.log("Error : ", error)
    ));
  }, []);

  return (
    <StyledApp>
      <header className="header">
        <h1 className="header__title">Wilders Book</h1>
      </header>
      <Form />
      <div className="cards">
        {wilders.map((wilder) => (
          <Wilder wilder={wilder} key={wilder._id} />
        ))}
      </div>
      
    </StyledApp>
  );
}

