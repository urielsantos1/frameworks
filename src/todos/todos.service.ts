import { Injectable, Logger } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { createTodoUsecase, DeleteTodoUseCase, FindAllUseCase, FindByIdService, UpdateTodoUseCase } from './use-cases';

@Injectable()
export class TodosService {

  constructor(
  private readonly logger: Logger,
  private readonly createtodousecase: createTodoUsecase,
  private readonly findalltodousecase: FindAllUseCase,
  private readonly findbyidtodousecase: FindByIdService,
  private readonly updatetodousecase: UpdateTodoUseCase,
  private readonly deletetodousecase: DeleteTodoUseCase,
) {}
  async create(data: CreateTodoDto ) {
    return await this.createtodousecase.execute(data);
  }

  async findAll() {
    return await this.findalltodousecase.execute();
  }

  async findOne(id: string) {
    return await this.findbyidtodousecase.achartodo(id);
  }

  async update(id: string, data: UpdateTodoDto) {
    return await this.updatetodousecase.update(id, data);
  }

  async remove(id: string) {
    return await this.deletetodousecase.delete(id);
  }
}
