import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { UserDetailController } from './controllers/user/UserDetailController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoriesController } from './controllers/category/ListCategoriesController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { 
  ListProductsByCategoryController
} from './controllers/product/ListProductsByCategoryController';

import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrdersController } from './controllers/order/ListOrdersController';
import { OrderDetailsController } from './controllers/order/OrderDetailsController';
import { FinishOrderController } from './controllers/order/FinishOrderController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

const createUserController = new CreateUserController();
const authUserController = new AuthUserController();
const userDetailController = new UserDetailController();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

const createProductController = new CreateProductController();
const listProductsByCategoryController = new ListProductsByCategoryController();

const createOrderController = new CreateOrderController();
const removeOrderController = new RemoveOrderController();
const addItemController = new AddItemController();
const sendOrderController = new SendOrderController();
const listOrdersController = new ListOrdersController();
const orderDetailsController = new OrderDetailsController();
const finishOrderController = new FinishOrderController();

router.post('/users', createUserController.handle);
router.post('/session', authUserController.handle);
router.get('/me', isAuthenticated, userDetailController.handle);

router.post('/categories', isAuthenticated, createCategoryController.handle);
router.get('/categories', isAuthenticated, listCategoriesController.handle);

router.post(
  '/products', 
  isAuthenticated, 
  upload.single('file'),
  createProductController.handle
);
router.get('/products/', isAuthenticated, listProductsByCategoryController.handle);

router.post('/orders', isAuthenticated, createOrderController.handle);
router.delete('/orders/:order_id', isAuthenticated, removeOrderController.handle);
router.post('/orders/add', isAuthenticated, addItemController.handle);
router.put('/orders/send/:order_id', isAuthenticated, sendOrderController.handle);
router.get('/orders/', isAuthenticated, listOrdersController.handle);
router.get('/orders/:order_id', isAuthenticated, orderDetailsController.handle);
router.put('/orders/finish/:order_id', isAuthenticated, finishOrderController.handle);

export { router };
