const express = require('express');
const app = express();

app.use(express.json());

app.post('/api', (req, res) => {
    const requestData = req.body;
    const responseData = { message: 'Data posted' };
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(responseData);
})

app.get('/api', async (req, res) => {
    res.json({message: 'Data gotten'});
})

app.listen(5000, () => {console.log('Server started')});