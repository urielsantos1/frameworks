import { Injectable, Logger } from "@nestjs/common";
import { FindById } from "../repository";
import { UpdateTodo as UpdateTodoRepository } from "../repository";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class UpdateTodoUseCase {
    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly findByIdRepository: FindById,
        private readonly logger: Logger,
    ) {}

    async update(id: string, data: UpdateTodoDto) {
           try { this.logger.log(`Atualizando item ${id}`)

           const todo = await this.findByIdRepository.execute(id);
           if (!todo){
            throw Error(`todo com id ${id} nao existe`)
           }
            else {
                const result = await this.updateTodoRepository.update(id,data);
                this.logger.log(`Item ${id} atualizado com sucesso`);
                return result;
            }
        } catch (error) {
            this.logger.error(`erro ao atualizar item: ${error.message}`)
            throw error;
            
        }
    }
}