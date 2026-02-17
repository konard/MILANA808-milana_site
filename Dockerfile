FROM python:3.11-slim

WORKDIR /app

COPY pyproject.toml .
COPY milana_site/ ./milana_site/

RUN pip install --no-cache-dir -e .

EXPOSE 5000

CMD ["flask", "--app", "milana_site.app", "run", "--host", "0.0.0.0", "--port", "5000"]
