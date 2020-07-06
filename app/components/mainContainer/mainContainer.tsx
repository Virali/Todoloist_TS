import * as React from 'react';
import AddBar from '../searchAddBar/barContainer';

class Container extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return(
         <>
         <h1> Add Todo </h1>
         <AddBar/>
         </>
      );
   }
}

export default Container;