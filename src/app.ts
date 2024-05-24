import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { orderRouter } from './app/modules/Order/orders.route';
import { productRoute } from './app/modules/Product/products.route';

const app: Application = express();

// parser
app.use(express.json());
// cors
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// product routes
app.use('/api/products', productRoute);

// order route
app.use('/api/orders', orderRouter);

// for catching route not found
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

export default app;
