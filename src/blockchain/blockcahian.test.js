import Blockchain from "./blockchain";
import Block from "./block";


describe('Blockchain', () =>{

    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    it('Válida que la cadena tenga un block genesis', ()=>{
        const [genesisBlock] = blockchain.blocks;

        expect(genesisBlock).toEqual(Block.genesis);
        expect(blockchain.blocks.length).toEqual(1);
    });

    it('Funciona AddBlock()', ()=>{
        const data = 'd4t4';
        blockchain.addBlock(data);

        const [, lastBlock] = blockchain.blocks;
        expect(lastBlock.data).toEqual(data);
        expect(blockchain.blocks.length).toEqual(2);

    });

});

