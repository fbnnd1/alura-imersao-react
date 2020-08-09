import React from 'react';
import styled from 'styled-components';

import PageDefault from '../../components/PageDefault';

import './style.css';

const Wrapper1 = styled.div`
  background-color: var(--black);
  color: var(--white);
  height: auto;
  min-height: 70vh;
  padding: 0% 5% 0% 5%;
  width:100%;
`;

function Page404() {
    return  (
        <PageDefault>
            <Wrapper1>
               <h1>Página não encontrada!</h1>

                <iframe src="https://editor.p5js.org/fbnnd3/embed/QZiWjlb9d" title="As aventuras de hisptar"></iframe>
            
            </Wrapper1>
        </PageDefault>
    );
}

export default Page404;