import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client/extension";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class FindAllTodosRepository {
    findMany: any;
    constructor(private readonly prisma: PrismaService) {}

    async FindMany(){
        return this.prisma.Todo.findMany();
    }
}