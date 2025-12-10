# ===========================
# 1) BUILD STAGE
# ===========================
FROM node:18-alpine AS builder

# Working directory inside container (as required by assignment)
WORKDIR /popoola_akintayo_final_site

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build production React app
RUN npm run build

# ===========================
# 2) RUN STAGE
# ===========================
FROM node:18-alpine

# Install static file server
RUN npm install -g serve

# Set the same working directory name
WORKDIR /popoola_akintayo_final_site

# Copy only the build output from the build stage
COPY --from=builder /popoola_akintayo_final_site/build ./build

# Expose required port
EXPOSE 5575

# Serve the build folder at port 5575
CMD ["serve", "-s", "build", "-l", "5575"]
