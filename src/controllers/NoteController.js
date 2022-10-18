const Note = require('../models/Note.js')
const { nanoid } = require('nanoid')

const getAllNotesHandler = async (request, response) => {
    try {

        const notes = await Note.findAll()
        response.send(notes)
    } catch(error) {
        console.log(error)
    }
}

const addNoteHandler = async (request, response) => {
    const { title, tags, body } = request.body

    const note_id = nanoid(16)
    const createdAt = new Date().toISOString()
    const updatedAt = createdAt

    const newNote = {
        title, tags, body, note_id, createdAt, updatedAt
    }

    try {

        const result = await Note.create(newNote)
        const isSuccess = result.dataValues?.note_id.length > 0 

        if (isSuccess) {
            response.status(201)
            return response.json({
                status: 'success',
                message: 'Catatan berhasil ditambahkan',
                data: {
                    noteId: note_id
                }
            })
        }

        response.status(500)
        response.json({
            status: 'fail',
            message: 'Catatan gagal ditambahkan'
        })
    } catch(error) {
        console.log(error)
    }
}

const editNoteByIdHandler = async (request, response) => {
    const { id } = request.params

    const { title, tags, body } = request.body
    const updatedAt = new Date().toISOString()

    try {
        const result = await Note.update({title, tags, body, updatedAt}, {
            where: {
                note_id: id
            }
        })

        const rowsAffected = result[0]

        if (rowsAffected > 0) {
            response.status(200)
            return response.json({
                status: 'success',
                message: 'Catatan berhasil diperbarui'
            })
        }

        response.status(404)
        response.json({
            status: 'fail',
            message: 'Gagal memperbarui catatan. Id tidak ditemukan'
        })
    } catch(error) {
        console.log(error)
    }
}

const deleteNoteByIdHandler = async (request, response) => {
    const { id } = request.params

    const result = await Note.destroy({
        where: {
            note_id: id
        }
    })

    const rowsAffected = result

    if (rowsAffected > 0) {
        response.status(200)
        return response.json({
            status: 'success',
            message: 'Catatan berhasil dihapus'
        })
    }

    response.status(404)
    response.json({
        status: 'fail',
        message: 'Catatan gagal dihapus. Id tidak ditemukan'
    })
}

module.exports = { 
    getAllNotesHandler, 
    addNoteHandler, 
    editNoteByIdHandler, 
    deleteNoteByIdHandler 
}