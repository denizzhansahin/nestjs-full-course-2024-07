import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property.entities";


import * as bcrypt from "bcrypt"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column({default:"/"})
    avatarUrl: string

    @CreateDateColumn()
    createdAt: Date

    @Column()
    //@JoinColumn()
    password: string

    @OneToMany(() => Property, (property) => property.user) //birden çok, bir kayıt çok kayıt alabilir
    //@JoinColumn()
    properties: Property[]


    @ManyToMany(() => Property, (property) => property.likedBy) //bir veri çok ile ilgili olabilir, çoktan çoka
    @JoinTable({ name: "user_liked_properties" })
    likedProperties: Property[]

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10)
    }
}