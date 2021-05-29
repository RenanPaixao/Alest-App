# Dicionário

---

---

## **Firebase**

**<br>firebase.database -** acessa Real Time DB

**.ref()** usado para referenciar o caminho do banco(rota)

**child()** acessa o nó filho da ref passada (seta dados na rota fornecida, se for filho no filho, se não no pai msm')

---

### **Sets**

**<br>.ref().push().set()** para setar dados em ordem (por tempo), cria um filho com o id e dentro desse filho cria o dado

---

### Busca

**<br>once(value)-** ref().once() retorna um objeto com todos os dados e vem com um for each
também retorna uma promisse que se usado snapshot.val() contém o objeto inteiro
