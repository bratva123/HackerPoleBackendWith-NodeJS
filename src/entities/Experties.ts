import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Candidate } from "./Candidate";

@Entity("experties", { schema: "hackerpoleDb" })
export class Experties {
  @Column("int", { name: "DS", nullable: true })
  ds: number | null;

  @Column("int", { name: "Algo", nullable: true })
  algo: number | null;

  @Column("int", { name: "Cpp", nullable: true })
  cpp: number | null;

  @Column("int", { name: "Java", nullable: true })
  java: number | null;

  @Column("int", { name: "python", nullable: true })
  python: number | null;

  @Column("varchar", { primary: true, name: "name", length: 20 })
  name: string;

  @OneToOne(() => Candidate, (candidate) => candidate.experties, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "name", referencedColumnName: "name" }])
  name2: Candidate;
}
