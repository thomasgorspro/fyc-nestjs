import { Controller, Get, Post, Body, Param, Delete, Put, Query, ValidationPipe } from '@nestjs/common';
import { TeaService } from './tea.service';
import { Tea } from './tea.interface';
import { CreateTeaDto } from './dto/create-tea.dto';
import { UpdateTeaDto } from './dto/update-tea.dto';

@Controller('tea')
export class TeaController {
  constructor(private readonly teaService: TeaService) {}

  @Get()
  async findAll(@Query('flavour') flavour: string): Promise<Tea[]> {
    return this.teaService.findAll(flavour);
  }

  @Post()
  async create(@Body(ValidationPipe) createTeaDto: CreateTeaDto): Promise<void> {
    this.teaService.create(createTeaDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Tea> {
    return this.teaService.findById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    this.teaService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTeaDto: UpdateTeaDto): Promise<void> {
    this.teaService.update(id, updateTeaDto);
  }
}
