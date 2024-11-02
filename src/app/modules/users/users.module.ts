import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './persistence/user.entity';
import { ConfigModule } from '@nestjs/config';
import { UserGetController } from './controllers/user-get.controller';
import { UserFinderService } from './services/user-finder.service';
import { UserRepository } from './persistence/user-typeorm.repository';
import { UserCreatorService } from './services/user-creator.service';
import { UserPostController } from './controllers/user-post.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserGetController, UserPostController],
    providers: [UserFinderService, UserRepository, UserCreatorService],
    exports: [],
})
export class UsersModule {}
