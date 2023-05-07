import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExplorerModule } from './explorer/explorer.module';
import { FileModule } from './file/file.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [ExplorerModule, FileModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
