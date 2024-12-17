// src/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      // Handle percentage calculation
      const percentageRegex = /(\d+)%/g;
      let modifiedInput = input.replace(percentageRegex, (match, number) => {
        return (parseFloat(number) / 100).toString();
      });

      // Evaluate the expression
      const evalResult = eval(modifiedInput);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>
        <div>{input || '0'}</div>
        <div style={styles.result}>{result}</div>
      </div>
      <div style={styles.buttonContainer}>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
};

const styles = {
  calculator: {
    width: '300px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  display: {
    minHeight: '50px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    padding: '10px',
    textAlign: 'right',
    fontSize: '24px',
  },
  result: {
    fontSize: '18px',
    color: '#888',
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
};

export default Calculator;