import { InjectRepository } from "@nestjs/typeorm";
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Entity, PrimaryColumn, PrimaryGeneratedColumn , Column, Repository } from "typeorm";



@Entity()
export class Property {

    

    @PrimaryGeneratedColumn()
    id:number


    @Column()
    name:string

    @Column()
    description:string

    @Column({default:0}) // default olarak ekleme
    price:number
}