FROM brigdocker/tech_app:latest

RUN apk update && \
    apk upgrade

# COPY ./ .

RUN npm install -g npm@7.14.0
# CMD ["sh", "./commands.sh"]

ENTRYPOINT ["tail", "-f", "/dev/null"]
# RUN kill $(lsof -t -i:3000)
# RUN npm test
# RUN npm install -g eslint
# RUN npm install -g mocha
# RUN npm install -g chai

# docker build -t test .
# docker run -dp 2000:2000 test