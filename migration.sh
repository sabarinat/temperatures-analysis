#!/bin/bash
echo "Running"
export MYSQL_PWD='root'
# apt-get update && apt-get install -y mysql-client && rm -rf /var/lib/apt/lists/*
# chmod 660 /var/run/mysqld/mysqld.sock
echo "[mysqld]\nsocket=/var/run/mysqld/mysqld.sock"

echo "[client]\nuser=$USER\npassword="$PASSWORD"\nhost="$HOST"" > /root/.my.cnf
chmod 600 ~/.my.cnf
# mysql GRANT ALL PRIVILEGES ON *.* TO 'root'@"$HOST" IDENTIFIED BY "$PASSWORD" WITH GRANT OPTION;
# mysql FLUSH PRIVILEGES;
mysql -e "SHOW DATABASES;"
SQL_DIR="./sql-migrations"
# mysql_config_editor set --login-path=local --host=${HOST} --user=$USER --password
# mysql_config_editor set --login-path=local --host="$HOST" --user="$USER" --password="$PASSWORD"

echo "Waiting for MySQL to start..."
# echo mysql://"$USER":"$PASSWORD"@"$HOST":"$PORT"/"$DATABASE"
# echo mysql -h"$HOST" -P"$PORT" -u"$USER" -p"$PASSWORD" "$DATABASE" -e
# until mysql -e "select 1"; do
#     sleep 2
# done
echo "Waiting for MySQL to start...1"
unset MYSQL_PWD

# for sql_file in "$SQL_DIR"/*.sql; do
#     echo "Running $sql_file..."
#     mysql -h"$HOST" -P"$PORT" -u"$USER" -p"$PASSWORD" "$DATABASE" < "$sql_file"
# done