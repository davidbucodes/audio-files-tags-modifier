import { Module } from '@nestjs/common';
import { ExplorerModule } from '../explorer/explorer.module';
import { TagsService } from './tags.service';

@Module({
  providers: [TagsService],
  imports: [ExplorerModule],
})
export class TagsModule {}
