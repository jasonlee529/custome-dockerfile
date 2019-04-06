# create database on your MySQL
 mysql -uroot  -h 192.168.10.11 -p123456 -e "create database IF NOT EXISTS tpcc"
# create tables and add indexes
docker run -it --rm gaishimo/tpcc-mysql cat create_table.sql add_fkey_idx.sql | mysql -uroot  -h 192.168.10.11 -p123456 -D tpcc

docker run -it --rm -e MYSQL_PORT_3306_TCP_ADDR=192.168.10.11 gaishimo/tpcc-mysql tpcc_load tpcc  root '123456' 1

docker run -it --rm -e MYSQL_PORT_3306_TCP_ADDR=192.168.10.11 gaishimo/tpcc-mysql tpcc_start -d tpcc -u root -p123456 -w 1
