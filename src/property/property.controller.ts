import { Controller, Get, Param, Post, Body, HttpCode, ParseIntPipe, Query, ParseBoolPipe, UsePipes, ValidationPipe, Patch, Header,Headers } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createPrperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdppipe';
import { ZodValidationPipe } from './pipes/zodValidatitonPipe';
import { CreatePropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';

@Controller('property')
export class PropertyController {
    @Get()
    create() {
        return []
    }

    @Patch(':id')
    update(@Param('id', ParseIdPipe) id,
        @Body() body: CreatePropertyDto,
        @RequestHeader(new ValidationPipe({validateCustomDecorators:true})) headers : HeadersDto //kendi yazdığımız ReauestHeader kullandık

    ) {// kendi yazdığımız pipe ile kontrol etme
        return headers
    }




}



/* 
    @Get(':id')
    findOne(@Param() id){ // gelen parametre dönüştürme
        console.log(typeof Number(id))
        return id //
    }


        @Get(':id')
    findOne(@Param('id',ParseIntPipe) id, @Query('sort',ParseBoolPipe) sort){  // gelen parametre dönüştürme
        console.log(typeof id)
        console.log(typeof sort)
        return id //
    }

    npm i --save class-validator class-transformer


        @Post()
    @UsePipes(new ValidationPipe({whitelist:true}))//sadece gelen veride uygun dto al
    create(@Body() body:CreatePropertyDto) { //gelen verinin hepsi
        return body
    }


    main.ts içinde global pipes yok ise kullan : 
        @Post()//sadece gelen veride uygun dto al, uygun değil ise hata ver, dto içinde ilgili grubu etkin hale getir
    create(@Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true, groups:['create']})) body:CreatePropertyDto)
     { //gelen verinin hepsi
        return body
    }

    @Patch(':id')
    update(@Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true, groups:['update'],always:true})) body:CreatePropertyDto){
        return body
    }

    @Patch(':id')
    update(@Param(){id} :IdParamDto,@Body() body:CreatePropertyDto){//bir dto ile uygunluk kontrolü
        return body
    }

        @Post()//sadece gelen veride uygun dto al, uygun değil ise hata ver, dto içinde ilgili grubu etkin hale getir
    create(@Body() body:CreatePropertyDto)
     { //gelen verinin hepsi
        return body
    }



    npm i zod //zod ile doğrulama işlemi
        @Get()
    findAll() {
        return "All properties"
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {  // gelen parametre dönüştürme
        console.log(typeof id)
        console.log(typeof sort)
        return id //
    }

    @Post()
    @UsePipes(new ZodValidationPipe(CreatePropertySchema))
    create(@Body() body:CreatePropertyZodDto)
     { //gelen verinin hepsi
        return body
    }

    @Patch(':id')
    update(@Param('id', ParseIdPipe) id,@Body() body:CreatePropertyDto){// kendi yazdığımız pipe ile kontrol etme
        return body
    }


    headers:
        @Patch(':id')
    update(@Param('id', ParseIdPipe) id,
        @Body() body: CreatePropertyDto,
        @Headers() headers

    ) {// kendi yazdığımız pipe ile kontrol etme
        return headers
    }
*/



/*



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

    */