FROM node:22.18.0-alpine AS base

FROM base AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci


FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build


FROM base AS runner

RUN apk add --no-cache libc6-compat curl
RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/entrypoint.sh /entrypoint.sh

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 vitejs

RUN chmod u+x /entrypoint.sh
RUN chown -R vitejs:nodejs /app

USER vitejs

EXPOSE 5173

ENTRYPOINT [ "/entrypoint.sh" ]