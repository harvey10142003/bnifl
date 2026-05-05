FROM node:20-alpine
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=development

COPY package.json package-lock.json ./
RUN npm ci --include=dev

COPY . .
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

CMD ["npm", "start"]
