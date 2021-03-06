const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();
app.get('/', (req,res) => res.send('API Running'));

//defining routes

app.use(express.json({extended: false}));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));


const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server start on port ${PORT}`));