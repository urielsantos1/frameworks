import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodosRepository } from "../repository";


@Injectable()
export class FindAll {
  constructor(
    private readonly findall: FindAllTodosRepository,
    private readonly logger: Logger,
  ) {}

  async achartodo() {
    try {
      this.logger.log(`Puxando todos`);

      const result = await this.findall.execute();

      this.logger.log(`Itens encontrados com sucesso`);
      return result;
    } catch (error) {
      this.logger.error(`Erro ao encontrar itens: ${error.message}`);
      throw error;
    }
  }
}