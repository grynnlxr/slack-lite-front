DROP TABLE IF EXISTS "public"."message";
DROP TABLE IF EXISTS "public"."thread";
DROP TABLE IF EXISTS "public"."user";

CREATE TABLE "public"."user" (
	"id" uuid NOT NULL,
	"name" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "public"."thread" (
    "id" uuid NOT NULL,
    "label" varchar(255) NOT NULL,
	"locked" boolean NOT NULL DEFAULT false,
    PRIMARY KEY ("id")
);

CREATE TABLE "public"."message" (
    "id" uuid NOT NULL,
    "author_id" uuid NOT NULL,
	"thread_id" uuid NOT NULL REFERENCES "public"."thread" ON DELETE CASCADE,
    "content" text NOT NULL,
    "date" timestamp NOT NULL DEFAULT now(),
    CONSTRAINT "messages_author" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id"),
    CONSTRAINT "messages_thread" FOREIGN KEY ("thread_id") REFERENCES "public"."thread"("id"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."user" ("id", "name")
VALUES
	('6d6ba1eb-3f9f-41b3-88af-fd3a959faeaa', 'Angelisium'),
	('e6d8b859-22ea-4d4d-a958-f7677a23a38b', 'Alice');

INSERT INTO "public"."thread" ("id", "label", "locked")
VALUES
	('6c77bdf7-477d-4147-b5fc-b849021936be', 'Général', true),
	('4cb26429-38ad-45f5-9d66-60ebb4a24e1e', 'Hello 🌎', false);

INSERT INTO "public"."message" ("id", "author_id", "thread_id", "content", "date")
VALUES (
	'f693ee69-8020-419f-ae23-2822875ebfb2',
	'e6d8b859-22ea-4d4d-a958-f7677a23a38b',
	'6c77bdf7-477d-4147-b5fc-b849021936be',
	'Bonjour tout le monde, j''esp&egrave;re que vous allez bien !

Petite mise &agrave; jour des fonctionnalit&eacute;s de discussion, maintenant, vous pouvez mettre le texte **en gras** (**), //en italique// (//), --le barr&eacute;-- (--) et __le soulign&eacute;__ (__) !

Vous pouvez &eacute;galement utiliser des outils de jeu de r&ocirc;le, les d&egrave;s (d4, 6, 8, 10, 12, 20 et 100) : {d4:1}, {d6:6}, {d8:1}, {d10:2}, {d12:4}, {d20:18} et {d100:52}',
	'2023-09-02 12:49:58.662259'
),(
	'7d317a8a-d611-4893-9cbe-0f82a1ce9104',
	'6d6ba1eb-3f9f-41b3-88af-fd3a959faeaa',
	'4cb26429-38ad-45f5-9d66-60ebb4a24e1e',
	'Salut &agrave; tous,
Aujourd''hui j''ai manger de la pizza et vous ?

D''ailleurs, &ccedil;a me fait pensez, qui ici est chaud pour une pizza-party ?',
	'2023-09-02 12:10:45.843813'
),(
	'a24b8b82-24bf-457f-a47b-6fbae46bd90f',
	'e6d8b859-22ea-4d4d-a958-f7677a23a38b',
	'4cb26429-38ad-45f5-9d66-60ebb4a24e1e',
	'Let''s go !!
Trop h&acirc;te 😋',
	'2023-09-02 12:51:04.45488'
);

-- free id :
-- 0c3eab77-b39e-42f5-b160-77c55db2ec01
-- 0cc2c5e5-d8c2-4036-8833-9f9ef3e38b7c
-- 624eb4cb-3e9a-4cfe-bc59-d364256196ea
-- d8cd7cde-513a-4260-8995-e5196b70c072
-- f0059590-a2ff-4c3a-84a5-ad081e06b68f
