import { IsInt, IsPositive, IsString, Length } from "class-validator"



export class CreatePropertyDto {
    //@IsString({always:true})//her zaman doğrulama yap
    @IsString()
    @Length(2,10,{message:'error on lenght'})
    name:string

    @IsString()
    @Length(2,10,{groups:['create']})
    @Length(1,15,{groups:['update']})
    description:string

    //@IsInt({always:true})
    @IsInt()
    @IsPositive()
    area:number
}