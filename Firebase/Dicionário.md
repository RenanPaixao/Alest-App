# Dicionário

---

---

## **Firebase**

### Real time db

**<br>firebase.database -** acessa Real Time DB

**.ref() -** usado para referenciar o caminho do banco(rota)

**child() -** acessa o nó filho da ref passada (seta dados na rota fornecida, se for filho no filho, se não no pai msm')

---

### **Sets**

**<br>.ref().push().set() -** para setar dados em ordem (por tempo), cria um filho com o id e dentro desse filho cria o dado
**.ref().push(dado) -** faz o mesmo que o de cima, porém de forma mais curta
**.set -** substitui todo o nó
**update -** recebe somente objetos e atualiza um nó específico

---

### Snapshot

**snapshot -** Nome do dado trazido(convenção)
**snapshot.child(rota) --** retorna o filho nessa rota

    EXEMPLO: (cursos---id---tittle,price) |
    snapshot = cursos
    snapshot.child(id).val() retorna o json com tittle e price

**snapshot.exist() -** checa se o snapshot existe
**.hasChild(rota) -** checa se o filho passado existe
**hasChildren() -** checa se existe filhos
**numChildren() -** retorna quantos filhos existem
**.key -** a chave do snapshot/caminho

---

### Busca - escuta em tempo real

**<br>once(value)-** ref().once() retorna um objeto com todos os dados e vem com um for each
também retorna uma promisse que se usado snapshot.val() contém o objeto inteiro

**on('value', snapshot()=>) -** retorna todos os valores de um nó especificado, sempre que a url muda

**on('chield_added', snapshot()=>) -** retorna todos, um por vez, como se fosse um foreach

**on('chield_changed', (snapshot, uid)) -** retorna sempre quando um alguma mudança acontece, ótimo pra mensagens por exemplo

**on('chield_removed', snapshot) -** retorna sempre quando um filho direto é removido

---

### Ordenação

**ref.orderByChild('PropriedadeFilho').on() -** ordena por order da propriedade passada do filho

**OrderByKey() -** ordena de acordo com a chave e não recebe parâmetros

**orderByValue -** ordena pelo valor de cada propriedade como nó. Não vale para nós com filhos que sejam outro nós

**---------------Só é possível usar um de ordenação por vez!!!-----------------**

**orderByChild('propriedadeFilho).startAt(valor) -** trás valores a partir do valor passado

**orderByChild('propriedadeFilho).endAt(valor) -** trás valores a que estão antes do valor passado

**orderByChild('propriedadeFilho).startAt(valor).endAt(valor) -** trás valores a que estão entre os valores passados

**orderByChild('propriedadeFilho).equalsTo(valor) -** trás valores que sejam iguais ao valor passado

---

### Retirando ouvintes

**.ref.off() -** retira todos os ouvintes desse nó, mas não dos filhos. Pode receber parâmetros pra especificar

### Ativar logs

**firebase.database.enableLogging(boolean) -** Ativa logs para ajudar. Podem ser vistos no console

### Tratamento de erro

**.ref... .then().catch()** pode passar como propriedade
**.ref... .then(function, catch( (err) =>))** ou como parametro

**-------------------------------------------------Fim do RTDB--------------------------------------------------------------**

## Firestore

### Básicos

**firebase.firestore() -** acessa o firestore
**firebase.firestore().collection('valor') -** acessa a colection do valor
**firebase.firestore().collection('valor').doc('valor') -** acessa a colection do valor e o card

### Adicionar

**.doc('nome').set(dado) -** coloca o dado em um nó do documento com o nome como id, ou seja, você escolhe
**.collection('nome).add(dado) -** adiciona o dado, mas com um id aleatório e único

### Ler

**.collection('nome').get()-** pega toda a coleção, mas ainda não apenas os docs (um promisse)

**.collection('nome').get().then(snapshot =>{**

-------- **snapshot.empty** ----------------------------> aqui, um boolean pra indicar se o snapshot está vazio

-------- **snapshot.query** ----------------------------> aqui, tudo que foi feito nesse get

-------- **snapshot.size** ----------------------------> retorna o número de docs nessa coleção

-------- **snapshot.docChanges** ----------------------------> retorna um array com tudo que foi feito desde a última leitura

-------- **snapshot.docs** ----------------------------> aqui, seriam todos os cards, podendo fazer um forEach

snapshot.docs().forEach('nome'){

---------**nome.data() -** ----------------------> retorna dos dados do doc

--------- **nome.id( ) -** ----------------------> retorna o id do doc

---------**nome.isEqual(doc) -** ----------------------> retorna um booleano pra comparar se um doc na nuvem é igual ao passado e serve para coleções também

**}**

**})**

**}**

### Ler em tempo real

**.collection(nome).onSnapshot(snapshot){ -** adiciona um ouvinte a coleção

    snapshot.docChanges().forEach( card =>{

        if(card.type == 'added'){

         -   **card.doc.data()** ---------------> forma de acessar doc dentro do onSnapshot
        }
        if
    })

}

### Atualizar

**firebase.firestore().collection('nome').doc(id).update(objeto) -** atualiza todos os dados com o objeto passado e só funciona com docs. Não cria um novo

### Apagar

**firebase.firestore().collection('nome').doc(id).delete() -** Apaga um documento inteiro

**firebase.firestore().collection('nome').doc(id).update({nomeDoNó: firebase.firestore.FieldValue.delete()}) -** Apaga uma propriedade específica do documento (Observar que o firestore aqui é uma propriedade, dentro do update)

### Buscas simples e compostas

**firebase.firestore().collection('nome').where('Propriedade', >, numero) -** retorna dados que obecerem essa condição (se a propriedade fosse idade, retornaria os maiores que o número)

**firebase.firestore().collection('nome').where('Propriedade', >, numero1).where('Propriedade',<, numero2) -** pode ser encadeada com outro where e agora seria a propriedade com valor maior que o numero 1 e menor que o numero 2

### Ordenar

**firebase.firestore().collection('nome').orderBy('propriedade', 'desc').get().then() -** ordena de forma decrescente
**firebase.firestore().collection('nome').where('Propriedade', >, numero).orderBy('propriedade', 'desc') -** busca todas as propriedades e depois ordena em forma decrescente. As duas propriedades tem que ser as mesmas

### Limitar dados

**firebase.firestore().collection('nome').limit(numero).get().then() -** limita o número de objetos pelo número passado

### Filtrar

**.startAt(valor) -** começa a filtrar no valor passado
**.startAfter(valor) -** funciona como o operador >
**.endBefore(valor) -** funciona como <
**.endAt(valor) -** funciona como o operador <=

**O legal é que eles aceitam documentos .endAt(doc)**
