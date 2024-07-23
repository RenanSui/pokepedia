FROM node:22 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml ./
EXPOSE 3000

FROM base AS prod-deps
WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=prod-deps /app/node_modules ./node_modules
RUN pnpm run build

FROM base AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
CMD pnpm run start

FROM base as dev
ENV NODE_ENV=development
RUN pnpm install 
COPY . .
CMD pnpm run dev