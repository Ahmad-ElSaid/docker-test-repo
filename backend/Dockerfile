FROM python:3.9.0


ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /backend
COPY requirements.txt requirements.txt

# RUN python manage.py migrate --no-input
# RUN python manage.py collectstatic --no-input
RUN pip install -r requirements.txt 
COPY . /backend


# RUN python manage.py collectstatic --no-input