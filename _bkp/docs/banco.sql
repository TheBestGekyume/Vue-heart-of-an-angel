CREATE TABLE `poemas` (
 `title_poem` varchar(18) NOT NULL,
 `image_poem` varchar(255) NOT NULL,
 `date_poem` date NOT NULL,
 `text_poem` text NOT NULL,
 `descricao_poem` varchar(24) DEFAULT NULL,
 `id` int(11) NOT NULL AUTO_INCREMENT,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4
