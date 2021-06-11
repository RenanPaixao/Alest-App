#ENFIM, O FIM!

A duas semanas mais ou menos, participei de um teste para um estágio na empresa Alest. Não tinha ido a fundo em **Backend** e não consegui chegar perto de conseguir finalizar(existe outro markdown aqui resumindo como foi). Após o fim do tempo para entrega do desafio, continuei tentando e consegui terminar.

##DESAFIO
Construir uma aplicação que permita visualizar, adicionar, remover e atualizar produtos (CRUD) em **React** ou **Angular**, através de uma API HTTP criada por mim, onde os dados fossem gravados no **Cloud Firestore**. O tempo era de **72hrs**. 

As tecnologias sugeridas foram **NodeJS** ou **Typescript** utilizando o framework **Express**.

##TECNOLOGIAS PRESENTES

**-Node.js**
**-Cloud Firestore | Firebase**
**-React.js**

##NECESSÁRIO

**-Yarn**
**-Projeto Web no Firebase**

##INSTALAÇÃO
Ao iniciar, deve-se entrar na pasta app do projeto com seu console de preferência e com o **yarn** instalado para usar o comando **yarn install** e instalar as dependências.
Após isso, criar um arquivo com o nome de **".env"** e dentro dele, seguir o modelo do arquivo **".envSample"**, usando suas configs do seu projeto **Firebase**. Após isso, criar um arquivo de texto com sua autorização de uso, gerada no site do **Firebase**, para usar no arquivo DB.js **(app/src/API/Data/DB.js)** na parte de **credentials**, onde no meu caso tinha o nome de auth.
