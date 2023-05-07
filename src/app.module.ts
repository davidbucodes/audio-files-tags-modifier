import { Module } from '@nestjs/common';
import { ExplorerModule } from './explorer/explorer.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [ExplorerModule, TagsModule],
})
export class AppModule {}
