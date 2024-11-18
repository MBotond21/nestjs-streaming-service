import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  async findAll() {
    return await this.songsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const song = this.songsService.findOne(+id);
    if(!song) throw new NotFoundException('No song with ID ' + id);
    return song;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    const song = this.songsService.update(+id, updateSongDto);
    if(!song) throw new NotFoundException('No song with ID ' + id);
    return song;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const success = this.songsService.remove(+id);
    if(!success) throw new NotFoundException('No song with ID ' + id);
  }
}
