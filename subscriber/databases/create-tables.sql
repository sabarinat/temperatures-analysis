CREATE TABLE tbl_user (id BIGINT NOT NULL AUTO_INCREMENT,
                       user_name VARCHAR(255) NOT NULL,
                       email VARCHAR(500) NOT NULL,
                       PASSWORD TEXT NOT NULL,
                       is_deleted TINYINT DEFAULT 0,
                       created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Timestamp of log creation',
                       updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                       PRIMARY KEY (`id`)
                       );
                       
                       
                       CREATE TABLE tbl_temperature (id BIGINT NOT NULL AUTO_INCREMENT,
                       temperature VARCHAR(255),
                       is_deleted TINYINT DEFAULT 0,
                       created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Timestamp of log creation',
                       updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                       PRIMARY KEY (`id`)
                       )