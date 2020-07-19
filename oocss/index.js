const express = require('express');
const app = express(); 

app.use(express.static('public'))
app.set('view engine',  'pug');

app.get('/', (req, res) => {    
    res.render('buttons/index', {  name: 'Timothy' });
});

app.listen(3333, () => console.log('Server running at port 3333'));