-- Table: public.lesson

-- DROP TABLE public.lesson;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"

CREATE TABLE public.lesson
(
    url character varying COLLATE pg_catalog."default",
    publication_year integer,
    manual_tags character varying[] COLLATE pg_catalog."default",
    key character varying COLLATE pg_catalog."default",
    item_type character varying COLLATE pg_catalog."default",
    id uuid NOT NULL,
    date_modified character varying COLLATE pg_catalog."default",
    date_added character varying COLLATE pg_catalog."default",
    date character varying COLLATE pg_catalog."default",
    author character varying COLLATE pg_catalog."default",
    access_date character varying COLLATE pg_catalog."default",
    abstract_note character varying COLLATE pg_catalog."default",
    title character varying COLLATE pg_catalog."default",
    CONSTRAINT lesson_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.lesson
    OWNER to postgres;