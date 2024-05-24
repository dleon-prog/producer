// src/models/producer.ts

export interface Producer {
    id?: number;
    cpfCnpj: string;
    name: string;
    farmName: string;
    city: string;
    state: string;
    totalArea: number;
    arableArea: number;
    vegetationArea: number;
    crops: string[];
}
