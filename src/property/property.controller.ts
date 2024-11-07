import { Controller, Get, Param, Post, Body, HttpCode, ParseIntPipe, Query, ParseBoolPipe, UsePipes, ValidationPipe, Patch, Header,Headers, Delete } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createPrperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdppipe';
import { ZodValidationPipe } from './pipes/zodValidatitonPipe';
import { CreatePropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';
import { PaginationDTO } from './dto/pagination.dto';



@Controller('property')
export class PropertyController {
    
    constructor(private readonly propertyService:PropertyService){
        
    }
    @Get()
    findAll(@Query() paginationDTO:PaginationDTO) {
        return this.propertyService.findAll(paginationDTO)
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id){
        return this.propertyService.findOne(id)
    }

    @Post()
    //@UsePipes(new ZodValidationPipe(CreatePropertySchema))
    create(@Body() dto:CreatePropertyDto)
     { //gelen verinin hepsi
        return this.propertyService.create(dto)
    }


    @Patch(':id')
    update(@Param('id', ParseIdPipe) id,
        @Body() body: CreatePropertyDto,
         //kendi yazdığımız ReauestHeader kullandık

    ) {// kendi yazdığımız pipe ile kontrol etme
        return this.propertyService.update(id,body)
    }

    @Delete(':id')
    delete(@Param('id', ParseIdPipe) id){
        return this.propertyService.delete(id)
    }


}


