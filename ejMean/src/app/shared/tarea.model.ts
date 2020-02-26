type TareaEstados = 'Por hacer' | 'En progreso' | 'Hecha';
export const TareaEstadosSelect = { porHacer: 'Por hacer', hecha: 'Hecha', enProgreso: 'En progreso'};

export class TareaModel {
    constructor(
        // tslint:disable-next-line: variable-name
        public _id: string,
        public titulo: string,
        public fecha: Date,
        public estado: TareaEstados
    ) {}
}
