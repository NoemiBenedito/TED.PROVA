export function criarFila(tamanho=5){
    return [... new Array(tamanho)]
}
 let minhaFila=criarFila(5)
 console.log(minhaFila)


 export function inserirFila(item,fila){
    let pedaco=fila.indexOf(undefined)
    if(pedaco!==-1){
        fila[pedaco]=item 
        return


    }
 }

export function retirarFila(fila){
     if(fila[0]===undefined){
        console.log("fila vazia")
        return
        }
        let itemPegado=fila[0]

        for(let i=0;i<fila.length;i++){
         fila[i]=fila[i+1]
        }

        return itemPegado 
    }

