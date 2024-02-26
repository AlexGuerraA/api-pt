const DevModels = require('../models/development.models.js')

exports.index = async (req, res) => {
    try {
        const dev = await DevModels.find()
        res.status(200).json({
            status: 'success',
            data: dev
        })
    } catch (error) {
        //?Mostramos los errores en consola 
        console.log('Dev-index: ', error)
        //? Enviamos los errores en la respuesta
        res.status(400).json({
            status:'error',
            message:'Error al mostrar los Devs en index: ' + error
        })
    }
}

exports.create = async (req, res) => { 
    const data = req.body
    try {
        const dev = new DevModels(data)
        await dev.save()
        res.status(200).json({
            status:'success',
            data: dev
        })
    } catch (error) {
        //?Mostramos los errores en consola 
        console.log('Dev-create: ', error)
        //? Enviamos los errores en la respuesta
        res.status(400).json({
            status:'error',
            message:'Error al crear al Devs en create: ' + error
        })
    }
}

exports.update = async (req, res ) => {
    const {id} = req.params
    const data = req.body
    try {
        const dev = await DevModels.findByIdAndUpdate(id, data, {new:true})
        //? Enviamos la respuesta con el usuario actualizado
        res.status(200).json({
            status: 'success',
            data: dev
        })
    } catch (error) {
        //?Mostramos los errores en consola 
        console.log('Dev-update: ', error)
        //? Enviamos los errores en la respuesta
        res.status(400).json({
            status:'error',
            message:'Error al actualizar al Devs en update: ' + error
        })
    }
}

exports.remove = async (req, res) => {
    const {id} = req.params
    try {
        await DevModels.findByIdAndDelete(id)
        res.status(200).json({
            status: 'success',
            id
        })
    } catch (error) {
         //?Mostramos los errores en consola 
         console.log('Dev-remove: ', error)
         //? Enviamos los errores en la respuesta
         res.status(400).json({
             status:'error',
             message:'Error al eliminar al Devs en remove: ' + error
         })
    }
}