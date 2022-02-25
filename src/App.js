import react, { Component } from "react";
import AdminContainer from "./components/admin/AdminContainer";
import ClientContainer from "./components/client/clientContainer"
import styled from "styled-components";

class App extends Component {
  render() {

    // validacion de usuario
    const userType = 2

    if (userType === 1) return (
      <Body>
        <AdminContainer />
      </Body>)
    else if (userType === 2 ) return (
      <Body>
        <ClientContainer />
      </Body>)
  }
}

const Body = styled.div`
    min-height: 100vh;
    overflow-x: hidden;
`

export default App;
