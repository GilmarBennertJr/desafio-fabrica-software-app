export class Filter {
    constructor(
        public size:number,
        public page:number,
        public status:string,
        public solicitante:string,
        public descricaoProduto:string
    ){}

    getQuery():String {
        return `size=${this.size}&&page=${this.page}&&status=${this.status}&&solicitante=${this.solicitante}&&descricaoProduto=${this.descricaoProduto}`
    }
    
}