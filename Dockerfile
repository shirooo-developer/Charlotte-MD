FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

# Instal PM2
RUN npm install pm2

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

# Mulai PM2
CMD ["pm2 start && pm2 save && pm2 logs", "start"]
