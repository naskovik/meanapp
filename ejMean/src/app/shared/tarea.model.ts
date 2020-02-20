type TareaEstados = 'Por hacer' | 'En progreso' | 'Hecha';
export const TareaEstadosSelect = [{ value: 'Por hacer'}, { value: 'En progreso'},
{value: 'Hecha'}];

export class TareaModel {
    constructor(
        // tslint:disable-next-line: variable-name
        public _id: string,
        public titulo: string,
        public fecha: Date,
        public estado: TareaEstados
    ) {}
}
