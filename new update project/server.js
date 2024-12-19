const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Uditmane@23',
    database: 'product_management'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// CRUD operations for categories
app.get('/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/categories', (req, res) => {
    const name = req.body.name;
    db.query('INSERT INTO categories (name) VALUES (?)', [name], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, name });
    });
});

app.put('/categories/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    db.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (err, result) => {
        if (err) throw err;
        res.json({ id, name });
    });
});

app.delete('/categories/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM categories WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.json({ id });
    });
});

// CRUD operations for products
app.get('/products', (req, res) => {
    db.query(`
        SELECT products.id, products.name AS product_name, categories.name AS category_name, products.category_id 
        FROM products 
        JOIN categories ON products.category_id = categories.id
    `, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/products', (req, res) => {
    const { name, category_id } = req.body;
    db.query('INSERT INTO products (name, category_id) VALUES (?, ?)', [name, category_id], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, name, category_id });
    });
});

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, category_id } = req.body;
    db.query('UPDATE products SET name = ?, category_id = ? WHERE id = ?', [name, category_id, id], (err, result) => {
        if (err) throw err;
        res.json({ id, name, category_id });
    });
});

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.json({ id });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
