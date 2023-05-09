import { Schema, model, models } from 'mongoose'

const productSchema = new Schema({
    actionUrl: {
        type: String,
        required: [true, 'url requerida'],
        trim: true
    },
    imgSrc: {
        type: String,
        required: [true, 'url de imagen requerida'],
        trim: true
    },
    alt: {
        type: String,
        required: [true, 'alt de titulo requerido'],
        trim: true
    },
    pTitulo: {
        type: String,
        required: [true, 'parrafo de titulo requerido'],
        trim: true
    },
    pDescripcion: {
        type: String,
        required: [true, 'parrafo de descripcion requerido'],
        trim: true
    },
    aff_key: {
        type: String,
        required: [true, 'aff_key requerido'],
        trim: true
    },
    source: {
        type: String,
        required: [true, 'source requerido'],
        trim: true
    },
    utm_campaign: {
        type: String,
        required: [true, 'utm_campaign requerido'],
        trim: true
    },
    utm_content: {
        type: String,
        required: [true, 'utm_content requerido'],
        trim: true
    },
    utm_source: {
        type: String,
        required: [true, 'utm_source requerido'],
        trim: true
    },
    pid: {
        type: String,
        required: [true, 'pid requerido'],
        trim: true
    },
    aid: {
        type: String,
        required: [true, 'aid requerido'],
        trim: true
    },
    cjsku: {
        type: String,
        required: [true, 'cjsku requerido'],
        trim: true
    },
    url: {
        type: String,
        required: [true, 'url requerido'],
        trim: true
    },
    submitValue: {
        type: String,
        required: [true, 'submitValue requerido'],
        trim: true
    },
    imgSrcBaja: {
        type: String,
        required: [true, 'imgSrcBaja requerido'],
        trim: true
    }    
},{
    timestamps: true
});

export default models.Producto || model('Producto', productSchema);