// src/repositories/producerRepository.ts

import pool from '../config/database';
import { Producer } from '../models/producer';

class ProducerRepository {
    async create(producer: Producer): Promise<Producer> {
        const { cpfCnpj, name, farmName, city, state, totalArea, arableArea, vegetationArea, crops } = producer;
        const result = await pool.query(
            `INSERT INTO producers (cpfCnpj, name, farmName, city, state, totalArea, arableArea, vegetationArea, crops) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
            [cpfCnpj, name, farmName, city, state, totalArea, arableArea, vegetationArea, JSON.stringify(crops)]
        );
        return result.rows[0];
    }

    async update(id: number, producer: Producer): Promise<Producer> {
        const { cpfCnpj, name, farmName, city, state, totalArea, arableArea, vegetationArea, crops } = producer;
        const result = await pool.query(
            `UPDATE producers SET cpfCnpj=$1, name=$2, farmName=$3, city=$4, state=$5, totalArea=$6, arableArea=$7, vegetationArea=$8, crops=$9 
             WHERE id=$10 RETURNING *`,
            [cpfCnpj, name, farmName, city, state, totalArea, arableArea, vegetationArea, JSON.stringify(crops), id]
        );
        return result.rows[0];
    }

    async delete(id: number): Promise<void> {
        await pool.query('DELETE FROM producers WHERE id=$1', [id]);
    }

    async getTotals(): Promise<any> {
        const result = await pool.query(`
            SELECT 
                COUNT(*) as totalFarms, 
                SUM(totalArea) as totalArea 
            FROM producers
        `);
        return result.rows[0];
    }

    async getFarmsByState(): Promise<any> {
        const result = await pool.query(`
            SELECT state, COUNT(*) as count 
            FROM producers 
            GROUP BY state
        `);
        return result.rows;
    }

    async getFarmsByCrop(): Promise<any> {
        const result = await pool.query(`
            SELECT jsonb_array_elements_text(crops) as crop, COUNT(*) as count 
            FROM producers 
            GROUP BY crop
        `);
        return result.rows;
    }

    async getLandUsage(): Promise<any> {
        const result = await pool.query(`
            SELECT 
                SUM(arableArea) as totalArableArea, 
                SUM(vegetationArea) as totalVegetationArea 
            FROM producers
        `);
        return result.rows[0];
    }
}

export default new ProducerRepository();
