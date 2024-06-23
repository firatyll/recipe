const mongoose = require('mongoose');

exports.connect = async()=>{
    try {
        await mongoose.connect(process.env.DBURL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error);
    }
};