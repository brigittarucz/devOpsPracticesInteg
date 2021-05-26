FROM ruby:2.7.2-alpine

WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/Gemfile
COPY Gemfile.lock /usr/src/app/Gemfile.lock

RUN apk upgrade --update
RUN apk add libatomic readline readline-dev libxml2 \
    libxml2-dev ncurses-terminfo-base ncurses-terminfo \
    libxslt libxslt-dev zlib-dev zlib \
    libffi-dev build-base

RUN gem install bundler
RUN bundle install