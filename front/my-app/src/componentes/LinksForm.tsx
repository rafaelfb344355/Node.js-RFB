import React, { useState, useEffect } from 'react';

const LinkForm: React.FC = () => {
  const [code, setCode] = useState('');
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = { code, url };

    try {
      const response = await fetch('http://localhost:3333/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const responseData = await response.json();
      setResponse(JSON.stringify(responseData));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Enviar dados para API</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label><br />
        <input type="text" id="name" value={code} onChange={(e) => setCode(e.target.value)} /><br />
        <label htmlFor="url">URL:</label><br />
        <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)} /><br /><br />
        <button type="submit">Enviar</button>
      </form>
      
      <div>{response}</div>
    </div>
  );
};

export default LinkForm;