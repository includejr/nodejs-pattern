import Event from '../models/Event';
import { parseISO, addHours } from 'date-fns';
import * as Yup from 'yup';

export default {
    async index(req, res) {
        const { page = 1 } = req.query;

        const total = await Event.count();

        const events = await Event.findAll({
            attributes: ['id', 'topic', 'title', 'speakers', 'location', 'date', 'duration', 'status', 'registers', 'register_type', 'hours_limit', 'registers_limit', 'description'],
            limit: 10,
            offset: (page - 1) * 10 
        });

        return res.json({
            events, 
            page,
            total
        });
    },

    async show(req, res) {
        const { event_id } = req.params;

        const event = await Event.findByPk(event_id);
            
        if(!event) 
            return res.status(400).json({ error: "Event not found !" });

        return res.json(event);

    },

    async store(req, res) {
        
        const schema = Yup.object().shape({
            topic: Yup.string().required(),
            title: Yup.string().required(),
            description: Yup.string().required(),
            speakers: Yup.string().required(),
            location: Yup.string().required(),
            duration: Yup.string().required(),
            date: Yup.date().required(),
            hours_limit: Yup.number().required(),
            link: Yup.string(),
            registers_limit: Yup.number().required(),
            register_type: Yup.number().required(),
            status: Yup.number()
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: ' Validation fails' });
        }

        req.body.date = addHours(parseISO(req.body.date), -3);

        const { id, title } = await Event.create(req.body);

        return res.json({
            id,
            title
        });
    },
    
    async update(req, res) {
        const { event_id } = req.params;

        const findEvent = await Event.findByPk(event_id);
            
        if(!findEvent) 
            return res.status(400).json({ error: "Events not found !" });

        const schema = Yup.object().shape({
            topic: Yup.string(),
            title: Yup.string(),
            description: Yup.string(),
            speakers: Yup.string(),
            location: Yup.string(),
            duration: Yup.string(),
            date: Yup.date(),
            hours_limit: Yup.number(),
            link: Yup.string(),
            registers_limit: Yup.number(),
            register_type: Yup.number(),
            status: Yup.number()
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: ' Validation fails' });
        }

        req.body.date = addHours(parseISO(req.body.date), -3);
        
        const event = await Event.update(
            req.body, 
            {
                where: {
                    id: event_id
                }
            }
        );

        return res.json(event);
    },

    async destroy(req, res) {
        const { event_id } = req.params;

        const findEvent = await Event.findByPk(event_id);
            
        if(!findEvent) 
            return res.status(400).json({ error: "Events not found !" });

        const event = await Event.destroy({
            where: {
                id: event_id
            }
        });

        return res.json(event);
    }
};