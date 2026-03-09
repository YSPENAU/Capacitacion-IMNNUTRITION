import { Module } from '../entities/Module';
import { ModuleRepository } from '../repositories/ModuleRepository';

export class GetModulesUseCase {
    constructor(private repository: ModuleRepository) { }

    async execute(): Promise<Module[]> {
        return this.repository.getModules();
    }
}
