# Étape 1 : Build
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Construire l'app Next.js
RUN npm run build

# Étape 2 : Production
FROM node:20-alpine AS runner

# Définir la variable d'environnement de production
ENV NODE_ENV=production

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement ce qui est nécessaire pour exécuter l'app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Exposer le port
EXPOSE 3000

# Lancer le serveur
CMD ["npx", "next", "start"]
