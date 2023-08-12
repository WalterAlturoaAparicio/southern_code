import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1691803820543 implements MigrationInterface {
    name = 'Init1691803820543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "review" ("id" SERIAL NOT NULL, "userName" character varying NOT NULL, "rating" integer NOT NULL, "tmbdId" integer NOT NULL, "movieId" integer NOT NULL, CONSTRAINT "CHK_987fd022a3b5c288f233104eb4" CHECK ("rating" >=1 AND rating <=10), CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "movie" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "release_date" character varying NOT NULL, "poster_path" character varying NOT NULL, "overview" character varying NOT NULL, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_4ccf71f9d14aa1a059877b06343" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_4ccf71f9d14aa1a059877b06343"`);
        await queryRunner.query(`DROP TABLE "movie"`);
        await queryRunner.query(`DROP TABLE "review"`);
    }

}
