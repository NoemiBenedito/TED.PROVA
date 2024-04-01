 import { criarFila,inserirFila,retirarFila} from './fila.js'

 let minhaFila =criarFila(5)

  inserirFila(minhaFila,"cao")
  inserirFila(minhaFila, "carro")
  inserirFila(minhaFila, "lápis")

  console.log("fila",minhaFila)


  retirarFila(minhaFila)
  retirarFila(minhaFila)
 
  console.log("fila",minhaFila)
  
  
