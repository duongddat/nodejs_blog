import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, match: '/^.{0,225}$/' },
    description: { type: String, match: '/^.{0,225}$/' },
    image: { type: String, match: '/^.{0,225}$/' },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    slug: { type: String, match: '/^.{0,225}$/' },
});

export default mongoose.model('Course', Course);
