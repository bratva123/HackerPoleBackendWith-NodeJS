import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Candidate } from "./Candidate";

@Entity("vote", { schema: "hackerpoleDb" })
export class Vote {
  @Column("varchar", { primary: true, name: "name", length: 20 })
  name: string;

  @Column("int", { name: "count", nullable: true })
  count: number | null;

  @OneToOne(() => Candidate, (candidate) => candidate.vote, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "name", referencedColumnName: "name" }])
  name2: Candidate;
}
