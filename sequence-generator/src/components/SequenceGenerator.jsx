import React, { useState } from 'react';
import '../App.css';

const SequenceGenerator = () => {
  const [type, setType] = useState('arithmetic');
  const [firstTerm, setFirstTerm] = useState('');
  const [differenceOrRatio, setDifferenceOrRatio] = useState('');
  const [numTerms, setNumTerms] = useState('');
  const [sequence, setSequence] = useState([]);
  const [result, setResult] = useState(null);

  const generateSequence = () => {
    const a = parseFloat(firstTerm);
    const dOrR = parseFloat(differenceOrRatio);
    const n = parseInt(numTerms);

    if (isNaN(a) || isNaN(dOrR) || isNaN(n) || n <= 0) {
      alert('Please enter valid numeric inputs.');
      return;
    }

    let seq = [];
    if (type === 'arithmetic') {
      for (let i = 0; i < n; i++) {
        seq.push(a + i * dOrR);
      }
      const sum = seq.reduce((acc, val) => acc + val, 0);
      setSequence(seq);
      setResult(`Sum: ${sum}`);
    } else {
      for (let i = 0; i < n; i++) {
        seq.push(a * Math.pow(dOrR, i));
      }
      const product = seq.reduce((acc, val) => acc * val, 1);
      setSequence(seq);
      setResult(`Product: ${product}`);
    }
  };

  return (
    <div className="container">
      <h2>Sequence Generator</h2>

      <label>
        Select Sequence Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="arithmetic">Arithmetic</option>
          <option value="geometric">Geometric</option>
        </select>
      </label>

      <label>
        First Term:
        <input type="number" value={firstTerm} onChange={(e) => setFirstTerm(e.target.value)} />
      </label>

      <label>
        {type === 'arithmetic' ? 'Common Difference' : 'Common Ratio'}:
        <input type="number" value={differenceOrRatio} onChange={(e) => setDifferenceOrRatio(e.target.value)} />
      </label>

      <label>
        Number of Terms:
        <input type="number" value={numTerms} onChange={(e) => setNumTerms(e.target.value)} />
      </label>

      <button onClick={generateSequence}>Generate Sequence</button>

      {sequence.length > 0 && (
        <div className="output">
          <h3>Generated Sequence:</h3>
          <p>{sequence.join(', ')}</p>
          <strong>{result}</strong>
        </div>
      )}
    </div>
  );
};

export default SequenceGenerator;
