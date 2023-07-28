import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity({ name: "USUARIO", schema: "CORPORATIVO"})
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column({nullable:true})
    email: string

    @Column({nullable: true})
    senha: string
}
    //mudar o campo entites no data-source.ts para : entities: [`${__dirname}/entity/**/*[.ts,.js]`],
    //@OneToMany(() => Fotos, (fotos) => fotos.usuario)
    //fotos: Fotos[]