import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/HoyoCourse_de');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure');
    }
}

export default { connect };
