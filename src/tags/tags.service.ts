import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as NodeID3 from 'node-id3';
import { join } from 'path';
import { ExplorerService } from '../explorer/explorer.service';

@Injectable()
export class TagsService {
  constructor(private readonly explorerService: ExplorerService) {}

  setTitleAsFileName(path: string, album?: string, withoutNumber = true) {
    const audioFiles = this.explorerService.listAudioFiles(path);
    audioFiles.forEach((file) => {
      const fullPath = join(path, file);

      const tagsPatch = {
        title: withoutNumber
          ? file.match(/[0-9] (.*)/)[1].replace('.mp3', '')
          : file,
        album,
      };
      NodeID3.update(tagsPatch, fullPath);
    });
  }

  setFileNameAsTitle(path: string) {
    const audioFiles = this.explorerService.listAudioFiles(path);
    audioFiles.forEach((file) => {
      const fullPath = join(path, file);

      const { title } = NodeID3.read(fullPath);

      fs.renameSync(fullPath, join(path, `${title}.mp3`));
    });
  }
}
