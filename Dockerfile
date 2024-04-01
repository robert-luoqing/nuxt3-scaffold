FROM --platform=linux/amd64 node:20.5.1
ENV HOST 0.0.0.0
RUN mkdir -p /app

# ADD package.json nuxt.config.ts .env.production app.config.ts app.vue error.vue global.d.ts tsconfig.json uno.config.ts yarn.lock /app/
# ADD node_modules /app/node_modules/
# ADD assets /app/assets/
# ADD components /app/components/
# ADD layouts /app/layouts/
# ADD middleware /app/middleware/
# ADD models /app/models/
# ADD pages /app/pages/
# ADD plugins /app/plugins/
# ADD public /app/public/
# ADD server /app/server/
# ADD stores /app/stores/
# ADD utils /app/utils/
# ADD views /app/views/
# ADD locals /app/locals/

ADD .output /app/
ADD docker/start.sh /app/start.sh

WORKDIR /app
EXPOSE 3000

# RUN npm config set registry https://registry.npmmirror.com
# RUN npm i -g yarn
# RUN yarn
# RUN yarn build

# CMD ["export", "$(grep", "-v", "'^#'", ".env", "|", "xargs)", "&&", "node", "server/index.mjs"]
# RUN export $(grep -v '^#' /app/.env | xargs)
# ENTRYPOINT ["export $(grep -v '^#' /app/.env | xargs) && "]

# CMD ["node", "server/index.mjs"]
CMD ["bash", "start.sh"]


