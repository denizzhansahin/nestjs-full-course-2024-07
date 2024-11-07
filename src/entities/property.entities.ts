import { InjectRepository } from "@nestjs/typeorm";
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, Repository, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { PropertyFeature } from "./propertyFeature.entity";
import { User } from "./user.entity";



@Entity()
export class Property {



    @PrimaryGeneratedColumn()
    id: number


    @Column()
    name: string

    @Column()
    description: string

    @Column({ default: 0 }) // default olarak ekleme
    price: number

    @OneToOne(() => PropertyFeature, //birebir/ sadece bir kayıt ile
        (propertyFeature) => propertyFeature.property)
    @JoinColumn()
    propertyFeature: PropertyFeature//ilişkisel veri tabanı olarak ayarlama


    @ManyToOne(()=>User,(user)=>user.properties) //çoktan bir, çok kayıtlar yalnızca tek kullanıcı içerebilir
    @JoinColumn({name:"ownerId"})
    user:User
}