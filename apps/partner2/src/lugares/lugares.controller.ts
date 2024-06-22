import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { SpotsService } from '@app/core/spots/spots.service';
import { CriarLugarRequest } from './request/criar-lugar.request';
import { AtualizarLugarRequest } from './request/atualizar-lugar.request';

@Controller('eventos/:idEvento/lugares')
export class LugaresController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() criarLugarRequest: CriarLugarRequest,
    @Param('idEvento') idEvento: string,
  ) {
    return this.spotsService.create({
      name: criarLugarRequest.nome,
      eventId: idEvento,
    });
  }

  @Get()
  findAll(@Param('idEvento') idEvento: string) {
    return this.spotsService.findAll(idEvento);
  }

  @Get(':idLugar')
  findOne(@Param('id') idLugar: string, @Param('idEvento') idEvento: string) {
    return this.spotsService.findOne(idEvento, idLugar);
  }

  @Patch(':id')
  update(
    @Param('id') idLugar: string,
    @Param('idEvento') idEvento: string,
    @Body() atualizarLugarRequest: AtualizarLugarRequest,
  ) {
    return this.spotsService.update(idEvento, idLugar, {
      name: atualizarLugarRequest.nome,
    });
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') idLugar: string, @Param('idEvento') idEvento: string) {
    return this.spotsService.remove(idEvento, idLugar);
  }
}
