import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import './styles.css';

function barContainer(props) {
   const [inputText, setText] = useState('');

   function onChange(text:string) {
      setText(text);
   }

   return (
      <div className='add'>
         <input 
            className='add-input'
            placeholder='I want to do...'
            onChange={(e) => onChange(e.target.value)}
            value={inputText}
         />
         <button 
            className='add-button'
            onClick={props.addTodo}
         />
      </div>
   );
}

const mapDispatchToProps = {
   addTodo: addTodo
}

export default connect(null,mapDispatchToProps)(barContainer)