import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import LinkAux1 from '../../../components/LinkAux1';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

import styled from 'styled-components';


const ButtonSubmitForm = styled(Button)`
  background-color: var(--black);
`;

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
    url: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
  categoriasRepository
    .getAll()
    .then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
}, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        //Verificando se a categoria já foi cadastrada(Validação Simples)
        const categoriaRepetida = categorias.find((categoria) => {
          return categoria.titulo.toLowerCase() === values.titulo.toLowerCase();
        });

        if (categoriaRepetida) {
          alert("Categoria já cadastrada!");
          return;
        }
        //Fim de validação

        const link_extra = {
          text: values.descricao,
          url: values.url
        }

        const newCategoria = {
          titulo: values.titulo,
          cor: values.cor,
          link_extra,
        }

        setCategorias([
          ...categorias,
          newCategoria,
        ]);

        categoriasRepository.create(newCategoria)
          .then(() => {
            console.log('Cadastrou com sucesso!');
            //history.push('/');
          });

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          requiredField={true}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
          requiredField={true}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
          requiredField={true}
        />

        <FormField
          label="URL link extra"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
          requiredField={false}
        />

        <ButtonSubmitForm  as="button">
          Cadastrar
        </ButtonSubmitForm>
      </form>

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <LinkAux1 to="/">
        Ir para home
      </LinkAux1>
    </PageDefault>
  );
}

export default CadastroCategoria;