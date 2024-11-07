import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entities";
import { User } from "./user.entity";


@Entity()
export class PropertyFeature{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    bedrooms:number

    @Column()
    bathrooms:number 

    @Column()
    parkingSpots:number

    @Column()
    area:number

    @Column()
    hasBalcony:number 

    @Column()
    hasGardenYard:boolean

    @Column()
    hasSwimmingPool:boolean

    @OneToOne(()=>Property, (property)=>property.propertyFeature,{cascade:true})//birebir/ sadece bir kayıt ile
    @JoinColumn()
    property:Property



}