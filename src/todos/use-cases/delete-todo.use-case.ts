import { Injectable, Logger } from "@nestjs/common";
import { createTodoRepository } from "./create-todo.use-case";

 

@Injectable()
export class DeleteTodo {
    constructor(
        
        private readonly deletetodo: DeleteTodo, 
        private readonly logger: Logger,
    ) {}

    async deletetodoteste(id: string) { 
        try {
            this.logger.log(`Iniciando exclusão do todo: ${id}`);
            

            const result = await this.deletetodo.delete(id);
            
            this.logger.log('Todo deleted successfully');
            return result;
        } catch (error) {
            this.logger.error(`Erro ao deletar: ${error.message}`);
            throw new Error('Failed to delete todo');
        }
    } 
    delete(id: string) {
        throw new Error("Method not implemented.");
    }
}
