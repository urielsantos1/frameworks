import { Injectable, Logger } from "@nestjs/common";
import { FindById } from "../repository";

@Injectable()
export class FindByIdService {
  constructor(
    private readonly findByIdRepository: FindById,
    private readonly logger: Logger,
  ) {}

  async achartodo(id: string) {
    try {
      this.logger.log(`Procurando item ${id}`);

      const result = await this.findByIdRepository.execute(id);

      this.logger.log(`Item ${id} encontrado com sucesso`);
      return result;
    } catch (error) {
      this.logger.error(`Erro ao encontrar item: ${error.message}`);
      throw error;
    }
  }
}