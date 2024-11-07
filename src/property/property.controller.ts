import { Controller, Get, Param, Post, Body, HttpCode, ParseIntPipe, Query, ParseBoolPipe, UsePipes, ValidationPipe, Patch, Header,Headers } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createPrperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdppipe';
import { ZodValidationPipe } from './pipes/zodValidatitonPipe';
import { CreatePropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';



@Controller('property')
export class PropertyController {
    
    constructor(private readonly propertyService:PropertyService){
        
    }
    @Get()
    findAll() {
        return this.propertyService.findAll()
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id, @Query('sort',ParseBoolPipe) sort){
        return this.propertyService.findOne()
    }

    @Post()
    @UsePipes(new ZodValidationPipe(CreatePropertySchema))
    create(@Body() body:CreatePropertyZodDto)
     { //gelen verinin hepsi
        return this.propertyService.create()
    }


    @Patch(':id')
    update(@Param('id', ParseIdPipe) id,
        @Body() body: CreatePropertyDto,
        @RequestHeader(new ValidationPipe({validateCustomDecorators:true})) headers : HeadersDto //kendi yazdığımız ReauestHeader kullandık

    ) {// kendi yazdığımız pipe ile kontrol etme
        return this.propertyService.update()
    }




}


