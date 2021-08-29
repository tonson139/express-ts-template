import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ActivityRecord } from "./ActivityRecord";

@Entity()
export class User extends ActivityRecord {
	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	nickName: string;
}
