const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://hadiyamk03:hadd@cluster0.izhrgvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err))