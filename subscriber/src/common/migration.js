
const executeQuery = require('../../database/databaseConnection');

const migrations = async () => {

    const queryDatas = [
                      `CREATE TABLE IF NOT EXISTS tbl_users (id BIGINT NOT NULL AUTO_INCREMENT,
                       user_name VARCHAR(255) DEFAULT NULL,
                       email VARCHAR(500) NOT NULL,
                       password TEXT NOT NULL,
                       is_deleted TINYINT DEFAULT 0,
                       created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Timestamp of log creation',
                       updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                       PRIMARY KEY (id)
                       )`,
                       
                       
                       `CREATE TABLE IF NOT EXISTS tbl_temperature (id BIGINT NOT NULL AUTO_INCREMENT,
                       temperature VARCHAR(255),
                       is_deleted TINYINT DEFAULT 0,
                       created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Timestamp of log creation',
                       updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                       PRIMARY KEY (id)
                       )`];
        const updateDatabase = await Promise.allSettled(queryDatas.map(data => {
              return executeQuery(data,[]);
        }));
        console.log(updateDatabase);


}

module.exports =  migrations
