STOP SLAVE;
CHANGE MASTER TO 
master_host='192.168.1.25',
master_port = 33072,
MASTER_USER = 'root',
MASTER_PASSWORD = '123456',
MASTER_LOG_FILE = 'log.000003',
MASTER_LOG_POS = 154;
START SLAVE;