import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client/extension";




import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateTodoDto } from "../dto/update-todo.dto";


@Injectable()
export class UpdateTodo {
    constructor(private readonly prisma: PrismaService) {}

    async update( id: string, data: UpdateTodoDto){
        return await this.prisma.todo.update({
            where: {
                id: id,
            },
            data: data,
            
        });
    }
}