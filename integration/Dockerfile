FROM mariadb:latest

ADD sql/ /docker-entrypoint-initdb.d

ENV MYSQL_ROOT_PASSWORD test
ENV MYSQL_DATABASE techevents_users
ENV MYSQL_USER root
ENV MYSQL_TCP_PORT 3308

RUN apt-get update && apt-get -y install vim

EXPOSE 3308

CMD ["mysqld"]

# docker build -t mariadb_dummy .
# docker run -dp 3308:3308 --name mariadb_dummy mariadb_dummy