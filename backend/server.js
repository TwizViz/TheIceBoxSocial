import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3306;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(cors());

app.listen(PORT, () => {
    console.log(`API server listening on port: ${PORT}`);
});