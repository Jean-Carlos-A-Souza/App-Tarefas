App de Gerenciamento de Tarefas 
Esse app foi criado usando o React Native e Expo, o app foi testado em um emulador Android no Windows, caso for usar em apple, pode apresentar algumas inconsistências.
Uma vez que o clone do repositório esteja feito execute o comando “npm install”, para instalar todos os pacotes necessários, após o termino da instalação dos pacotes é só executar a “expo start” para iniciar o app.
Com o app iniciado a primeira tela que será aberta é o “Login”, nesta tela terá 2 campos de input, um deles sendo e-mail e outro senha, os campos possuem validações simples de preenchimento e estrutura, no momento a tela de login não esta vinculada com nenhuma api para um validação real, então para simulação usar o e-mail “teste@gmail.com” e a senha “123456”, para realizar o login, qualquer outro login não funcionara. As opções “Esqueceu senha” e “Criar conta”, são meramente estéticas.
Após o login ser feito será apresentado a tela principal do app, qual assim que é aberta já fara uma consulta em um api, para montar as primeiras tarefas, as tarefas criadas com base na api serão somente para exibição, a tela principal do app é composta por um campo de busca, com isso o usuário consegue filtras as tarefas, tanto a criada por ele, quando as que foram carregados da api. Na sequência do filtro de busca que vai permitir filtrar qual o status atual da tarefa, esses status só serão atribuídos as tarefas criadas pelo usuário. Abaixo dos filtros vem a lista de tarefas, a qual vai exibir todas as tarefas, tanto as que vieram da api quando a que o usuário criou, no caso das que foram criadas pelo usuário, elas terão cores diferente das que foram carregadas da api, essas cores serão definidas com base no status atual da tarefa, se a tarefa estiver em dia a cor é azul, caso esteja atrasada é vermelho e caso já tenha sido concluída é verde. E no final dá tela terá um menu, o qual terá 3 opções para interagir, sendo elas, a primeira que é o botão “home” que é a pagina inicial do app, a segunda e a que mais se destaca um botão redondo com um “+” no centro, esse botão serve para adicionar um nova tarefa a lista, quando acionado abre um modal para o usuário inserir as informações da tarefa como “Titulo”, “Descrição” e “Data”, e por fim a ultima opção do menu inferior da tela, e a tela de informações do aplicativo, nela é listada algumas informações e um botão de sair do aplicativo e voltar para a tela de login.
Cada item que o usuário criar que é adicionada a lista de tarefas, é validado automaticamente o status atual da tarefa, com base na “Data” informa no momento da criação e comparando com a data atual, caso a data informada na criação seja mais a frente da data atual o card fica azul, caso contrario fica vermelho. Quando interagido sobre algumas das tarefas criadas pelo usuário será aberto uma nova tela para que o usuário posso atualizar as informações e status da tarefa, nessa tela de edição é possível alterar todas as informações da tarefa, além de informar se a mesma foi concluída ou não, e por fim salvar as alterações feitas ou excluir a tarefa.  


* -- Pacotes Necessários -- *

  React Navigation 
  npm install @react-navigation/native

Stack Navigation 
  npm install @react-navigation/stack

Gesture Handler
  npx expo install react-native-gesture-handler

Bottom Tabs 
  npm install @react-navigation/bottom-tabs

Axios
  npm install axios

Modalize 
  npm install react-native-modalize

Async Storage
  npm i @react-native-async-storage/async-storage
