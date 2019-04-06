# create database on your MySQL
# create tables and add indexes
docker run -it --rm gaishimo/tpcc-mysql cat create_table.sql add_fkey_idx.sql | mysql -uroot  -h 192.168.10.11 -p123456 tpcc

docker run -it --rm -e MYSQL_PORT_3306_TCP_ADDR=192.168.10.11 gaishimo/tpcc-mysql tpcc_load tpcc  root '123456' tpcc