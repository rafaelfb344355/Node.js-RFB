import React, { useState, useEffect } from 'react';
import LinkForm from './componentes/LinksForm';
import LinkList from './componentes/LinkList';
import './App.css';

const App: React.FC = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Aqui você deve implementar a lógica para buscar os links da API e atualizar o estado 'links'
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await fetch('http://localhost:3333/api/links');
      const data = await response.json();
      // Mapeando os dados para manter apenas os parâmetros 'code' e 'original_link'
      const formattedData = data.map((link: any) => ({
        code: link.code,
        original_url: link.original_url
      }));
      setLinks(formattedData);
    } catch (error) {
      console.error('Error fetching links:', error);
    }
  };

  return (
    <div className='App-header' style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ flex: 1 }}>
        <h1>Encurtador de Links</h1>
        <LinkForm />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Lista de Links</h2>
        <LinkList links={links} />
      </div>
    </div>
  );
};

export default App;