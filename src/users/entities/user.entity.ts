import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() //Esto definirá el nombre de la tabla en tu base de datos
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ unique: true }) // 'unique
  email!: string;

  @Column({ select: false })
  password!: string;
}
