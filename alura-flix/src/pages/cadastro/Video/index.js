import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const Button1 = styled(Button)`
  margin-bottom: 50px;
`;

const Select = styled.select`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 16px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
`

function CadastroVideo() {
  const valoresIniciais = {
    titulo: '',
    url: ''
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value,
      );
    }
    
    useEffect(() => {
      if (window.location.href.includes('localhost')) {
        const URL = 'http://localhost:8080/categorias';  //URL = window.location.href.includes('localhost') ? 'http://localhost:8080/categorias' : 'outra url'
        fetch(URL)
          .then(async (respostaDoServer) => {
            if (respostaDoServer.ok) {
              const resposta = await respostaDoServer.json();
              setCategorias(resposta);
              return;
            }
            throw new Error('Não foi possível pegar os dados');
          });
      }
    }, []);

  function setValue(chave, valor) {
    // chave: nome, descricao
    setValues({
      ...values,
      [chave]: valor, // nome: "valor"
    });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setValues(valoresIniciais);
      }}
      >
        <FormField
            label="Título"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          

        <Select>
          {categorias.map((categoria, indice) => (
            <option key={`${categoria}${indice}`} value={categoria.titulo}>
              {categoria.titulo}
            </option>
          ))}
        </Select>
          
        <Button1>Cadastrar Vídeo</Button1>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>


    

    </PageDefault>
  )
}

export default CadastroVideo; 