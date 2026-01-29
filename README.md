# Treinamento E-Commerce fake

## Task: Criar o arquivo api.ts e definir as interfaces TypeScript.

Responsabilidades:

* Definir a interface Product e CreateProductDTO.
* Criar uma função assíncrona para o GET (fetchProducts).
* Criar uma função assíncrona para o POST (addProduct).
* Garantir que as funções retornem tipos Promise baseados nas interfaces.

## Task: Criar o componente ProductList.tsx.

Responsabilidades:

* Usar useEffect para chamar a função de GET criada pelo Aluno 1.
* Gerenciar o estado de loading (exibir "Carregando..." enquanto a API não responde).
* Mapear o array de produtos para exibir Cards simples com título e preço.

## Task: Criar o componente AddProductForm.tsx.

Responsabilidades:

* Criar um formulário com inputs tipados para title e price.
* Capturar o evento de submit e evitar o refresh da página.
* Chamar a função de POST criada pelo Aluno 1, enviando o corpo da requisição corretamente formatado em JSON.

## Task: Organizar o App.tsx e gerenciar feedbacks globais e erros.

Responsabilidades:

* Unir os componentes dos Alunos 2 e 3 em um layout limpo.
* Adicionar um tratamento de erro caso a API falhe, exibindo um alerta para o usuário.
