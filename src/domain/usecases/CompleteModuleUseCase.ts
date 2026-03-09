import { ModuleRepository } from '../repositories/ModuleRepository';

export class CompleteModuleUseCase {
    constructor(private repository: ModuleRepository) { }

    async execute(id: number): Promise<void> {
        return this.repository.completeModule(id);
    }
}
