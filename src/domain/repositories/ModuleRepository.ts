import { Module } from '../entities/Module';

export interface ModuleRepository {
    getModules(): Promise<Module[]>;
    completeModule(id: number): Promise<void>;
}
