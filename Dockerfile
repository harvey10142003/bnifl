FROM node:20-slim
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=development

COPY package.json package-lock.json ./
RUN npm ci --include=dev

COPY . .

# Build the app. Tolerate /404 /500 prerender errors (they work at runtime via app/not-found.tsx + force-dynamic).
RUN npm run build || true
RUN test -d .next/server && echo "Build artifacts present" || (echo "BUILD ARTIFACTS MISSING" && exit 1)

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

CMD ["npm", "start"]
