import mongoose from 'mongoose'


const connectDB = async () => {
	try{
	 await mongoose.connect(process.env.MONGO_STRING_CONN)
		console.log('MongoDB connected successfully')
	}catch(err){
		console.log(err)
		process.exit(1)
	
	}
}

export default connectDB;