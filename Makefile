.PHONY: up down build clean

up:
	docker compose up

down:
	docker compose down

build:
	docker compose build

clean:
	docker compose down -v
	docker system prune -f

dev:
	docker compose up --build 