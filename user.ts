import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Tombstone } from './tombstone';
import { Role } from './role';

@Entity()
export class WebsiteUser {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public email: string;

//   @OneToMany(type => Tombstone, tombstone => tombstone.user)
//   public tombstones: Tombstone;

  @ManyToOne(type => Role, role => role.users)
  @JoinColumn({
      name: 'role_id'
  })
  public role: Role;
}
