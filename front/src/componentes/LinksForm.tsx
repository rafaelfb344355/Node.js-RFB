import React, { useState } from 'react';


const LinksForm: React.FC = () => {
  const [code, setCode] = useState('');
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      code,
      url
    };

    try {
      await fetch('http://localhost:3333/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Reset form fields
      setCode('');
      setUrl('');

      // Show success message
      setSuccessMessage('Link encurtado com sucesso!');

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Enviar dados para API</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="code">Código:</label><br />
        <input type="text" id="code" value={code} onChange={(e) => setCode(e.target.value)} /><br />
        <label htmlFor="url">URL:</label><br />
        <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)} /><br /><br />
        <button type="submit">Enviar</button>
      </form>

      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {response && <div>Response: {response}</div>}
    </div>
  );
};

export default LinksForm;