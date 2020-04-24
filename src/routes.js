import { Router } from 'express';
import UsersController from './controllers/UsersController';
import ProfilesController from './controllers/ProfilesController';
import EventsController from './controllers/EventsController';
import ChecksController from './controllers/ChecksController';
import SubmitsController from './controllers/SubmitsController';
import authMiddleware from './middlewares/auth';

const routes = Router();


// Users
routes.get('/users', authMiddleware, UsersController.index);
routes.post('/users', UsersController.store);
routes.post('/users/auth', UsersController.authenticate);

// Profiles
routes.get('/users/:user_id/profile', authMiddleware, ProfilesController.index);
routes.post('/users/:user_id/profile', authMiddleware, ProfilesController.store);

// Events
routes.get('/events', authMiddleware, EventsController.index);
routes.get('/events/:event_id', authMiddleware, EventsController.show);
routes.post('/events', authMiddleware, EventsController.store);
routes.put('/events/:event_id', authMiddleware, EventsController.update);
routes.delete('/events/:event_id', authMiddleware, EventsController.destroy);

// Events Checks
routes.get('/events/:event_id/checks', authMiddleware, ChecksController.index);
routes.post('/events/:event_id/checks', authMiddleware, ChecksController.store);
// routes.put('/events/:event_id/checks', authMiddleware, ChecksController.update);
routes.delete('/events/:event_id/checks/:check_id', authMiddleware, ChecksController.destroy);

// Events Submit 
routes.get('/submits', authMiddleware, SubmitsController.index);
routes.post('/submits', SubmitsController.store);
routes.put('/submits/:submit_id', authMiddleware, SubmitsController.update);
routes.delete('/submits/:submit_id', authMiddleware, SubmitsController.destroy);



export default routes;
