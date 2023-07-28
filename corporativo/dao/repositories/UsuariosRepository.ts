import { Usuario } from "../entity/Usuario";
import { CorporativoDataSource } from "../data-source";

export const UsuarioRespository = CorporativoDataSource.getRepository(Usuario).extend({ 
    listarUmPorIdQB(id: number){
        return UsuarioRespository.createQueryBuilder("usuario")
        .where("usuario.id = :id", { id: id })
        //.leftJoinAndSelect("usuario.fotos", "fotos")
        //.addSelect(["fotos.id", "fotos.descricao"])
        .getOne()
    },
    listarUmPorIdFind(id: number){
        return UsuarioRespository.findOne({
            where: {id: id}, 
        //    relations: {fotos: true},
            select: {id : true, nome:true/*, fotos:{id:true, descricao:true}*/},

        })
    },
    verificarSeExiste(id: number){
        return UsuarioRespository.exist({where: {id: id}})
    },
    listar(){
        return UsuarioRespository.find()
    }
})