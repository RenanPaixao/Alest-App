# Dicionário

---

---

## **Firebase**

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
