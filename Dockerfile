FROM node:slim
LABEL product="limb"
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

COPY . .
RUN yarn audit
RUN yarn type-check
RUN yarn lint
RUN yarn build

EXPOSE 3001

CMD ["npx", "serve", "-s", "./dist", "-p", "3001"]
