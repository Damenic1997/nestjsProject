import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const connectDb: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'Postgresql1997',
  port: 1997,
  host: '127.1.0.1',
  database: 'nestjs_db',
  autoLoadEntities: true,
  synchronize: true,
}
