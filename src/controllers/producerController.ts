// src/controllers/producerController.ts

import { Request, Response } from 'express';
import producerService from '../services/producerService';
import { Producer } from '../models/producer';

class ProducerController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const producer: Producer = req.body;
            const newProducer = await producerService.create(producer);
            res.status(201).json(newProducer);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const producer: Producer = req.body;
            const updatedProducer = await producerService.update(parseInt(id), producer);
            res.status(200).json(updatedProducer);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await producerService.delete(parseInt(id));
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getTotals(req: Request, res: Response): Promise<void> {
        try {
            const totals = await producerService.getTotals();
            res.status(200).json(totals);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getFarmsByState(req: Request, res: Response): Promise<void> {
        try {
            const farmsByState = await producerService.getFarmsByState();
            res.status(200).json(farmsByState);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getFarmsByCrop(req: Request, res: Response): Promise<void> {
        try {
            const farmsByCrop = await producerService.getFarmsByCrop();
            res.status(200).json(farmsByCrop);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getLandUsage(req: Request, res: Response): Promise<void> {
        try {
            const landUsage = await producerService.getLandUsage();
            res.status(200).json(landUsage);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new ProducerController();
