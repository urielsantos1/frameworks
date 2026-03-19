import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodosRepository } from "../repository";


@Injectable()
export class FindAll {

  constructor(
     private readonly findAllTodosRepository: FindAllTodosRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      this.logger.log(`Puxando todos`);

         const result = await this.findAllTodosRepository.findMany();

      this.logger.log(`Itens encontrados com sucesso`);
      if (!result) {this.logger.error(`nenhum item encontrado`)}
      return result;
    } catch (error) {
      this.logger.error(`Erro ao encontrar itens: ${error.message}`);
      throw error;
    }
  }
}