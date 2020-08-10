import { Column, Entity, OneToOne } from "typeorm";
import { Experties } from "./Experties";
import { Vote } from "./Vote";

@Entity("candidate", { schema: "hackerpoleDb" })
export class Candidate {
  @Column("varchar", { primary: true, name: "name", length: 20 })
  name: string;

  @Column("int", { name: "NoCS", nullable: true })
  noCs: number | null;

  @Column("int", { name: "CEL", nullable: true })
  cel: number | null;

  @OneToOne(() => Experties, (experties) => experties.name2)
  experties: Experties;

  @OneToOne(() => Vote, (vote) => vote.name2)
  vote: Vote;
}
