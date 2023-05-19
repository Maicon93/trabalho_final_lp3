FROM postgres:15.2-alpine

COPY init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_USER admin
ENV POSTGRES_PASSWORD 1
ENV POSTGRES_DB horus_final