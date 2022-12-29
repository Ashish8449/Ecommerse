import mongoose from 'mongoose'
const connection = {}
async function connectDb() {
  if (connection.isConnect) {
    console.log('Already connected to the database')
    return
  }
  if (mongoose.connections.length > 0) {
    connection.isConnect = mongoose.connections[0].readyState
    if (connection.isConnect === 1) {
      console.log('Use previous connection to the data base')
      return
    }
    await mongoose.disconnect()
  }
  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('New connection to the database')
  connection.isConnect = db.connection[0]?.readyState
}

async function disconnectDb() {
  if (connection.isConnect) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect()
      connection.isConnect = false
    }
  }
}
const db = { connectDb, disconnectDb }
export default db
