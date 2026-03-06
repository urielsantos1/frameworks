import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client/extension";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class FindById {
    constructor(private readonly prisma: PrismaService) {}

    async execute(id: string){
        return this.prisma.todo.findUnique({
            id
        });
    }
}