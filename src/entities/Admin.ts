import { Column, Entity } from "typeorm";

@Entity("admin", { schema: "hackerpoleDb" })
export class Admin {
  @Column("varchar", { primary: true, name: "username", length: 10 })
  username: string;

  @Column("varchar", { name: "password", nullable: true, length: 10 })
  password: string | null;
}
