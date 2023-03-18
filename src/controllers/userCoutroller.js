import userModel from '../models/userModel.js'

export const listAllUsers = (req, res) => {
  userModel.listAllUsers((error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result){
      if (result.length){
        res.json(result[0])
      } else{
        res.json({ message: "Nenhum usuário cadastrado!"})
      }
    }
     
  })
}

export const listId = (req, res) => {
  const idUser = req.params.id
  userModel.listId(idUser, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result)
      res.json(result)
  })
}

export const createUser = (req, res) => {
  const user = req.body
  userModel.createUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result){
      res.json({ 
        message: "Usuario Cadastrado!",
        user: {
          id: result.insertId,
          ...user
        }
      })
    }
  })
}

export const deleteUser = (req, res) => {
  const { id } = req.body
  //TODO Verificar se os dados são válidos
  userModel.deleteUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result){
      if (result.affectedRows){
        res.json({ message: "Usuario Deletado com sucesso!" })
      } else{
        res.status(404).json({ message: `Usuário ${id} não encontrado!`})
      }
    }
  })
}

export const deleteId = (req, res) => {
  const { id } = req.params
  //TODO Verificar se os dados são válidos
  userModel.deleteUser(id, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuario Deletado com sucesso!" })
      } else {
        res.status(404).json({ message: `Usuário ${id} não encontrado!` })
      }
    }
  })
}

export const updateUser = (req, res) => {
  const user = req.body
  //TODO Verificar se os dados são válidos
  userModel.updateUser(user, (error, result) => {
    if (error)
      res.status(500).json({ message: "Erro no Banco de Dados" })
    if (result) {
      if (result.affectedRows) {
        res.json({ message: "Usuario Atualizado com sucesso!" })
      } else {
        res.status(404).json({ message: `Usuário ${user.id} não encontrado!` })
      }
    }
  })
}