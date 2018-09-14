--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3
-- Dumped by pg_dump version 10.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cata; Type: TABLE; Schema: public; Owner: pilou
--

CREATE TABLE public.cata (
    id_cata integer NOT NULL,
    nom_cata character varying(8) NOT NULL
);


ALTER TABLE public.cata OWNER TO pilou;

--
-- Name: cata_id_cata_seq; Type: SEQUENCE; Schema: public; Owner: pilou
--

CREATE SEQUENCE public.cata_id_cata_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cata_id_cata_seq OWNER TO pilou;

--
-- Name: cata_id_cata_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pilou
--

ALTER SEQUENCE public.cata_id_cata_seq OWNED BY public.cata.id_cata;


--
-- Name: partie; Type: TABLE; Schema: public; Owner: pilou
--

CREATE TABLE public.partie (
    id_partie integer NOT NULL,
    nb_annees integer NOT NULL,
    date_partie date NOT NULL
);


ALTER TABLE public.partie OWNER TO pilou;

--
-- Name: partie_id_partie_seq; Type: SEQUENCE; Schema: public; Owner: pilou
--

CREATE SEQUENCE public.partie_id_partie_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.partie_id_partie_seq OWNER TO pilou;

--
-- Name: partie_id_partie_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pilou
--

ALTER SEQUENCE public.partie_id_partie_seq OWNED BY public.partie.id_partie;


--
-- Name: pvc; Type: TABLE; Schema: public; Owner: pilou
--

CREATE TABLE public.pvc (
    id_cata integer NOT NULL,
    id_partie integer NOT NULL,
    id_ville integer NOT NULL,
    date_cata integer NOT NULL
);


ALTER TABLE public.pvc OWNER TO pilou;

--
-- Name: ville; Type: TABLE; Schema: public; Owner: pilou
--

CREATE TABLE public.ville (
    id_ville integer NOT NULL,
    pop_init integer NOT NULL,
    natal double precision NOT NULL,
    mortal double precision NOT NULL
);


ALTER TABLE public.ville OWNER TO pilou;

--
-- Name: ville_id_ville_seq; Type: SEQUENCE; Schema: public; Owner: pilou
--

CREATE SEQUENCE public.ville_id_ville_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ville_id_ville_seq OWNER TO pilou;

--
-- Name: ville_id_ville_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: pilou
--

ALTER SEQUENCE public.ville_id_ville_seq OWNED BY public.ville.id_ville;


--
-- Name: cata id_cata; Type: DEFAULT; Schema: public; Owner: pilou
--

ALTER TABLE ONLY public.cata ALTER COLUMN id_cata SET DEFAULT nextval('public.cata_id_cata_seq'::regclass);


--
-- Name: partie id_partie; Type: DEFAULT; Schema: public; Owner: pilou
--

ALTER TABLE ONLY public.partie ALTER COLUMN id_partie SET DEFAULT nextval('public.partie_id_partie_seq'::regclass);


--
-- Name: ville id_ville; Type: DEFAULT; Schema: public; Owner: pilou
--

ALTER TABLE ONLY public.ville ALTER COLUMN id_ville SET DEFAULT nextval('public.ville_id_ville_seq'::regclass);


--
-- Data for Name: cata; Type: TABLE DATA; Schema: public; Owner: pilou
--



--
-- Data for Name: partie; Type: TABLE DATA; Schema: public; Owner: pilou
--



--
-- Data for Name: pvc; Type: TABLE DATA; Schema: public; Owner: pilou
--



--
-- Data for Name: ville; Type: TABLE DATA; Schema: public; Owner: pilou
--



--
-- Name: cata_id_cata_seq; Type: SEQUENCE SET; Schema: public; Owner: pilou
--

SELECT pg_catalog.setval('public.cata_id_cata_seq', 1, false);


--
-- Name: partie_id_partie_seq; Type: SEQUENCE SET; Schema: public; Owner: pilou
--

SELECT pg_catalog.setval('public.partie_id_partie_seq', 1, false);


--
-- Name: ville_id_ville_seq; Type: SEQUENCE SET; Schema: public; Owner: pilou
--

SELECT pg_catalog.setval('public.ville_id_ville_seq', 1, false);


--
-- Name: cata cata_pk; Type: CONSTRAINT; Schema: public; Owner: pilou
--

ALTER TABLE ONLY public.cata
    ADD CONSTRAINT cata_pk PRIMARY KEY (id_cata);


--
-- Name: partie partie_pk; Type: CONSTRAINT; Schema: public; Owner: pilou
--

ALTER TABLE ONLY public.partie
    ADD CONSTRAINT partie_pk PRIMARY KEY (id_partie);


--
-- Name: pvc pvc_pk; Type: CONSTRAINT; Schema: public; Owner: pilou
--

ALTER TABLE ONLY public.pvc
    ADD CONSTRAINT pvc_pk PRIMARY KEY (id_cata, id_partie, id_ville);


--
-- Name: ville ville_pk; Type: CONSTRAINT; Schema: public; Owner: pilou
--

ALTER TABLE ONLY public.ville
    ADD CONSTRAINT ville_pk PRIMARY KEY (id_ville);


--
-- Name: pvc pvc_cata_fk; Type: FK CONSTRAINT; Schema: public; Owner: pilou
--

ALTER TABLE ONLY public.pvc
    ADD CONSTRAINT pvc_cata_fk FOREIGN KEY (id_cata) REFERENCES public.cata(id_cata);


--
-- Name: pvc pvc_partie0_fk; Type: FK CONSTRAINT; Schema: public; Owner: pilou
--

ALTER TABLE ONLY public.pvc
    ADD CONSTRAINT pvc_partie0_fk FOREIGN KEY (id_partie) REFERENCES public.partie(id_partie);


--
-- Name: pvc pvc_ville1_fk; Type: FK CONSTRAINT; Schema: public; Owner: pilou
--

ALTER TABLE ONLY public.pvc
    ADD CONSTRAINT pvc_ville1_fk FOREIGN KEY (id_ville) REFERENCES public.ville(id_ville);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO pilou;


--
-- PostgreSQL database dump complete
--

