import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Encrypt = () => {
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');

  const history = useHistory();

  const handleEncrypt = () => {
    const encrypted = btoa(`${message}:${key}`);
    setEncryptedMessage(encrypted);
  };
// 💛🧡
  const handleReset = () => {
    setMessage('');
    setKey('');
    setEncryptedMessage('');
  };
// 💛🧡
  const goBack = () => {
    history.push('/');
  };

  return (
    <div>
      <h2>Encrypt Page</h2>
      <div>
        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <label>Key:</label>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleEncrypt}>Encrypt</button>
        <button onClick={handleReset}>Reset</button>
      </div>
        <div style={{ marginTop: '20px' }}>
          <h3>Encrypted Message:</h3>
          <p>{encryptedMessage}</p>
        </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={goBack}>Go Back</button>
      </div>
    </div>
  );
};

export default Encrypt;
