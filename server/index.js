const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../client/build')));



// app.get('/', (req, res) => {
//     res.json({ message: 'Index page' });
// })

app.get('/api', (req, res) => {
    console.log('---router called---')
    res.json({ message: 'Rect API Index page' });
})


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
})