import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client/extension";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class DeleteTodo {
    constructor(private readonly prisma: PrismaService) {}

    async delete(id:string){
        return this.prisma.todo.delete({
            where: {id},
        });
    }
}