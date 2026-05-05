FROM node:20-slim
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# Install all deps (including devDeps for build tools)
COPY package.json package-lock.json ./
RUN npm ci --include=dev

COPY . .

# Build with NODE_ENV=production so React/Next bundles prod runtime
ENV NODE_ENV=production
RUN npm run build

ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

CMD ["./node_modules/.bin/next", "start", "-H", "0.0.0.0", "-p", "3000"]
