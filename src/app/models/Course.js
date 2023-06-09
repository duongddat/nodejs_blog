import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
import mongooseDelete from 'mongoose-delete';
import Inc from 'mongoose-sequence';

const AutoIncrement = Inc(mongoose);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        //Ko dùng trường _id để mongoose tự cho _id
        _id: { type: Number },
        name: { type: String },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, require: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        //Dùng trường _id quy định _id nhận giá trị j
        _id: false,
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

export default mongoose.model('Course', Course);
