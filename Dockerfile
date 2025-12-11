# ===========================
# 1) BUILD STAGE
# ===========================
FROM node:18-alpine AS builder


WORKDIR /popoola_akintayo_final_site


COPY package.json package-lock.json ./
RUN npm install


COPY . .


RUN npm run build


FROM node:18-alpine


RUN npm install -g serve


WORKDIR /popoola_akintayo_final_site


COPY --from=builder /popoola_akintayo_final_site/build ./build


EXPOSE 5575


CMD ["serve", "-s", "build", "-l", "5575"]
