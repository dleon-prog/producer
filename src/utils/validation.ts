// src/utils/validation.ts

export function validateCpfCnpj(cpfCnpj: string): void {
    // Implement CPF/CNPJ validation logic
    if (!isValidCpfCnpj(cpfCnpj)) {
        throw new Error('Invalid CPF/CNPJ');
    }
}

export function validateAreas(totalArea: number, arableArea: number, vegetationArea: number): void {
    if (arableArea + vegetationArea > totalArea) {
        throw new Error('The sum of arable area and vegetation area cannot exceed the total area');
    }
}

function isValidCpfCnpj(cpfCnpj: string): boolean {
    // Implement CPF/CNPJ validation logic
    return true;
}
