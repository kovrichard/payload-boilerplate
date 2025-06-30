.PHONY: start-db stop db logs


start-db:
	docker compose up -d database

stop:
	docker compose down

db:
	docker compose exec database psql -U app_dev -d dev

logs:
	docker compose logs -f
