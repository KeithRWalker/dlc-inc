import React from 'react'
import { Button } from 'reactstrap';
import './Home.scss';

class Home extends React.Component{
  render() {
    return(
      <div className="Home">
        <Button color="danger"> Home </Button>
      </div>
    )
  }
}

export default Home;
