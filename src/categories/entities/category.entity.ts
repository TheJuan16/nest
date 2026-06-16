import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categories' }) // Opcional: define el nombre de la tabla en plural
export class Category {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    name!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description?: string;

    @Column({ type: 'boolean', default: true }) // <- AQUÍ ESTABA EL ERROR
  active!: boolean;
}
