import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entities";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string

    @Column()
    lastName:string

    @Column()
    email:string

    @Column()
    avatarUrl:string

    @CreateDateColumn()
    createdAt:Date

    @OneToMany(()=>Property, (property)=>property.user) //birden çok, bir kayıt çok kayıt alabilir
    //@JoinColumn()
    properties: Property[]


    @ManyToMany(()=>Property,(property)=>property.likedBy) //bir veri çok ile ilgili olabilir, çoktan çoka
    @JoinTable({name:"user_liked_properties"})
    likedProperties: Property[]
}