// src/services/producerService.ts

import producerRepository from '../repositories/producerRepository';
import { Producer } from '../models/producer';
import { validateCpfCnpj, validateAreas } from '../utils/validation';

class ProducerService {
    async create(producer: Producer): Promise<Producer> {
        validateCpfCnpj(producer.cpfCnpj);
        validateAreas(producer.totalArea, producer.arableArea, producer.vegetationArea);
        return await producerRepository.create(producer);
    }

    async update(id: number, producer: Producer): Promise<Producer> {
        validateCpfCnpj(producer.cpfCnpj);
        validateAreas(producer.totalArea, producer.arableArea, producer.vegetationArea);
        return await producerRepository.update(id, producer);
    }

    async delete(id: number): Promise<void> {
        await producerRepository.delete(id);
    }

    async getTotals(): Promise<any> {
        return await producerRepository.getTotals();
    }

    async getFarmsByState(): Promise<any> {
        return await producerRepository.getFarmsByState();
    }

    async getFarmsByCrop(): Promise<any> {
        return await producerRepository.getFarmsByCrop();
    }

    async getLandUsage(): Promise<any> {
        return await producerRepository.getLandUsage();
    }
}

export default new ProducerService();
