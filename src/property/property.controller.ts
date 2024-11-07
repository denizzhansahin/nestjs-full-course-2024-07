import { Controller, Get, Param, Post , Body, HttpCode} from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return "All properties"
    }


    @Get(':id/:slug')
    findOne(@Param('id') id, @Param('slug') slug){ //gelen parametreyi kullan
        return `id= ${id}, slug = ${slug}`
    }

    @Get('eski/:id/:slug')
    findOne4(@Param() id){ //parametre içinde parametre
        return id
    }


    @Get('eski/id2/:id')
    findOne1(@Param('id') id:string){ // bütün gelen parametreler
        return id
    }

    @Get(':id')
    findOne2(@Param() id){ // gelen parametre
        return id //
    }

    @Post()
    @HttpCode(202)
    create(@Body() body){ //gelen verinin hepsi
      return body 
    }

    @Post('de')
    create1(@Body("name") body){ // gelen verinin name içeriğini yansıt
      return body
    }
}
