import IProjeto from "./IProjeto";

export default interface ITarefa {
    descricao: string;
    tempoGasto: string;
    projeto: IProjeto;
}