import express from 'express'
const app = express();
const PORT = 3000;


app.use(express.json());


app.post('/', (req, res) => {
    const products = req.body;


    const totalValue = products.reduce((total, product) => {
        const { price, quantity } = product;


        if (typeof price !== 'number' || typeof quantity !== 'number') {
            return total;
        }

        return total + price * quantity;
    }, 0);

    res.json({ totalValue });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
