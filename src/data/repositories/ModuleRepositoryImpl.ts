import { Module } from '../../domain/entities/Module';
import { ModuleRepository } from '../../domain/repositories/ModuleRepository';

import sstImg from '../../assets/planta/sst.png';
import produccionImg from '../../assets/planta/produccion.png';
import corporativoImg from '../../assets/planta/corporartivo.png';
import areasImg from '../../assets/planta/areasDeApoyo.png';

const INITIAL_DATA: Module[] = [
    {
        id: 1,
        title: 'Corporativo IMN',
        description: 'Información Corporativa y Gestión',
        image: corporativoImg,
        status: 'ACTIVE',
    },
    {
        id: 2,
        title: 'SST',
        description: 'Seguridad y Salud en el Trabajo',
        image: sstImg,
        status: 'LOCKED',
    },
    {
        id: 3,
        title: 'Nuestro Proceso',
        description: 'Procesos de Producción IMN',
        image: produccionImg,
        status: 'LOCKED',
    },
    {
        id: 4,
        title: 'Áreas de apoyo',
        description: 'Soporte y Servicios',
        image: areasImg,
        status: 'LOCKED',
    },
];

export class ModuleRepositoryImpl implements ModuleRepository {
    private static instance: ModuleRepositoryImpl;
    private modules: Module[] = [...INITIAL_DATA];

    private constructor() { }

    public static getInstance(): ModuleRepositoryImpl {
        if (!ModuleRepositoryImpl.instance) {
            ModuleRepositoryImpl.instance = new ModuleRepositoryImpl();
        }
        return ModuleRepositoryImpl.instance;
    }

    async getModules(): Promise<Module[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve([...this.modules]), 300);
        });
    }

    async completeModule(id: number): Promise<void> {
        const index = this.modules.findIndex((m) => m.id === id);
        if (index === -1) return;

        this.modules[index].status = 'COMPLETED';

        if (index + 1 < this.modules.length) {
            if (this.modules[index + 1].status === 'LOCKED') {
                this.modules[index + 1].status = 'ACTIVE';
            }
        }
        return Promise.resolve();
    }
}
