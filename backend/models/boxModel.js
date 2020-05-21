import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BoxSchema = new Schema({
    size: {
        type:Number,
        require:true
    }
});