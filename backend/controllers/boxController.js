import mongoose from 'mongoose';
import {BoxSchema} from '../models/boxModel';

const Box = mongoose.model('Box', BoxSchema);
const boxId = '5ec5f2c8d7894f0e44deb0b9';

export const  updateBoxSize = (req, res) => {
    Box.findOneAndUpdate({ _id: boxId}, req.body, {new: true}, (err, Box) => {
        if (err) {
            res.send(err); // display error
        }
        res.json(Box); // return the result
    });
};

export const  getBoxSize = (req, res) => {
    Box.find({}, (err, Box) => {
        if (err) {
            res.send(err);
        }
        res.json(Box);
    });
};