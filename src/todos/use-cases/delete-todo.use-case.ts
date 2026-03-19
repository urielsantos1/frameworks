import { Injectable, Logger } from "@nestjs/common";
import { DeleteTodo as DeleteTodoRepository } from "../repository";
import { FindById } from "../repository";

@Injectable()
export class DeleteTodoUseCase {
    constructor(
        private readonly deleteTodoRepository: DeleteTodoRepository,
        private readonly findByIdRepository: FindById,
        private readonly logger: Logger,
    ) {}

    async delete(id: string) {
        try {
            this.logger.log(`Iniciando exclusão do todo: ${id}`);

            
            const todo = await this.findByIdRepository.execute(id);
            if (!todo) {
                throw new Error(`Todo with id ${id} not found`);
            }

            const result = await this.deleteTodoRepository.delete(id);

            this.logger.log(`Todo ${id} deletado com sucesso`);
            return result;
        } catch (error) {
            this.logger.error(`Erro ao deletar: ${error.message}`);
            throw error;
        }
    }
}
