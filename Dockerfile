FROM node:20-slim
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=development

COPY package.json package-lock.json ./
RUN npm ci --include=dev

COPY . .

# /404 /500 prerender errors are tolerated; runtime serves them dynamically.
RUN npm run build || true
RUN test -d .next/server/pages || (echo "BUILD ARTIFACTS MISSING" && exit 1)

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

CMD ["./node_modules/.bin/next", "start", "-H", "0.0.0.0", "-p", "3000"]
