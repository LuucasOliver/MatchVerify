# MatchVerify
Projeto elaborado em conjunto aos alunos da unimetrocamp

## Dados do Cliente
- **Título do Projeto:** MatchVerify  
  (Tem a finalidade de resolver um problema de controle de recebimento e entrega de correspondências que são recebidas e retiradas pelos correios da empresa.)  
- **Cliente:** GrupoNC  
- **CNPJ/CPF:** 475.383.608-83  
- **Contato:** Matheus Marques  
- **E-mail do contato:** matheus.marques@ems.com.br  

---

## Equipe de Desenvolvimento
| Nome Completo                  | Curso                                | Disciplina                              |
|--------------------------------|--------------------------------------|-----------------------------------------|
| Lucas Guthierrez Oliver        | Análise e Desenvolvimento de Sistemas | Padrões de Projetos de Software com Java |
| Fernando Ferreira da Silva     | Análise e Desenvolvimento de Sistemas | Padrões de Projetos de Software com Java |
| Tonislau Domingos Quissanga    | Análise e Desenvolvimento de Sistemas | Padrões de Projetos de Software com Java |

**Professor Orientador:** Prof. Kesede Rodrigues Julio  

---

## Introdução
A área dos correios da EMS (GrupoNC) enfrenta um grande problema organizacional com relação ao recebimento e retirada de encomendas pelos funcionários. Nosso objetivo, alinhado com o cliente, é desenvolver um software em Java que supra essa demanda organizacional, facilitando o recebimento e a retirada das encomendas.

---

## Objetivo
Desenvolver um software que registre o que foi recebido e o que foi retirado, além de notificar o funcionário responsável por meio de alertas.

---

## Escopo
- **UI para o cliente:** Interface para visualização das encomendas recebidas.  
- **Alertas de retirada:** Notificações para os funcionários responsáveis.  
- **Banco de dados:** Implementação de um banco de dados para armazenar as informações das encomendas.  

---

## Backlog do Produto
- **Criação do bando de dados:** Armarzenar as informações seja de loging quanto as informações dos itens recebidos pela equipe que gere o software.
- **Criação do Front-End:** Tela aonde o cliente irá ter acesso a todas as funcionalidades de registro do itens e observações.
- **Criação da API Rest em Java:** API responsalvel por toda a dinamina de interração com o banco de dados para armazenamento dos dados e exibição no front-end.
- **Criação da tela CRUD:** Tela responsável pelo o acesso dos usuarios na plataforma.
---

## Cronograma
| Atividades                 | Responsabilidade                               | Prazo                             |
|--------------------------------|--------------------------------------|-----------------------------------------|
| Criação do Front-end    | Criar as telas principais e de login | Uma semana |
| Criação da API REST    | Criar a API que irá conversar com o front e back-end | Duas semanas |
| Criação do banco de dados    | Criar o banco para armazenamento das informações | Uma semana |

---

## Materiais e Métodos
### Modelagem do Sistema
https://ibb.co/XZz4DW99
### Tecnologias Utilizadas
- **Front-End:** Vue.js | Node
- **Back-End | API REST:** Java 21 | Spring Boot 3.2.3 | Maven
- **Banco de dados:** PostgreSQL (Supabase)
### Arquitetura do Sistema
https://ibb.co/JR86sTYd

---

## Resultados
### Protótipo
- **Tela Principal:** https://ibb.co/3y1nCwG4
Tela aonde o cliente tem o acesso completo do cadastro dos itens que são recebidos na plataforma.
### Códigos das Principais Funcionalidades
/*
  Função para redefinir o formulário para o estado padrão.
  Define delivery_time com a data e hora atuais.
*/
const resetForm = () => {
  Object.assign(formData, defaultFormState)
  formData.delivery_time = format(new Date(), "yyyy-MM-dd'T'HH:mm")
}

/*
  Função assíncrona para enviar o formulário.
  Realiza validações nos campos obrigatórios:
  - package_name: obrigatório
  - owner_name: obrigatório
  - delivery_time: obrigatório
  
  Se todos os campos forem válidos, define isSubmitting como true.
*/
const submitForm = async () => {
  formError.value = ''
  successMessage.value = ''
  
  // Validação
  if (!formData.package_name.trim()) {
    formError.value = 'Descrição da encomenda é obrigatória'
    return
  }
  
  if (!formData.owner_name.trim()) {
    formError.value = 'Nome do destinatário é obrigatório'
    return
  }
  
  if (!formData.delivery_time) {
    formError.value = 'Data e hora são obrigatórios'
    return
  }
  
  isSubmitting.value = true
}

---

## Conclusão
### Impacto do Sistema
O sistema impactou diretamente no dia a dia do cliente, até mesmo melhorando sua produtividade durante o seu horario de trabalho.
### Melhorias Futuras
- **Criação de Alertas para o software, novas features para o software.**
---

## Homologação do MVP junto ao Cliente
Após as entregas parciais, realizadas de acordo com os requisitos do sistema e cronograma, o MVP foi apresentado em uma reunião entre o time de desenvolvedores e o cliente.

https://ibb.co/QFRZNzVK

https://ibb.co/tPhh3HzX

---

## Divulgação
### LinkedIn do Projeto

Projetos

https://www.linkedin.com/in/lucas-guthierrez-oliver/

---

## Seminário de Projetos de Software
### Vídeo da Apresentação

https://ibb.co/QFRZNzVK

https://ibb.co/tPhh3HzX

---

## FENETEC: Feira de Negócios em Tecnologia
### Apresentação do Projeto
https://ibb.co/tPhh3HzX
